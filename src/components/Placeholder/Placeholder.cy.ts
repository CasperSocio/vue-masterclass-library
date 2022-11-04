import Placeholder from './Placeholder.vue'

describe('Placeholder', () => {
	it('has the correct defaults', () => {
		cy.mount(Placeholder)
		cy.get('.Placeholder')
			.should('have.class', 'Placeholder')
			.should('have.class', 'Placeholder--soft')
			.should('have.css', 'background-color', 'rgb(112, 128, 144)')
			.should('have.css', 'border-radius', '4px')
			.should('have.css', 'display', 'block')
			.should('have.css', 'height', '24px')
			.should('have.css', 'width', '300px')
	})
	describe('Props', () => {
		it('.shape = pill', () => {
			cy.mount(Placeholder, {
				props: {
					shape: 'pill',
				},
			})
			cy.get('.Placeholder')
				.should('have.class', 'Placeholder--pill')
				.should('not.have.class', 'Placeholder--soft')
				.should('not.have.class', 'Placeholder--square')
				.should('have.css', 'border-radius', '160px')
		})
		it('.shape = square', () => {
			cy.mount(Placeholder, {
				props: {
					shape: 'square',
				},
			})
			cy.get('.Placeholder')
				.should('not.have.class', 'Placeholder--pill')
				.should('not.have.class', 'Placeholder--soft')
				.should('have.class', 'Placeholder--square')
				.should('have.css', 'border-radius', '0px')
		})
	})
})
