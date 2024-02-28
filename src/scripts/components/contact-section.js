class Contact extends HTMLElement {
	constructor() {
		super();

		this.innerHTML = `
	  <section class="contact" id="contact">
			<h2>Contact</h2>
			<p>For inquiries, please feel free to <a href="mailto:ilmaaulia2872@gmail.com">Email Us</a>.</p>
		</section>		
	`;
	}
}

customElements.define('contact-section', Contact);