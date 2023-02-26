import Icon from './Icon.vue'

describe('Icon', () => {
	it('has the correct defaults', () => {
		cy.mount(Icon, {
			props: {
				name: 'hamburger',
			},
		})
		cy.get('svg')
			.should('have.attr', 'height', 24)
			.should('have.attr', 'width', 24)
	})
})
