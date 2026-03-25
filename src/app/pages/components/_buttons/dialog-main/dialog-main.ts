import { Component } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { MainDialog } from '../../_dialogs/main/main';

@Component({
	selector: 'btn-dialog-main',
	standalone: false,
	templateUrl: './dialog-main.html',
	styleUrl: './dialog-main.css',
})
export class DialogMain {

	constructor(
		private dialogService: DialogService
	) { }

	openDialog() {
		const dialog = this.dialogService.open(MainDialog, {
			closable: true,
			draggable: false,
			width: '800px',
			closeOnEscape: true,
			showHeader: false,
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
