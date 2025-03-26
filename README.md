📂 Project Structure
The solutions to Task 1 and Task 2 are located in the following folder:

cypress/e2e/

The project is built using Cypress with the Cucumber preprocessor for BDD scenarios.

✅ Task 1 - Registration Form Automation
This test automates the registration process and validates that an error message appears when the Date of Birth is missing.

Test Steps:
Navigate to: MoneyGaming QA Site

Click JOIN NOW to open the registration page.

Fill in the Title, First Name, and Surname fields.

Accept the Terms and Conditions checkbox.

Click JOIN NOW to submit the form.

Validate that the error message "This field is required" appears under the Date of Birth field.

✅ Task 2 - BDD Feature File (Password Validation)
A Gherkin feature file covering the new acceptance criteria for password validation is included.

The feature file is located at:

cypress/e2e/IVAILO_ALEKSANDROV_MG.feature

⚙️ Setup & Run Instructions
<br>1️⃣ Install Dependencies
Run the following command in your project root:
npm install
<br>2️⃣ Run Cypress Tests
npx cypress open 
or
npx cypress run

🚀 Continuous Integration (CI/CD)
The project is configured to run tests automatically on every pull request via GitHub Actions.


