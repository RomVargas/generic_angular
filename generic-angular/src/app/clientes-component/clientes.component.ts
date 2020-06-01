import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-clientes-component',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.clientesService.getClientes().subscribe(
      clientes => this.clientes = clientes
    );
  }
}