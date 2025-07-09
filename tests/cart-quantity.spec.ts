import { test } from '@playwright/test';
import { ProductQuantityPage } from '../pages/ProductQuantityPage';
import * as data from '../data/productQuantity.json';

test('Test Case: Verify Product quantity in Cart using POM and JSON', async ({ page }) => {
  const productPage = new ProductQuantityPage(page);

  await productPage.goto();
  await productPage.openProductDetail();
  await productPage.setProductQuantity(data.quantity);
  await productPage.addToCart();
  await productPage.goToCart();
  await productPage.verifyProductInCart(data);
});
