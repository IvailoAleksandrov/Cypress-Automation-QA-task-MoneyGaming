Feature: MoneyGaming Registration - Password Validation

  As a user registering for MoneyGaming,
  I want to ensure my password meets the security requirements,
  So that I can create a valid account.

  Scenario: Password meets all acceptance criteria
    Given the user is on the registration page
    When they enter "P@ssw0rd" as the password
    And they submit the registration form
    Then the registration should be successful

  Scenario: Password is less than 6 characters
    Given the user is on the registration page
    When they enter "P@1" as the password
    And they submit the registration form
    Then an error message "Password must be at least 6 characters long" should be displayed

  Scenario: Password does not contain a number
    Given the user is on the registration page
    When they enter "Password!" as the password
    And they submit the registration form
    Then an error message "Password must contain at least one number" should be displayed

  Scenario: Password does not contain a special character
    Given the user is on the registration page
    When they enter "Passw0rd" as the password
    And they submit the registration form
    Then an error message "Password must contain at least one special character" should be displayed

  Scenario: Password contains only numbers and special characters
    Given the user is on the registration page
    When they enter "123456!" as the password
    And they submit the registration form
    Then an error message "Password must contain at least one letter" should be displayed
