describe('MoneyGaming Registration Test', () => {
  beforeEach(() => {
    cy.visit('https://moneygaming.qa.gameaccount.com/');
  });

  it('Validate the registration form', () => {
    // Click "JOIN NOW" button
    cy.get('.green').click(); 

    // Select title
    cy.get('#title').select('Mr');

    // Enter first name and surname
    cy.get('#forename').type('Ivailo');
    cy.get('#surname').type('Aleksandrov'); // Use correct selector

    // Accept terms and conditions
    cy.get('[name="map(toSend).termsAndConditions"]').should('exist').check();

    // Submit the form
    cy.get('#form button[type="submit"]').click();

    // Validate error message for Date of Birth
    cy.contains('This field is required').should('be.visible');
  });
});
