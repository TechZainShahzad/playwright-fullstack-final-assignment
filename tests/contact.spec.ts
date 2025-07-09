import { test } from '@playwright/test';
import { ContactPage } from '../pages/ContactPage';
import * as contact from '../data/contactData.json';

test('Test Case: Contact Us Form', async ({ page }) => {
  const contactPage = new ContactPage(page);

  await contactPage.goto();
  await contactPage.fillContactForm(contact);
  await contactPage.uploadFile('data/upload.txt'); // ✅ File will be uploaded
  await contactPage.submitForm();
  await contactPage.returnHome();
});
