import { Page, Locator, expect } from '@playwright/test';

export class CartFlowPage {
  readonly page: Page;
  readonly productsLink: Locator;
  readonly firstProductAddBtn: Locator;
  readonly continueShoppingBtn: Locator;
  readonly secondProductAddBtn: Locator;
  readonly viewCartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productsLink = page.getByRole('link', { name: ' Products' });
    this.firstProductAddBtn = page.locator('.btn.btn-default.add-to-cart').first();
    this.continueShoppingBtn = page.getByRole('button', { name: 'Continue Shopping' });
    this.secondProductAddBtn = page.locator('div:nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn');
    this.viewCartLink = page.getByRole('link', { name: 'View Cart' });
  }

  async goto() {
    await this.page.goto('https://automationexercise.com/');
  }

  async openProductsPage() {
    await this.productsLink.click();
  }

  async addFirstProductToCart() {
    await this.firstProductAddBtn.click();
    await this.continueShoppingBtn.click();
  }

  async addSecondProductToCart() {
    await this.secondProductAddBtn.click();
  }

  async viewCart() {
    await this.viewCartLink.click();
  }

  async verifyCartProduct(product: any) {
    const locator = this.page.locator(product.selector);
    await expect(locator).toContainText(product.name);
    await expect(locator).toContainText(product.price);
    await expect(locator).toContainText(product.quantity);
    await expect(locator).toContainText(product.total);
  }
}
