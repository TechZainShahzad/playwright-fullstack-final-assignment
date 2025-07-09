import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import * as user from '../data/loginData.json';

test('Test Case: Login User with correct email and password', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(user.email, user.password);
  await loginPage.verifySuccessfulLogin();
});
