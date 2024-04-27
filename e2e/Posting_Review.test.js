const assert = require('assert');

Feature('Posting Review');

Scenario('User post a review', async ({ I }) => {
  I.amOnPage('/');

	I.waitForElement('.restaurant-item', 5);
  I.seeElement('.restaurant-item__name a');

  const firstRestaurant = locate('.restaurant-item__name a').first();
	I.click(firstRestaurant);

  const name = 'E2E Reviewer';
  const review = 'E2E Review Content';
  
	I.fillField('#name', name);
  I.fillField('#review', review);

  I.click('#submit-review');

  I.waitForElement('.review-card .review-item-new', 5);

  const lastReviewNameText = await I.grabTextFrom('.review-card .review-item-new .name');
  const lastReviewContentText = await I.grabTextFrom('.review-card .review-item-new .review');

  assert.strictEqual(lastReviewNameText, name);
  assert.strictEqual(lastReviewContentText, review);
});
