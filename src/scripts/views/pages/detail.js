import UrlParser from '../../routes/url-parser.js';
import RestaurantsSource from '../../data/restaurants-source.js';
import { createRestaurantDetailTemplate } from '../templates/template-creator.js';

const Detail = {
  async render() {
    return `
      <section id="restaurant" class="restaurantDetail"></section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantsSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant.restaurant);
  },
};

export default Detail;
