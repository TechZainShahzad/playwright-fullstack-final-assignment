# **Playwright Fullstack Final Assignment**

This project is a comprehensive end-to-end automation suite built with **Playwright + TypeScript**, covering both **UI testing** of [AutomationExercise.com](https://automationexercise.com) and **API testing** using [Reqres.in](https://reqres.in).

It showcases modern automation practices like Page Object Model, reusable utilities, CI/CD via GitHub Actions, and clear test modularization.

---

**🔹 Project Structure**

* `api/data` – API test data (e.g. JSON payloads)

* `api/tests` – API test cases (GET, POST, PUT, DELETE)

* `api/utils` – Shared clients and helper functions (e.g. for storing user ID)

* `ui/data` – UI test input (e.g. user credentials, test values)

* `ui/pages` – Page Object Model classes for UI flows

* `ui/tests` – UI test cases for login, cart, checkout, etc.

* `.github/workflows/` – GitHub Actions pipeline config

* `playwright.config.ts` – Playwright configuration (browser, tracing, reports)

* `package.json` – Dependencies and test scripts

---

**🧪 UI Test Cases**

All UI flows are built using the **Page Object Model** and include assertions, screenshots, and video recording (in CI).

* Add product to cart
* Update cart quantity
* Checkout happy path (guest user)
* Submit contact form
* Login with existing user
* Signup / Register new user
* Search for a product
* View individual product details
* Subscribe from cart page
* Subscribe from homepage

---

**🔌 API Test Cases**

The Reqres public API is used to demonstrate CRUD operations:

* **GET** Users List (page 2)
* **GET** Single User (ID = 2)
* **POST** Create a new user
* **PUT** Update the newly created user
* **DELETE** Delete the created user

User ID is shared dynamically between POST → PUT → DELETE using utility functions.

---

**🚀 How to Run Tests**

Install dependencies:

```bash
npm ci
```

Install Playwright browsers:

```bash
npx playwright install --with-deps
```

Run all tests:

```bash
npx playwright test
```

Run only UI tests:

```bash
npx playwright test ui/tests
```

Run only API tests:

```bash
npx playwright test api/tests
```

Show the HTML test report:

```bash
npx playwright show-report
```

---

**⚙️ GitHub Actions CI/CD**

The project runs automated tests on every push or PR to the `master` branch using GitHub Actions.

CI/CD Steps:

* Checkout code
* Install dependencies
* Install Playwright browsers
* Run all tests in headless mode
* Upload test report artifact

Test report is saved in `playwright-report/` and available under the **Actions** tab.

---

**🛠 Features**

* TypeScript + Playwright native test runner
* Page Object Model for UI
* Modular API utilities
* Automatic screenshots, video, and trace collection
* Separate UI and API test folders
* HTML test reporting
* GitHub Actions pipeline for continuous testing

---

## 🧑‍💻 Tech Stack & Tools

* [Playwright](https://playwright.dev) for cross-browser automation
* TypeScript for typed test development
* [Reqres.in](https://reqres.in) public API for API test mocks
* [Automation Exercise](https://automationexercise.com) demo site for UI flows
* GitHub Actions for CI/CD pipeline

---

## 📝 Author

**Zain Shahzad**

Final Automation Assignment!
