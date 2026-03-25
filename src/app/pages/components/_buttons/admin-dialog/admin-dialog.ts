import { Component } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { AdminDialog } from '../../_dialogs/admin/admin';

@Component({
	selector: 'btn-admin-dialog',
	standalone: false,
	templateUrl: './admin-dialog.html',
	styleUrl: './admin-dialog.css',
})
export class AdminDialogButton {

	constructor(
		private dialogService: DialogService
	) { }

	openDialog() {
		const dialog = this.dialogService.open(AdminDialog, {
			closable: true,
			draggable: false,
			modal: true,
			width: '800px',
			header: 'SYSTEM_ROOT (ADMIN ACCESS)'
		});

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
		this.openDialog();
	}
}
