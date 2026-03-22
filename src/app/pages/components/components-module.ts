import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Layout } from './layout/layout';

import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@NgModule({
	declarations: [Layout],
	imports: [
		CommonModule,
		RouterOutlet,

		//primeng
		DrawerModule,
		ButtonModule,
		CardModule,
		
	],
	exports: [Layout],
})
export class ComponentsModule { }
