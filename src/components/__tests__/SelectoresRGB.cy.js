import { mount } from '@cypress/vue';
import SelectoresRGB from '@/components/SelectoresRGB.vue';

describe('SelectoresRGB Component', () => {
    let onUpdateColorSpy;
  
    beforeEach(() => {
      onUpdateColorSpy = cy.spy().as('updateColorSpy');
      mount(SelectoresRGB, {
        listeners: {
          'update:color': onUpdateColorSpy
        }
      });
    });
  
    it('Debería actualizar los valores de los selectores y emitir el evento update:color', () => {
      // Selecciona los inputs de rango
      cy.get('input#red').as('redInput');
      cy.get('input#green').as('greenInput');
      cy.get('input#blue').as('blueInput');
  
      // Verifica los valores iniciales
      cy.get('@redInput').should('have.value', '128');
      cy.get('@greenInput').should('have.value', '128');
      cy.get('@blueInput').should('have.value', '128');
  
      // Cambia los valores de los inputs y verifica después de cada cambio
      cy.get('@redInput').invoke('val', 100).trigger('input').should('have.value', '100');
      cy.get('@greenInput').invoke('val', 150).trigger('input').should('have.value', '150');
      cy.get('@blueInput').invoke('val', 200).trigger('input').should('have.value', '200');
  
    });
  });