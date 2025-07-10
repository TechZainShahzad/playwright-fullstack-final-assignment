import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartLink: Locator;
  readonly footer: Locator;
  readonly subscriptionText: Locator;
  readonly emailInput: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.cartLink = page.getByRole('link', { name: ' Cart' });
    this.footer = page.locator('#footer');
    this.subscriptionText = this.footer.getByText('Subscription', { exact: false });
    this.emailInput = page.getByRole('textbox', { name: 'Your email address' });
    this.submitButton = page.getByRole('button', { name: '' });
    this.successMessage = page.locator('#success-subscribe');
  }

  async goto() {
    await this.page.goto('https://automationexercise.com/');
    await this.cartLink.click();
  }

  async scrollToFooter() {
    await this.footer.scrollIntoViewIfNeeded();
  }

  async verifySubscriptionSectionVisible() {
    await expect(this.subscriptionText).toBeVisible();
  }

  async subscribeWithEmail(email: string) {
    await this.emailInput.fill(email);
    await this.submitButton.click();
  }

  async verifySuccessMessage() {
    await expect(this.successMessage).toContainText('You have been successfully subscribed!');
  }
}
