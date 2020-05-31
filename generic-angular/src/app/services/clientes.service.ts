import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente'

@Injectable()
export class ClientesService{

    constructor() {}

    clientes: Cliente[]

    getClientes(): Cliente[]{
        return this.clientes;

    }

}