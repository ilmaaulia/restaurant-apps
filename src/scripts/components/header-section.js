class Header extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
      <header>
        <nav id="app-bar" class="appBar">
          <a href="#/" class="brand">Lupin</a>
          <div id="drawer">
            <div class="menu-toggle" tabindex="0">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul class="menu">
              <li><a href="#/">Home</a></li>
              <li><a href="#/favorite">Favorite</a></li>
              <li><a href="https://github.com/ilmaaulia" target="_blank" rel="noopener noreferrer">About Us</a></li>
            </ul>
          </div>
          <theme-toggle></theme-toggle>
        </nav>
      </header>
    `;
  }
}

customElements.define('header-section', Header);
