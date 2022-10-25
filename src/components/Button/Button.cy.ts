import Button from './Button.vue'

describe('<Button />', () => {
  it('renders', () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(Button)
  })
})