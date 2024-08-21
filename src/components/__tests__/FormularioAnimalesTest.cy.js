/**
 * Importaciones: Importa mount de Cypress para montar el componente 
 * y el componente FormularioAnimales.
*/
import { mount } from '@cypress/vue';
import FormularioAnimales from '@/components/FormularioAnimales.vue'; // Asegúrate de que la ruta es correcta

describe('FormularioAnimales.vue', () => {
  //Monta el componente antes de cada prueba con las props iniciales.
  beforeEach(() => {
    mount(FormularioAnimales, {
      props: {
        modelValue: {
          nombre: '',
          color: ''
        }
      }
    });
  });

  it('debería renderizar el formulario correctamente', () => {
    cy.get('form').should('exist');
    cy.get('label[for="nombre"]').should('contain', 'Nombre del animal:');
    cy.get('label[for="color"]').should('contain', 'Color del animal:');
    cy.get('input#nombre').should('exist');
    cy.get('input#color').should('exist');
  });

  it('debería permitir al usuario escribir en los campos de texto', () => {
    const nombre = 'Tigre';
    const color = 'Naranja';

    cy.get('input#nombre').type(nombre).should('have.value', nombre);
    cy.get('input#color').type(color).should('have.value', color);
  });

  it('debería emitir el evento con los valores del formulario al enviarlo', () => {
    const nombre = 'León';
    const color = 'Amarillo';

    cy.get('input#nombre').type(nombre);
    cy.get('input#color').type(color);

    // Guarda el wrapper en un alias
    cy.wrap(Cypress.vueWrapper).as('wrapper');

    cy.get('form').submit();

    cy.get('@wrapper').then(wrapper => {
      // Verifica que el evento fue emitido
      expect(wrapper.emitted('update:modelValue')).to.have.length(1);
      // Verifica que el valor emitido es correcto
      expect(wrapper.emitted('update:modelValue')[0][0]).to.deep.equal({ nombre, color });
    });
  });
});