import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
    selector: 'app-main',
    standalone: false,
    templateUrl: './main.html',
    styleUrl: './main.css',
})
export class MainDialog {

    visible: boolean = false;
    constructor(private ref: DynamicDialogRef<MainDialog>){}

    close(){
        this.ref.close()
    }
}
