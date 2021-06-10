import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DeseosService } from '../services/deseos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  //inyeccion en el constructor el servicio que se creo con la informacion, inyeccion de router para las direcciones
  constructor(public deseosService: DeseosService,
              private router: Router) {


  }

  agregarLista(){
    //funcion para boton que te direcciona a la pantalla agregar
    this.router.navigateByUrl('tabs/tab1/agregar');
  }

}
