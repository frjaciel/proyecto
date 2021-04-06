import { Component } from '@angular/core';
import {faFacebookF} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'puma-proyect';
  fb=faFacebookF;
  regionVisible:string = '';
  
  verEmpresas(id){
    this.regionVisible = 'empresas';
  }

}