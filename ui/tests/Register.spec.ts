import { test } from '@playwright/test';
import { SignupPage } from '../pages/SignupPage';
import * as user from '../data/userData.json';

test('Test Case: Register User', async ({ page }) => {
  const signupPage = new SignupPage(page);

  await signupPage.goto();
  await signupPage.fillBasicInfo(user.name, user.email);
  await signupPage.fillAccountDetails(user);
  await signupPage.verifyAccountCreated();
});
