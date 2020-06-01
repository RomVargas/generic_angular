import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
//-- Observable convierte el response en un stream para poder hacer los metodos asincronos
import { Observable, of } from 'rxjs';



@Injectable()
export class ClientesService{

    constructor() {}

    clientes: Cliente[]

    getClientes(): Observable<Cliente[]>{
        return of(this.clientes);

    }

}