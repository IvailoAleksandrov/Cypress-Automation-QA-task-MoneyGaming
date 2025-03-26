describe('MoneyGaming Registration Test', () => {
  beforeEach(() => {
    cy.visit('https://moneygaming.qa.gameaccount.com/');
  });

  it('Validate the registration form', () => {
    // Click "JOIN NOW" button using the correct selector
    cy.get('.newUser.green').click();     //  First CORRECTION  with 2 selectors

    // Select title
    cy.get('#title').select('Mr');

    // Enter first name and surname
    cy.get('#forename').type('Ivailo');
    cy.get('input[name="map(lastName)"]').type('YourLastName');   /// Second CORRECTION  data attrubute

    // Accept terms and conditions
    cy.get('.required.checkbox.terms').should('exist').check();  /// Third CORRECTION 3 css selectors

    // Submit the form
    cy.get('#form button[type="submit"]').click();

    // Validate error message for Date of Birth
    cy.contains('This field is required').should('be.visible');
  });
});