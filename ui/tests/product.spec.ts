import { test } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage';
import * as productData from '../data/productAssertions.json';

test('Test Case: Verify All Products and product detail page', async ({ page }) => {
  const productPage = new ProductPage(page);

  await productPage.goto();
  await productPage.verifyHomePageVisible();

  await productPage.navigateToAllProducts();

  await productPage.viewFirstProduct();

  await productPage.verifyProductDetails(productData);
});
