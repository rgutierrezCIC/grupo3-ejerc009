describe('Pruebas del componente App.vue', () => {
    beforeEach(() => {
      // Visita la página principal antes de cada prueba
      cy.visit('/');
    });
  
    it('Debe mostrar los enlaces de navegación', () => {
      // Verifica que los enlaces de navegación se muestran
      cy.get('nav').within(() => {
        cy.contains('Page1').should('be.visible');
        cy.contains('Page2').should('be.visible');
      });
    });
  
    it('Debe navegar a Page1 y mostrar el contenido correcto', () => {
      // Haz clic en el enlace de Page1
      cy.contains('Page1').click();
      
      // Verifica que la URL cambia a /page1
      cy.url().should('include', '/page1');
      
      // Verifica que el componente Page1View se muestra
      cy.get('.page1-view').should('be.visible');
    });
  
    it('Debe navegar a Page2 y mostrar el contenido correcto', () => {
      // Haz clic en el enlace de Page2
      cy.contains('Page2').click();
      
      // Verifica que la URL cambia a /page2
      cy.url().should('include', '/page2');
      
      // Verifica que el componente Page2View se muestra
      cy.get('.page2-view').should('be.visible');
    });
  });