import { addons } from '@storybook/addons'
import { app } from '@storybook/vue3'
import { createPinia } from 'pinia'
import i18n from '../src/setup/i18n'
import '../src/style/main.css'

const pinia = createPinia()

app.use(pinia)
app.use(i18n)

/**
 * Updates locale in Storybook
 */
addons.getChannel().on('LOCALE_CHANGED', (newLocale) => {
	i18n.global.locale = newLocale
})

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
		sort: 'requiredFirst'
	},
	locale: 'en-GB',
	locales: {
		'en-GB': 'English (GB)',
		'nb-NO': 'Norsk',
	}
}
