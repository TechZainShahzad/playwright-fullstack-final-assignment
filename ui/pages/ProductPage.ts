import { Page, Locator, expect } from '@playwright/test';

export class ProductPage {
  readonly page: Page;

  readonly productsLink: Locator;
  readonly productListFirstItem: Locator;
  readonly productSection: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly searchResultsSection: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productsLink = page.getByRole('link', { name: ' Products' });
    this.productListFirstItem = page.locator('.nav.nav-pills.nav-justified > li > a').first();
    this.productSection = page.locator('section');
    this.searchInput = page.getByRole('textbox', { name: 'Search Product' });
    this.searchButton = page.getByRole('button', { name: '' });
    this.searchResultsSection = page.locator('.features_items'); 
  }

  async goto() {
    await this.page.goto('https://automationexercise.com/');
  }

  async verifyHomePageVisible() {
    await expect(this.page).toHaveTitle(/Automation Exercise/);
  }

  async navigateToAllProducts() {
    await this.productsLink.click();
    await expect(this.page.locator('body')).toContainText('All Products');
  }

  async viewFirstProduct() {
    await this.productListFirstItem.click();
  }

  async verifyProductDetails(data: any) {
    const section = this.productSection;
    await expect(section).toContainText(data.productName);
    await expect(section).toContainText(data.category);
    await expect(section).toContainText(data.price);
    await expect(section).toContainText(data.availability);
    await expect(section).toContainText(data.condition);
    await expect(section).toContainText(data.brand);
  }

  async searchForProduct(productName: string) {
  await this.searchInput.fill(productName);
  await this.searchButton.click();
}

async verifySearchResultsVisible(searchText: string) {
  await expect(this.page.locator('body')).toContainText('Searched Products');
  await expect(this.searchResultsSection).toContainText(searchText);
}

async scrollSearchResultsDown(pixels: number = 500) {
  await this.page.evaluate((scrollBy) => {
    window.scrollBy(0, scrollBy);
  }, pixels);
}

}
