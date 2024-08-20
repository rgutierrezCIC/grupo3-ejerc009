describe('Color Change Tests', () => {
    beforeEach(() => {
      // Visita tu aplicación antes de cada prueba
      cy.visit('/Page2View.vue')
    })
  
    it('should change color when button is clicked', () => {
      // Verifica el color inicial
      cy.get('.box').should('have.attr', 'style').and('include', 'background-color: blue')
  
      // Haz clic en el botón para cambiar el color
      cy.contains('Cambiar Color').click()
  

      // Verificar que el color ha vuelto a azul
      cy.get('.box').should('have.attr', 'style').and('include', 'background-color: green')

      cy.contains('Cambiar Color').click()

      cy.get('.box').should('have.attr', 'style').and('include', 'background-color: yellow')


    })
  
    
  })
  