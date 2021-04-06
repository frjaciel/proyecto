import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { UsuariosComponent } from './component/usuarios/usuarios.component';
import { EmpresasComponent } from './component/empresas/empresas.component';
import { ServiciosComponent } from './component/servicios/servicios.component';
import { FooterComponent } from './component/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsuariosComponent,
    EmpresasComponent,
    ServiciosComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
