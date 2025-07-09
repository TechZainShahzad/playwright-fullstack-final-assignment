import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly footer: Locator;
  readonly subscriptionHeading: Locator;
  readonly emailInput: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.footer = page.locator('#footer');
    this.subscriptionHeading = page.locator('#footer').getByText('Subscription', { exact: false });
    this.emailInput = page.getByRole('textbox', { name: 'Your email address' });
    this.submitButton = page.getByRole('button', { name: '' }); // arrow icon button
    this.successMessage = page.locator('#success-subscribe');
  }

  async goto() {
    await this.page.goto('https://automationexercise.com/');
  }

  async verifyHomePageVisible() {
    await expect(this.page).toHaveTitle(/Automation Exercise/);
  }

  async scrollToFooter() {
    await this.page.locator('#footer').scrollIntoViewIfNeeded();
  }

  async verifySubscriptionHeading() {
    await expect(this.subscriptionHeading).toBeVisible();
  }

  async subscribe(email: string) {
    await this.emailInput.fill(email);
    await this.submitButton.click();
  }

  async verifySubscriptionSuccess() {
    await expect(this.successMessage).toContainText('You have been successfully subscribed!');
  }
}
