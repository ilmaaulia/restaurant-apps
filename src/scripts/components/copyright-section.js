class Copyright extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
      <p class="copyright" id="copyright-section">Copyright &copy; 2024 Lupin.</p>
    `;
  }
}

customElements.define('copyright-section', Copyright);
