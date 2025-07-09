import { test } from '@playwright/test';
import { CartFlowPage } from '../pages/CartFlowPage';
import * as cartData from '../data/cartProducts.json';

test('Test Case: Add Products in Cart using POM and JSON', async ({ page }) => {
  const cartPage = new CartFlowPage(page);

  await cartPage.goto();
  await cartPage.openProductsPage();

 await cartPage.addFirstProductToCart();

  await cartPage.addSecondProductToCart();
  await cartPage.viewCart();

  await cartPage.verifyCartProduct(cartData.product1);
  await cartPage.verifyCartProduct(cartData.product2);
});
