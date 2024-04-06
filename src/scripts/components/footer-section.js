class Footer extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
      <footer>
        <p class="copyright" id="copyright-section">Copyright &copy; 2024 Lupin.</p>
      </footer>
    `;
  }
}

customElements.define('footer-section', Footer);
