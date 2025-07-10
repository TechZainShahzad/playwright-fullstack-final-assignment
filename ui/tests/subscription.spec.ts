import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import * as subscriptionData from '../data/subscription.json';

test('Test Case: Verify Subscription in home page', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goto();
  await homePage.verifyHomePageVisible();

  await homePage.scrollToFooter();

  await homePage.verifySubscriptionHeading();

  await homePage.subscribe(subscriptionData.email);

  await homePage.verifySubscriptionSuccess();
});
