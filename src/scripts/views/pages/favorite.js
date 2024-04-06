import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb.js';
import { createRestaurantItemTemplate } from '../templates/template-creator.js';

const Favorite = {
  async render() {
    return `
      <h2 class="favorite-heading">Your Favorite Restaurant</h2>
      <div id="restaurants" class="restaurant-list favorite"></div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');

    if (restaurants.length === 0) {
      restaurantsContainer.innerHTML = '<p>There are no favorite restaurants yet :(</p>';
    } else {
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
    }
  },
};

export default Favorite;
