import { mount } from '@cypress/vue';
import FormularioColoresComponent from '@/components/FormularioColoresComponent.vue'

describe('FormularioAnimales.vue', () => {
  beforeEach(() => {
    mount(FormularioColoresComponent, {
      props: {
        modelValue: {
          name: '',
          age: ''
        }
      }
    });
  });
  
    it('renders form and handles submission', () => {
        
      cy.get('#name').type('Juan')
      cy.get('#age').type('30')
  
      // Envía el formulario
      cy.get('button').click()
  
      // Verifica si el evento ha sido emitido
      // Esto requiere que tengas una manera de verificar los datos en el componente DatosFormColores.
      cy.get('.display-component')
        .should('contain', 'Nombre: Juan')
        .and('contain', 'Edad: 30')
    })
  })
  