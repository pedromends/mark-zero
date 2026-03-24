import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EquipeDTO } from '../model/equipe-dto';
import { environment } from '../environments/environments';

@Injectable({
    providedIn: 'root',
})
export class EquipeService {

    private readonly apiUrl: string = `${environment.api}`

    constructor(private http: HttpClient) { }

    buscarEquipes(): Observable<EquipeDTO[]> {
        return this.http.get<EquipeDTO[]>(this.apiUrl + '/equipes');
    }
}
