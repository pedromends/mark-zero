import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Layout } from './layout/layout';

import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AdminDialog } from './_dialogs/admin-dialog/admin-dialog';
import { StandardButton } from './_buttons/standard-button/standard-button';
import { TabsModule } from 'primeng/tabs';
import { AdminDialogButton } from './_buttons/admin-dialog-button/admin-dialog-button';

@NgModule({
	declarations: [
		Layout,
		AdminDialog,
		StandardButton,
		AdminDialogButton,
	],
	imports: [
		CommonModule,
		RouterOutlet,

		//primeng
		DrawerModule,
		TabsModule,
		ButtonModule,
		CardModule,

	],
	exports: [
		Layout,
		StandardButton,
		AdminDialogButton,
	],
})
export class ComponentsModule { }
