class ThemeToggle extends HTMLElement {
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

    const isLightMode = localStorage.getItem('theme') === 'light';
    if (isLightMode) {
      document.body.classList.add('light-mode');
      moonIcon.classList.add('hide');
      sunIcon.classList.remove('hide');
    }

    modeToggle.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      moonIcon.classList.toggle('hide');
      sunIcon.classList.toggle('hide');

      const currentTheme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
      localStorage.setItem('theme', currentTheme);
    });
  }
}

customElements.define('theme-toggle', ThemeToggle);
