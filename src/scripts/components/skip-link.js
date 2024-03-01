class SkipLink extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
      <a id="skip-link" class="skip-link" href="#restaurant-list">Skip to content</a>
    `;
  }
}

customElements.define('skip-link', SkipLink);
