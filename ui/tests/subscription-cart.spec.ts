import { test } from '@playwright/test';
import { CartPage } from '../pages/CartPage';
import * as subscriptionData from '../data/subscription.json';

test('Test Case: Verify Subscription in Cart page using flat POM', async ({ page }) => {
  const cartPage = new CartPage(page);

  await cartPage.goto();
  await cartPage.scrollToFooter();
  await cartPage.verifySubscriptionSectionVisible();
  await cartPage.subscribeWithEmail(subscriptionData.email);
  await cartPage.verifySuccessMessage();
});
