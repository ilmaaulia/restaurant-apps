import RestaurantsSource from '../../data/restaurants-source.js';
import { createRestaurantItemTemplate } from '../templates/template-creator.js';

const Home = {
  async render() {
    return `
      <section id="hero-section" class="heroSection">
        <h1>Welcome to Lupin</h1>
        <p>Discover your perfect taste</p>
      </section>
      <section id="restaurants" class="restaurantList"></section>
      <section class="contact" id="contact">
        <h2>Contact</h2>
        <p>For inquiries, please feel free to <a href="mailto:ilmaaulia2872@gmail.com">Email Us</a>.</p>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantsSource.restaurantList();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      const restaurantItemElement = document.createElement('div');
      restaurantItemElement.classList.add('restaurant-item');
      restaurantItemElement.innerHTML += createRestaurantItemTemplate(restaurant);
      restaurantsContainer.appendChild(restaurantItemElement);

      const readMoreButton = restaurantItemElement.querySelector('.read-more');
      const description = restaurantItemElement.querySelector('.restaurant-item__description');
      readMoreButton.addEventListener('click', () => {
        description.classList.toggle('show-description');
        if (description.classList.contains('show-description')) {
          readMoreButton.classList.add('active');
        } else {
          readMoreButton.classList.remove('active');
        }
      });
    });
  },
};

export default Home;
