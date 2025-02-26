// import '~/app/vendor/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {


	document.querySelectorAll('textarea').forEach(el => {
		el.style.height = el.setAttribute('style', 'height: ' + el.scrollHeight + 'px');
		el.classList.add('auto');
		el.addEventListener('input', e => {
				el.style.height = 'auto';
				el.style.height = (el.scrollHeight) + 'px';
		});
		el.addEventListener("select", e => {
			e.preventDefault()
		})
	});

	document.addEventListener("contextmenu", (event) => event.preventDefault());

	document.addEventListener("keydown", (event) => {
			if (
					(event.ctrlKey && ["c", "x", "v", "s", "u", "p"].includes(event.key.toLowerCase())) ||
					event.key === "F12"
			) {
					event.preventDefault();
			}
	});

	document.addEventListener("selectstart", (event) => event.preventDefault());
});
