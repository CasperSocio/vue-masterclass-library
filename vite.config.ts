import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			name: 'VMlibrary',
			fileName: 'vm-lib',
		},
		rollupOptions: {
			external: [
				'pinia',
				'vue',
				'vue-i18n',
				'vue-router',
			],
			output: {
				globals: {
					vue: 'Vue',
				},
			},
		},
	},
	plugins: [
		vue(),
		dts({
			cleanVueFileName: true,
			entryRoot: 'src',
			insertTypesEntry: true,
			outputDir: 'dist/types',
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	server: {
		host: 'localhost',
		port: 3001,
	},
})
