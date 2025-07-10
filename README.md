```markdown
# Playwright Fullstack Final Assignment

This project is a comprehensive end-to-end test automation suite using **Playwright** with **TypeScript**, covering both UI and API testing.

- **UI Automation** targets the [Automation Exercise](https://automationexercise.com) website  
- **API Testing** targets the [Reqres.in](https://reqres.in) public REST API  

This assignment demonstrates advanced automation practices including modular design, data-driven tests, and CI/CD integration with GitHub Actions.

---

## 📁 Project Structure

```

.
├── api/
│   ├── data/          # Test data files for API tests (JSON etc.)
│   ├── tests/         # API test files
│   └── utils/         # API helper functions and reusable clients
│
├── ui/
│   ├── data/          # Test data for UI tests (test users, products, etc.)
│   ├── pages/         # Page Object Model classes for UI elements & flows
│   └── tests/         # UI test cases
│
├── .github/workflows/ # GitHub Actions CI/CD pipeline
├── playwright.config.ts  # Playwright test configuration
├── package.json
└── README.md

````

---

## 🎯 UI Test Cases Covered

- **Card Add:** Add products to cart and validate cart contents  
- **Card Quantity:** Validate changing quantities updates cart totals correctly  
- **Checkout Happy Flow:** Full checkout flow with successful order placement  
- **Contact:** Submit contact form and verify success message  
- **Login:** User login flow validation  
- **Signup/Register User:** New user registration flow  
- **Product Search:** Search functionality and result validation  
- **Product:** Product details and navigation testing  
- **Subscription on Cart Page:** Validate subscription feature on cart page  
- **Subscription on Homepage:** Validate homepage subscription signup  

All UI tests use Page Object Model (POM) for maintainability and reuse.

---

## 🔗 API Tests Covered

- **GET** List users (page 2)  
- **GET** Single user by ID  
- **POST** Create user  
- **PUT** Update user by ID  
- **DELETE** Delete user by ID  

Tests share data dynamically using utility modules for ID passing and environment management.

---

## ⚙️ Running Tests Locally

1. **Install dependencies**

```bash
npm ci
````

2. **Install Playwright browsers**

```bash
npx playwright install --with-deps
```

3. **Run all tests**

```bash
npx playwright test
```

4. **Run only UI or API tests**

```bash
npx playwright test ui/tests
npx playwright test api/tests
```

5. **View HTML test report**

```bash
npx playwright show-report
```

---

## 🛠 Configuration

* `playwright.config.ts` includes settings for browsers, headless mode, screenshots, video, and traces
* Report generated as HTML under `playwright-report/` folder
* Tests configured to run with retries, parallelism, and trace collection enabled

---

## 🚀 CI/CD Integration

* GitHub Actions pipeline runs on pushes and pull requests to `main`
* Uses Ubuntu runner with Node.js 18
* Installs dependencies, Playwright browsers, and runs all tests headlessly
* Uploads HTML report artifacts for easy access on GitHub UI

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
Final Automation POC Project — thanks to OpenAI ChatGPT for support!

---

Feel free to request any additions like contribution guidelines, troubleshooting tips, or environment variable documentation!
