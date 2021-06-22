import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Lista } from '../models/lista.model';
import { DeseosService } from '../services/deseos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  //inyeccion en el constructor el servicio que se creo con la informacion, inyeccion de router para las direcciones
  //se utiliza alertController para el controllador de agregar
  constructor(public deseosService: DeseosService,
              private router: Router,
              private alertCtrl: AlertController) {


  }

    //se crea la agregar lista para hacer una lista nueva en los metodos.
   async agregarLista(){
    //funcion para boton que te direcciona a la pantalla agregar
    //this.router.navigateByUrl('tabs/tab1/agregar');

    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Nueva Lista',
      inputs:[{
        name:'titulo',
        type:'text',
        placeholder:'nombre de la lista'
      }],

      buttons: [{
        text:'cancelar',
        role:'cancel',
        handler: () =>{ //handler es una funcion que se dispara cuando se toca el boton
          console.log('cancelar');
        }
      },
      {
        text: 'crear',
        handler:(data) =>{
          console.log('data');
          if(data.titulo.length === 0){
            return;
          }
          const listaId= this.deseosService.crearLista(data.titulo);
          this.router.navigateByUrl(`tabs/tab1/agregar/${listaId}`);

        }
      }]
    });

     alert.present();
  }

  listaSeleccionada(lista: Lista){
    this.router.navigateByUrl(`tabs/tab1/agregar/${lista.id}`);

  }

}
