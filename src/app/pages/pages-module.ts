import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing-module';

import { ComponentsModule } from './components/components-module';
import { Home } from './home/home';
import { DialogService } from 'primeng/dynamicdialog';

@NgModule({
	declarations: [Home],
	imports: [CommonModule, PagesRoutingModule, ComponentsModule],
	exports: [ComponentsModule],
	providers: [DialogService]
})
export class PagesModule { }
