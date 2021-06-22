import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from '../../services/deseos.service';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  //se declara una variable terminada para saber si la nota esta terminada y saber si se pasa para el otro modulo
  @ViewChild(IonList) lista: IonList;
  @Input() terminada=true;

  constructor(public deseosService: DeseosService,
              private router: Router,
              private alertCtrl: AlertController) { }

  ngOnInit() {}

  //se crea el metodo dependiendo de donde este se le pasa una lista de tipo modelo lista
  listaSeleccionada(lista: Lista){
    if(this.terminada){
      this.router.navigateByUrl(`tabs/tab2/agregar/${lista.id}`);
    }
    else{
      this.router.navigateByUrl(`tabs/tab1/agregar/${lista.id}`);
    }

  }
 //borrar lista se le pasa una lista la cual se llama a deseos service pasandole una lista

  borrarLista(lista: Lista){

    this.deseosService.borrarLista(lista);
  }


  //metodo para editar la lista con el movimiento hacia la derecha y
  //siendo llamado el metodo en listas.component.html

   async editarLista(lista: Lista){
     //se crea el alert
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Editar Lista',
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
          //se utiliza closeslideing para cerrar el boton.
          this.lista.closeSlidingItems();
        }
      },
      {
        text: 'Actualizar',
        handler:(data) =>{
          console.log('data');
          if(data.titulo.length === 0){
            return;
          }
          lista.titulo = data.titulo;
          this.deseosService.guardarStorage();
          this.lista.closeSlidingItems();

        }
      }]
    });

     alert.present();
  }


}
