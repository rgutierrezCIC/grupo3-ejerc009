describe('Pruebas del componente Page3View.vue', () => {
    beforeEach(() => {
      // Visita la página principal antes de cada prueba
      cy.visit('/Page3View.vue');
    });
  
    it('Debe mostrar el enlace de navegación a Page3', () => {
      // Verifica que el enlace de navegación a Page3 se muestra
      cy.get('nav').within(() => {
        cy.contains('Page3').should('be.visible');
      });
    });
  
    it('Debe navegar a Page3 y mostrar el contenido correcto', () => {
      // Haz clic en el enlace de Page3
      cy.contains('Page3').click();
      
      // Verifica que la URL cambia a /page3
      cy.url().should('include', '/page3');
      
      // Verifica que el componente Page3View se muestra
      cy.get('.page3-view').should('be.visible');
    });
  
    it('Debe mostrar y ocultar el mensaje correctamente', () => {
      cy.contains('Page3').click();
      cy.get('.page3-view').within(() => {
        cy.get('h1').should('contain', 'Estamos en la página 3');
        cy.get('button').contains('Ocultar').click();
        cy.get('h1').should('not.exist');
        cy.get('button').contains('Mostrar').click();
        cy.get('h1').should('contain', 'Estamos en la página 3');
      });
    });
  
    it('Debe añadir y borrar un animal de la lista', () => {
      cy.contains('Page3').click();
      cy.get('.page3-view').within(() => {
        cy.get('input').type('Perro');
        cy.get('form').submit();
        cy.get('ul').should('contain', 'Perro');
        cy.get('ul li').first().within(() => {
          cy.contains('Borrar').click();
        });
        cy.get('ul').should('not.contain', 'Perro');
      });
    });
  
    it('Debe mostrar y ocultar animales correctamente', () => {
      cy.contains('Page3').click();
      cy.get('.page3-view').within(() => {
        cy.get('input').type('Gato');
        cy.get('form').submit();
        cy.get('input').type('Elefante');
        cy.get('form').submit();
        cy.get('ul').should('contain', 'Gato');
        cy.get('ul').should('not.contain', 'Elefante');
        cy.contains('Mostrar siguiente animal').click();
        cy.get('ul').should('contain', 'Elefante');
        cy.contains('Ocultar animales').click();
        cy.get('ul').should('not.contain', 'Gato');
        cy.get('ul').should('not.contain', 'Elefante');
      });
    });
  });