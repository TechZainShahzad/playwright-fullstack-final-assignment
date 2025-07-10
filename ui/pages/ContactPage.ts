import { Page, Locator, expect } from '@playwright/test';
import * as path from 'path';

export class ContactPage {
  readonly page: Page;

  readonly contactLink: Locator;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly subjectInput: Locator;
  readonly messageInput: Locator;
  readonly uploadInput: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;
  readonly homeButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.contactLink = page.getByRole('link', { name: ' Contact us' });
    this.nameInput = page.getByRole('textbox', { name: 'Name' });
    this.emailInput = page.getByRole('textbox', { name: 'Email', exact: true });
    this.subjectInput = page.getByRole('textbox', { name: 'Subject' });
    this.messageInput = page.getByRole('textbox', { name: 'Your Message Here' });
    this.uploadInput = page.locator('input[type="file"]'); 
    this.submitButton = page.getByRole('button', { name: 'Submit' });
    this.successMessage = page.locator('#contact-page');
    this.homeButton = page.getByRole('link', { name: ' Home' });
  }

  async goto() {
    await this.page.goto('https://automationexercise.com/');
    await this.contactLink.click();
  }

  async fillContactForm(data: any) {
    await this.nameInput.fill(data.name);
    await this.emailInput.fill(data.email);
    await this.subjectInput.fill(data.subject);
    await this.messageInput.fill(data.message);
  }

  async uploadFile(relativeFilePath: string) {
    const filePath = path.resolve(relativeFilePath);
    await this.uploadInput.setInputFiles(filePath);
  }

  async submitForm() {
    await this.submitButton.click();
  }


  async returnHome() {
    await this.homeButton.click();
  }
}
