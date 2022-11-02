import Card from './Card.vue'

describe('Card', () => {
	it('has the correct defaults', () => {
		cy.mount(Card)
		cy.get('Card')
			.should('have.class', 'Card')
			.should('not.have.attr', 'disabled')
	})
})
