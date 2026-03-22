import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
	selector: 'app-admin-dialog',
	standalone: false,
	templateUrl: './admin-dialog.html',
	styleUrl: './admin-dialog.css',
})
export class AdminDialog {

	constructor( private ref: DynamicDialogRef<AdminDialog>){

	}

	close(){
		this.ref.close(true)
	}
}

