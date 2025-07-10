import { test } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage';
import * as searchData from '../data/productSearch.json';

test('Test Case: Search Product using POM and JSON data', async ({ page }) => {
  const productPage = new ProductPage(page);

  await productPage.goto();
  await productPage.verifyHomePageVisible();

  await productPage.navigateToAllProducts();

  await productPage.searchForProduct(searchData.searchTerm);
  await productPage.scrollSearchResultsDown(500);

  await productPage.verifySearchResultsVisible(searchData.searchTerm);
});
