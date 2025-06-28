/*
  function start() {
    console.log("start")
    // --- Usage ---

    const chatMessages = [
        { role: "system", content: "You are a travel agent." },
        { role: "user", content: "Suggest a 3-day itinerary for Rome." },
    ];
    let result = postChatCompletion(chatMessages, { model: "mistral", seed: 500 });
  } */
import { system } from "$lib/packgod/training.ts";

async function postChatCompletion(messages, options = {}) {
  const url = "https://text.pollinations.ai/openai";
  const payload = {
    model: options.model || "deepseek-r1",
    messages: messages,
    seed: options.seed,
    private: options.private,
    referrer: options.referrer || "WebApp", // Optional
  };

  console.log("Sending POST request to:", url, payload);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return errorText + ". NOTE TO USER: if you get a Content Policy Violated error it means your request broke OpenAI's rules which I cant do anything abt at the moment"
      throw new Error(
        `HTTP error! status: ${response.status}, message: ${errorText}`
      );
    }

    const result = await response.json();
    console.log("Assistant:", result.choices[0].message.content);
    // console.log("Full response:", result);
    return result.choices[0].message.content; // Return the full response object
  } catch (error) {
    console.error("Error posting chat completion:", error);
  }
}

export async function generate(user_description) {
  console.log("generating roast");

  const systemInstructions = { system };
  const chatMessages = [
    {
      role: "system",
      content: systemInstructions.system 
    },
    {
      role: "user",
      content:
        "I need you to generate a roast for someone. Here is how I would describe them: " +
        user_description + " (Absolutely NO racism, hate speech, ableism, etc at all allowed)"
    },
  ]; 

  let random_seed

  random_seed = Math.floor(Math.random()*500);
  var roast = await postChatCompletion(chatMessages, { model: "deepseek-reasoning", seed: random_seed });
  roast = roast.replace(/<think>[\s\S]*?<\/think>/gi, "")
  roast = roast.replace(/\s{2,}/g, " ")
  roast = roast.trim();


  console.log(roast)
  return roast

}
