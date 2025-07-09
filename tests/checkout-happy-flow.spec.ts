import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import * as login from '../data/loginData.json';
import * as checkout from '../data/checkoutData.json';

test('Test Case: Complete Checkout after Login (Happy Path)', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login(login.email, login.password);
  await loginPage.verifySuccessfulLogin();

  await checkoutPage.addProductToCart(checkout.quantity);
  await checkoutPage.verifyProductInCart(checkout.productName, checkout.quantity);
  await checkoutPage.proceedToCheckout();
  await checkoutPage.verifyAddresses(checkout.address);
  await checkoutPage.addComment(checkout.message);
  await checkoutPage.placeOrder();
  await checkoutPage.fillPaymentDetails(checkout.payment);
  await checkoutPage.confirmOrder();
  await checkoutPage.continueToHome();
});
