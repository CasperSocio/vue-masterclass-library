import { createI18n } from 'vue-i18n'
import en from '@/assets/locales/en.json'
import no from '@/assets/locales/no.json'

const i18n = createI18n({
	locale: 'en-GB',
	messages: {
		'en-GB': en,
		'nb-NO': no,
	},
})

export default {
	...i18n,
	// Shortcuts that allows you to omit .global
	locale: i18n.global.locale,
	t: i18n.global.t,
}
