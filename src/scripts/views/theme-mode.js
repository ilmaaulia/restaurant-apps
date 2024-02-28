class ThemeToggle extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
			<button id="theme-toggle" class="theme-toggle" aria-label="Change Theme">
				<i class="bi bi-brightness-low-fill moon-icon"></i>
				<i class="bi bi-moon-fill sun-icon hide"></i>
			</button>
		`;

		const modeToggle = this.querySelector('.theme-toggle');
		const moonIcon = this.querySelector('.moon-icon');
		const sunIcon = this.querySelector('.sun-icon');

		modeToggle.addEventListener('click', () => {
			document.body.classList.toggle('light-mode');
			moonIcon.classList.toggle('hide');
			sunIcon.classList.toggle('hide');
		});
	}
}

customElements.define('theme-toggle', ThemeToggle);
