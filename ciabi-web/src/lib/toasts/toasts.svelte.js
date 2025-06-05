export const toasts = $state([
	{ icon: 'icon', content: 'toasts are coming to ciabi soon!' },
]);

export const newToast = (icon, content) => {
	toasts.push({icon: icon, content: content})
};