describe('Page3View Tests', () => {
  beforeEach(() => {
    // Visita la página /page3 antes de cada prueba
    cy.visit('/page3')
  });

  it('Debe mostrar el contenido correcto en Page3', () => {
    // Verifica que el componente Page3View se muestra
    cy.get('.page3-view').should('be.visible');
    
    // Verifica que el mensaje inicial se muestra
    cy.get('h1').should('contain', 'Estamos en la página 3');
  });

  it('Debe mostrar y ocultar el mensaje correctamente', () => {
    cy.get('h1').should('contain', 'Estamos en la página 3');
    
    cy.get('button').contains('Ocultar').click();
  
    cy.wait(500); // Espera medio segundo para la actualización
  
    cy.get('h1').should('not.exist');
  
    cy.get('button').contains('Mostrar').click();
  
    cy.wait(500); // Espera medio segundo para la actualización
  
    cy.get('h1').should('contain', 'Estamos en la página 3');
  });


  it('Debe mostrar y ocultar la lista de animales correctamente', () => {
    // Dentro del componente Page3View
    cy.get('.page3-view').within(() => {
      // Haz clic en el botón para mostrar la lista de animales
      cy.get('button').contains('Ver lista de animales').click();
      
      // Verifica que la lista de animales se muestra
      cy.get('ul').should('be.visible');
      
      // Haz clic en el botón para ocultar la lista de animales
      cy.get('button').contains('Ocultar lista de animales').click();
      
      // Verifica que la lista de animales ya no se muestra
      cy.get('ul').should('not.exist');
    });
  });

  
  it('Debe cambiar el color de los animales al pasar el cursor', () => {
    cy.get('button').contains('Ver lista de animales').click();
    
    const expectedColors = ['rgb(255, 0, 0)', 'rgb(0, 128, 0)', 'rgb(0, 0, 255)', 'rgb(128, 0, 128)']; // Los valores RGB para red, green, blue, purple
    
    cy.get('li').each(($el, index) => {
      cy.wrap($el).trigger('mouseover').should('have.css', 'color', expectedColors[index]);
      cy.wrap($el).trigger('mouseleave').should('have.css', 'color', 'rgb(0, 0, 0)'); // black
    });
  });
});