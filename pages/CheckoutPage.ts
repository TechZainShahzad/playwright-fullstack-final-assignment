import { Page, Locator, expect } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addProductToCart(quantity: string) {
    await this.page.locator('.nav.nav-pills.nav-justified > li > a').first().click();
    await this.page.locator('#quantity').fill(quantity);
    await this.page.getByRole('button', { name: ' Add to cart' }).click();
    await this.page.getByRole('link', { name: 'View Cart' }).click();
  }

  async verifyProductInCart(productName: string, quantity: string) {
    const product = this.page.locator('#product-1');
    await expect(product).toContainText(productName);
    await expect(product).toContainText(quantity);
  }

  async proceedToCheckout() {
    await this.page.getByText('Proceed To Checkout').click();
  }

  async verifyAddresses(address: any) {
    const delivery = this.page.locator('#address_delivery');
    const invoice = this.page.locator('#address_invoice');

    for (const value of Object.values(address)) {
      await expect(delivery).toContainText(value as string);
      await expect(invoice).toContainText(value as string);
    }
  }

  async addComment(message: string) {
    await this.page.locator('textarea[name="message"]').fill(message);
  }

  async placeOrder() {
    await this.page.getByRole('link', { name: 'Place Order' }).click();
  }

  async fillPaymentDetails(payment: any) {
    await this.page.locator('input[name="name_on_card"]').fill(payment.nameOnCard);
    await this.page.locator('input[name="card_number"]').fill(payment.cardNumber);
    await this.page.getByRole('textbox', { name: 'ex.' }).fill(payment.cvc);
    await this.page.getByRole('textbox', { name: 'MM' }).fill(payment.expiryMonth);
    await this.page.getByRole('textbox', { name: 'YYYY' }).fill(payment.expiryYear);
  }

  async confirmOrder() {
    await this.page.getByRole('button', { name: 'Pay and Confirm Order' }).click();
    await expect(this.page.locator('#form')).toContainText('Congratulations! Your order has been confirmed!');
  }

  async continueToHome() {
    await this.page.getByRole('link', { name: 'Continue' }).click();
  }
}
