import Button from './Button.vue'

describe('Button', () => {
  it('has the correct defaults', () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(Button)
    cy.get('Button')
      .should('have.attr', 'type', 'button')
      .should('have.class', 'Button')
      .should('have.class', 'Button--shape-pill')
      .should('have.class', 'Button--size-medium')
      .should('have.class', 'Button--variant-secondary')
      .should('not.have.attr', 'disabled')
  })
  it('renders slot content', () => {
    cy.mount(Button, {
      slots: {
        default: () => 'Click me',
      },
    })
    cy.get('Button').should('have.text', 'Click me')
  })
  it('renders an icon', () => {
    cy.mount(Button, {
      props: {
        icon: 'add',
      },
      slots: {
        default: () => 'Click me',
      },
    })
    cy.get('Button').should('contain.html', 'svg')
  })
})
