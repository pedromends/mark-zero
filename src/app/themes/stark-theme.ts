import { definePreset } from "@primeng/themes"
import Aura from '@primeuix/themes/aura';
import { dialogCSS, tabsCSS } from "./dialog-theme";

export const StarkTheme = definePreset(Aura, {
	components: {
		dialog: {
			css: ({ dt }) => dialogCSS
		},
		tabs: {
			css: ({ dt }) => tabsCSS
		}
	},
	semantic: {
		colorScheme: {
			light: {
				primary: {
					color: '#009199',
					hoverColor: '#009199'
				},
			},
			dark: {

				primary: {
					color: '#009199',
					hoverColor: '#009199'
				},
				overlay: {
					modal: {
						background: '#0193a0',
						borderColor: '#009199',
						color: '#ffffff'
					},
				},
				text: {
					color: '#009199',
				}
			}
		}
	},
});