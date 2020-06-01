import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { ClientesComponent } from './clientes-component/clientes.component';
import { ClientesService } from './services/clientes.service';
import { DirectivaComponent } from './directiva/directiva.component'

//Los nuevos componentes e deben declarar aqui
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    ClientesComponent,
    DirectivaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  //Todos los nuevos servicios se tienen que declarar en esta clase
  providers: [ClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
