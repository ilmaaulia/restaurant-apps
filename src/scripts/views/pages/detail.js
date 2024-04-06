import UrlParser from '../../routes/url-parser.js';
import API_ENDPOINT from '../../globals/api-endpoint.js';
import RestaurantsSource from '../../data/restaurants-source.js';
import { createRestaurantDetailTemplate } from '../templates/template-creator.js';
import LikeButtonInitiator from '../../utils/like-button-initiator.js';

const Detail = {
  async render() {
    return `
      <section id="restaurant" class="restaurant-detail"></section>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantsSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant.restaurant);

    const reviewForm = document.querySelector('#review-form');
    reviewForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const name = document.querySelector('#name').value;
      const review = document.querySelector('#review').value;
      const reviewData = {
        id: restaurant.restaurant.id,
        name,
        review,
      };
      const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

      try {
        const response = await fetch(API_ENDPOINT.REVIEW, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(reviewData),
        });

        const responseData = await response.json();

        if (responseData.error === false) {
          const reviewCard = document.querySelector('.review-card');
          const newReviewItem = `
            <div class="review-item">
              <img src="./images/man.png" alt="${name}" class="photo">
              <div class="review-content">
                <p class="name">${name} <span class="date"> · ${date}</span></p>
                <p class="review">${review}</p>
              </div>
            </div>
          `;
          reviewCard.insertAdjacentHTML('beforeend', newReviewItem);

          alert('Review successfully added!');

          document.querySelector('#name').value = '';
          document.querySelector('#review').value = '';
        } else {
          alert(responseData.message);
        }
      } catch (error) {
        console.log('Error adding review:', error);
        alert('Failed to add review. Please try again later.');
      }
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        description: restaurant.restaurant.description,
        pictureId: restaurant.restaurant.pictureId,
        city: restaurant.restaurant.city,
        rating: restaurant.restaurant.rating,
      },
    });
  },
};

export default Detail;
