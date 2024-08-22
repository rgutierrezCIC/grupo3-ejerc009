<<<<<<< HEAD
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
=======

describe('FormularioColoresComponent', () => {
    beforeEach(() => {
      // Visita la URL donde se encuentra el componente en tu aplicación
      cy.visit('/Page2View') // Asegúrate de que la URL sea la correcta
    })
>>>>>>> fc03899bd3662f5a01039f9f23f9cd87e7a81f15
  
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
  