import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EquipeDTO } from '../../../../model/equipe-dto';
import { EquipeService } from '../../../../services/equipe-service';

@Component({
    selector: 'app-main',
    standalone: false,
    templateUrl: './main.html',
    styleUrl: './main.css',
})
export class MainDialog {
    equipes: EquipeDTO[] = [];
    carregando: boolean = false;

    visible: boolean = false;
    constructor(private ref: DynamicDialogRef<MainDialog>,
        private equipeService: EquipeService
    ) { }

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

    close() {
        this.ref.close()
    }
}
