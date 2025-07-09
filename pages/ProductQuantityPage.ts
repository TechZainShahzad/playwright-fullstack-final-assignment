import { Page, Locator, expect } from '@playwright/test';

export class ProductQuantityPage {
  readonly page: Page;
  readonly viewProductLink: Locator;
  readonly quantityInput: Locator;
  readonly addToCartButton: Locator;
  readonly viewCartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.viewProductLink = page.locator('div:nth-child(6) .choose .nav > li > a'); // view for 6th product
    this.quantityInput = page.locator('#quantity');
    this.addToCartButton = page.getByRole('button', { name: ' Add to cart' });
    this.viewCartLink = page.getByRole('link', { name: 'View Cart' });
  }

  async goto() {
    await this.page.goto('https://automationexercise.com/');
  }

  async openProductDetail() {
    await this.viewProductLink.click();
  }

  async setProductQuantity(quantity: string) {
    await this.quantityInput.fill(quantity);
    await this.quantityInput.press('Enter');
  }

  async addToCart() {
    await this.addToCartButton.click();
  }

  async goToCart() {
    await this.viewCartLink.click();
  }

  async verifyProductInCart(product: any) {
    const productLocator = this.page.locator(product.productSelector);
    await expect(productLocator).toContainText(product.productName);
    await expect(productLocator).toContainText(product.quantity);
  }
}
