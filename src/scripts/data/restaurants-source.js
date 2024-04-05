import API_ENDPOINT from '../globals/api-endpoint.js';

class RestaurantsSource {
  static async restaurantList() {
    const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.RESTAURANT_DETAIL(id));
    return response.json();
  }
}

export default RestaurantsSource;
