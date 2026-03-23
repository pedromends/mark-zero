import { definePreset } from "@primeng/themes"
import Aura from '@primeuix/themes/aura';

export const StarkTheme = definePreset(Aura, {
	semantic: {
		colorScheme: {
			light: {
				primary: {
					color: '#009199',
					hoverColor: '#009199'
				},
			},
			dark:{
				primary: {
					color: '#009199',
					hoverColor: '#009199'
				},
				overlay:{
					modal:{
						background: '#000000',
						borderColor: '#009199',
						color: ''
					},
				},
				text: {
					color: '#009199',
				}
			}
		}
	},
});