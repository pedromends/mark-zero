import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { providePrimeNG } from 'primeng/config';
import { StarkTheme } from '../stark-theme';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
	providers: [
		provideBrowserGlobalErrorListeners(),
		provideRouter(routes),
		providePrimeNG({
			theme: {
				preset: StarkTheme,
				options: {
					darkModeSelector: true
				}
			}
		})
	]
};
