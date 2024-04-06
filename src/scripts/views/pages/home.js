import RestaurantsSource from '../../data/restaurants-source.js';
import { createRestaurantItemTemplate } from '../templates/template-creator.js';

const Home = {
  async render() {
    return `
      <section id="hero-section" class="hero-section">
        <h1>Welcome to Lupin</h1>
        <p>Discover your perfect taste</p>
      </section>
      <div id="loading" class="loading-spinner">
        <div class="dot dot1"></div>
        <div class="dot dot2"></div>
        <div class="dot dot3"></div>
        <div class="dot dot4"></div>
      </div>
      <section id="restaurants" class="restaurant-list"></section>
      <section class="contact" id="contact">
        <h2>Contact</h2>
        <p>For inquiries, please feel free to <a href="mailto:ilmaaulia2872@gmail.com">Email Us</a>.</p>
      </section>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#restaurants');
    const loadingElement = document.getElementById('loading');

    loadingElement.style.display = 'flex';

    setTimeout(async () => {
      try {
        const restaurants = await RestaurantsSource.restaurantList();
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
      } catch (error) {
        console.log('Error loading restaurants:', error);
        restaurantsContainer.innerHTML = '<p>Error loading restaurants. Please try again later.</p>';
      } finally {
        loadingElement.style.display = 'none';
      }
    }, 2000);
  },
};

export default Home;
