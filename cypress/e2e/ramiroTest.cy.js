describe('Formulario de Page1View', () => {
  beforeEach(() => {
    cy.visit('/page1');
  });

  it('Debería mostrar el mensaje "Eres menor de edad." para edades menores de 18', () => {
    cy.get('input#age').type('17');
    cy.get('button[type="submit"]').click();
    cy.get('p').should('contain', 'Eres menor de edad.');
  });

  it('Debería mostrar el mensaje "Eres un adulto." para edades entre 18 y 64', () => {
    cy.get('input#age').type('30');
    cy.get('button[type="submit"]').click();
    cy.get('p').should('contain', 'Eres un adulto.');
  });

  it('Debería mostrar el mensaje "Eres mayor de edad." para edades de 65 o más', () => {
    cy.get('input#age').type('67');
    cy.get('button[type="submit"]').click();
    cy.get('p').should('contain', 'Eres una persona mayor.');
  });

  it('Debería actualizar el mensaje cuando se introduce una nueva edad', () => {
    cy.get('input#age').type('17');
    cy.get('button[type="submit"]').click();
    cy.get('p').should('contain', 'Eres menor de edad.');

    cy.get('input#age').clear().type('30');
    cy.get('button[type="submit"]').click();
    cy.get('p').should('contain', 'Eres un adulto.');

    cy.get('input#age').clear().type('67');
    cy.get('button[type="submit"]').click();
    cy.get('p').should('contain', 'Eres una persona mayor.');
  });
});