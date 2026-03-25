import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { EquipeService } from '../../../../services/equipe-service';
import { EquipeDTO } from '../../../../model/equipe-dto';

@Component({
	selector: 'admin-dialog',
	standalone: false,
	templateUrl: './admin.html',
	styleUrl: './admin.css',
})
export class AdminDialog implements OnInit {

	equipes: EquipeDTO[] = [];
	carregando: boolean = false;
	
	constructor(
		private ref: DynamicDialogRef<AdminDialog>,
		private equipeService: EquipeService
	) {}

	ngOnInit(): void {
		this.buscaEquipes()
	}

	buscaEquipes(): void {
		this.carregando = true;
		this.equipeService.buscarEquipes().subscribe({
			next: (res: EquipeDTO[]) => {
				this.equipes = res;
				this.carregando = false;
			},
			error: (err) => {
				console.log(err);
				this.carregando = false;
			}
		})
	}

	close(): void {
		this.ref.close(true)
	}
}

