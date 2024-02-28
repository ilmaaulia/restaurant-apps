class HeroSection extends HTMLElement {
	constructor() {
		super();

		this.innerHTML = `
			<section id="hero-section" class="heroSection">
				<h1>Welcome to Lupin</h1>
				<p>Discover your perfect taste</p>
			</section>
		`;
	}
}

customElements.define('hero-section', HeroSection);