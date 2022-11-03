import Card from './Card.vue'

describe('Card', () => {
	it('has the correct defaults', () => {
		cy.mount(Card)
		cy.get('.Card')
			.should('have.class', 'Card')
			.should('not.have.attr', 'disabled')
	})
	it('renders props and slots', () => {
		cy.mount(Card, {
			props: {
				subtitle: 'Habanero',
				title: 'Hello!',
			},
			slots: {
				default: () => 'Primary content',
				footer: () => 'I am the footer',
			},
		})
		cy.get('h3')
			.should('have.text', 'Hello!')
		cy.get('h4')
			.should('have.text', 'Habanero')
		cy.get('.Card__content')
			.should('have.text', 'Primary content')
		cy.get('footer')
			.should('have.text', 'I am the footer')
	})
})
