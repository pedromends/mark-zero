import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { EquipeService } from '../../../../services/equipe-service';
import { EquipeDTO } from '../../../../model/equipe-dto';

@Component({
	selector: 'app-admin-dialog',
	standalone: false,
	templateUrl: './admin-dialog.html',
	styleUrl: './admin-dialog.css',
	encapsulation: ViewEncapsulation.None
})
export class AdminDialog implements OnInit {

	equipes: EquipeDTO[] = [];

	constructor(
		private ref: DynamicDialogRef<AdminDialog>,
		private equipeService: EquipeService
	) {}

	ngOnInit(): void {
		this.buscaEquipes()
	}

	buscaEquipes(): void {
		this.equipeService.buscarEquipes().subscribe({
			next: (res: EquipeDTO[]) => {
				this.equipes = res;
			},
			error: (err) => {
				console.log(err)
			}
		})
	}

	close(): void {
		this.ref.close(true)
	}
}

