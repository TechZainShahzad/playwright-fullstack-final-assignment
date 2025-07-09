import { Page, Locator, expect } from '@playwright/test';

export class SignupPage {
  readonly page: Page;

  readonly signupLoginLink: Locator;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly signupButton: Locator;
  readonly titleMr: Locator;
  readonly passwordInput: Locator;
  readonly dayDropdown: Locator;
  readonly monthDropdown: Locator;
  readonly yearDropdown: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly companyInput: Locator;
  readonly address1Input: Locator;
  readonly address2Input: Locator;
  readonly countryDropdown: Locator;
  readonly stateInput: Locator;
  readonly cityInput: Locator;
  readonly zipInput: Locator;
  readonly mobileInput: Locator;
  readonly createAccountButton: Locator;
  readonly accountCreatedText: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.signupLoginLink = page.getByRole('link', { name: ' Signup / Login' });
    this.nameInput = page.getByRole('textbox', { name: 'Name' });
    this.emailInput = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address');
    this.signupButton = page.getByRole('button', { name: 'Signup' });
    this.titleMr = page.getByText('Mr.');
    this.passwordInput = page.getByRole('textbox', { name: 'Password *' });
    this.dayDropdown = page.locator('#days');
    this.monthDropdown = page.locator('#months');
    this.yearDropdown = page.locator('#years');
    this.firstNameInput = page.getByRole('textbox', { name: 'First name *' });
    this.lastNameInput = page.getByRole('textbox', { name: 'Last name *' });
    this.companyInput = page.getByRole('textbox', { name: 'Company', exact: true });
    this.address1Input = page.getByRole('textbox', { name: 'Address * (Street address, P.' });
    this.address2Input = page.getByRole('textbox', { name: 'Address 2' });
    this.countryDropdown = page.getByLabel('Country *');
    this.stateInput = page.getByRole('textbox', { name: 'State *' });
    this.cityInput = page.getByRole('textbox', { name: 'City * Zipcode *' });
    this.zipInput = page.locator('#zipcode');
    this.mobileInput = page.getByRole('textbox', { name: 'Mobile Number *' });
    this.createAccountButton = page.getByRole('button', { name: 'Create Account' });
    this.accountCreatedText = page.locator('b');
    this.continueButton = page.getByRole('link', { name: 'Continue' });
  }

  async goto() {
    await this.page.goto('https://automationexercise.com/');
    await this.signupLoginLink.click();
  }

  async fillBasicInfo(name: string, email: string) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.signupButton.click();
  }

  async fillAccountDetails(user: any) {
    await this.titleMr.click();
    await this.passwordInput.fill(user.password);
    await this.dayDropdown.selectOption(user.dob.day);
    await this.monthDropdown.selectOption(user.dob.month);
    await this.yearDropdown.selectOption(user.dob.year);
    await this.firstNameInput.fill(user.firstName);
    await this.lastNameInput.fill(user.lastName);
    await this.companyInput.fill(user.company);
    await this.address1Input.fill(user.address1);
    await this.address2Input.fill(user.address2);
    await this.countryDropdown.selectOption(user.country);
    await this.stateInput.fill(user.state);
    await this.cityInput.fill(user.city);
    await this.zipInput.fill(user.zipcode);
    await this.mobileInput.fill(user.mobile);
    await this.createAccountButton.click();
  }

  async verifyAccountCreated() {
    await expect(this.accountCreatedText).toContainText('Account Created!');
    await this.continueButton.click();
  }
}
