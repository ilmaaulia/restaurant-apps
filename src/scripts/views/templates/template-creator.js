import CONFIG from '../../globals/config.js';

const createRestaurantItemTemplate = (restaurant) => `
  <img class="restaurant-item__image lazyload" src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}">
  <div class="restaurant-item__content">
    <p class="restaurant-item__city"><i class="bi bi-geo-alt-fill"></i>${restaurant.city}</p>
    <p class="restaurant-item__rating"><i class="bi bi-star-fill"></i> ${restaurant.rating}</p>
    <h2 class="restaurant-item__name"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h2>
    <p class="restaurant-item__description">${restaurant.description}</p>
    <button class="read-more" aria-label="Read More Description"></button>
  </div>
`;

const createRestaurantDetailTemplate = (restaurant) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return `
    <div class="restaurant-detail__restaurant">
      <img class="restaurant-detail__image" src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}">
      <div class="restaurant-detail__info">
        <h2 class="restaurant-detail__name">${restaurant.name}</h2>
        <div class="restaurant-detail__important">
          <div class="restaurant-detail__rating">
            <p><i class="bi bi-star-fill"></i> ${restaurant.rating}</p>
            <p>Rating</p>
          </div>
          <div class="restaurant-detail__location">
            <p><i class="bi bi-geo-alt-fill"></i> ${restaurant.address}, ${restaurant.city}</p>
            <p>Location</p>
          </div>
          <div class="restaurant-detail__categories" aria-label="categories">
            <p><i class="bi bi-tag-fill"></i> ${restaurant.categories ? restaurant.categories.map(category => `${category.name} `).join('') : ''}</p>
            <p>Categories</p>
          </div>
        </div>
        <div class="restaurant-detail__menus">
          <div class="restaurant-detail__foods">
            <h3>Foods</h3>
            <div class="foods">
              ${restaurant.menus && restaurant.menus.foods ? restaurant.menus.foods.map(food => `<p>${food.name}</p>`).join('') : ''}
            </div>
          </div>
          <div class="restaurant-detail__drinks">
            <h3>Drinks</h3>
            <div class="drinks">
              ${restaurant.menus && restaurant.menus.drinks ? restaurant.menus.drinks.map(drink => `<p>${drink.name}</p>`).join('') : ''}
            </div>
          </div>
        </div>
        <p class="restaurant-detail__description">${restaurant.description}</p>
      </div>
    </div>
    <div class="restaurant-detail__reviews">
      <h3>Customer Reviews</h3>
      <form id="review-form" class="review-form">
        <input type="text" id="name" placeholder="Your Name" required>
        <textarea id="review" placeholder="Write your review here" required></textarea>
        <button type="submit" id="submit-review">Submit Review</button>
      </form>
      <div class="review-card">
        ${restaurant.customerReviews ? restaurant.customerReviews.map(review => `
          <div class="review-item">
            <img src="./images/man.png" alt="${review.name}" class="photo">
            <div class="review-content">
              <p class="name">${review.name} <span class="date"> · ${formatDate(review.date)}</span></p>
              <p class="review">${review.review}</p>
            </div>
          </div>
        `).join('') : ''}
      </div>
    </div>
  `;
};

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="bi bi-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="bi bi-heart-fill" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
