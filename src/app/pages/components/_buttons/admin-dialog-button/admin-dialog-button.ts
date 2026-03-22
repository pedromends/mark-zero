import { Component } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { AdminDialog } from '../../_dialogs/admin-dialog/admin-dialog';

@Component({
	selector: 'app-admin-dialog-button',
	standalone: false,
	templateUrl: './admin-dialog-button.html',
	styleUrl: './admin-dialog-button.css',
})
export class AdminDialogButton {

	constructor(
		private dialogService: DialogService
	) { }

	openDialog() {
		const dialog = this.dialogService.open(AdminDialog, {});

		dialog?.onClose.subscribe({
			next: (value) => {
				console.log(value)
			}
		})
	}

	onClick(event: MouseEvent) {
		const button = event.currentTarget as HTMLElement;
		const ripple = button.querySelector('.ripple') as HTMLElement;

		const rect = button.getBoundingClientRect();

		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;

		ripple.style.left = `${x}px`;
		ripple.style.top = `${y}px`;

		ripple.classList.remove('active');
		void ripple.offsetWidth; // força reflow
		ripple.classList.add('active');
	}
}
