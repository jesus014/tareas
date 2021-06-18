//import { ListaItem } from './lista-item.model';
import {ListaItem}from './lista-item.model';

export  class Lista {


  //se declaran las variables de nuestra entidad.
  id: number;
  titulo: string;
  creadaEn: Date;
  terminadaEn: Date;
  terminada: boolean;
  items: ListaItem[];

  //se inicializa el contructtor con un parametro titulo.
  constructor(titulo: string){

    this.titulo = titulo;

    this.creadaEn=new Date();

    this.terminada=false;

    this.items=[];

    this.id=new Date().getTime();

  }
}
