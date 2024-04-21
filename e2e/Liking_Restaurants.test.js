const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', async ({ I }) => {
  I.seeElement('.favorite-heading');
  I.see('There are no favorite restaurants yet :(', '.restaurant-list');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.restaurant-item', 5);
  I.seeElement('.restaurant-item__name a');

  const firstRestaurant = locate('.restaurant-item__name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
	I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant-item', 2);
  I.seeElement('.restaurant-item');
  const likedRestaurantName = await I.grabTextFrom('.restaurant-item__name');

  assert.strictEqual(likedRestaurantName, firstRestaurantName);
});

Scenario('unliking one restaurant', async ({ I }) => {
	I.amOnPage('/');

  I.waitForElement('.restaurant-item', 5);
  I.seeElement('.restaurant-item__name a');

  const firstRestaurant = locate('.restaurant-item__name a').first();
	I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
	I.waitForElement('.restaurant-item', 2);

	const likedRestaurant = locate('.restaurant-item__name a').first();
	I.click(likedRestaurant);

	I.waitForElement('#likeButton');
	I.click('#likeButton');

	I.amOnPage('/#/favorite');
  I.see('There are no favorite restaurants yet :(', '.restaurant-list');
});
