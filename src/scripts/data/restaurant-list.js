class RestaurantList {
  constructor() {
    this.restaurantList = document.getElementById('restaurant-list');
  }

  async displayRestaurants() {
    try {
      const response = await fetch('data/DATA.json');
      const { restaurants } = await response.json();

      restaurants.forEach(({
        name, description, city, rating, pictureId,
      }) => {
        const restaurantItem = document.createElement('section');
        restaurantItem.classList.add('restaurantItem');
        restaurantItem.innerHTML = `
          <img src="${pictureId}" alt="${name}">
          <div class="info">
            <p class="city"><i class="bi bi-geo-alt-fill"></i>${city}</p>
            <p class="rating"><i class="bi bi-star-fill"></i>${rating}</p>
            <h2 class="name">${name}</h2>
            <p class="description">${description}</p>
            <button class="read-more"></button>
          </div>
        `;
        this.restaurantList.appendChild(restaurantItem);
      });

      this.showMoreDescription();
    } catch (retjectedReason) {
      console.log(retjectedReason);
    }
  }

  showMoreDescription() {
    this.restaurantList.addEventListener('click', (event) => {
      const readMoreButton = event.target.closest('.read-more');
      if (readMoreButton) {
        const description = readMoreButton.previousElementSibling;
        description.classList.toggle('show-description');
        readMoreButton.classList.toggle('active');
      }
    });
  }
}

new RestaurantList().displayRestaurants();
