class RestaurantList extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
      <section id="restaurant-list" class="restaurantList"></section>
    `;
  }
}

customElements.define('restaurant-list', RestaurantList);
