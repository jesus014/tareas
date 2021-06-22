import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[]=[];

  constructor() {

    this.cargarStorage();

    //const lista1=new Lista('lista de compras');
    //const lista2=new Lista('lista de ventas');

    //this.listas.push(lista1,lista2);
    //console.log(this.listas);
   }

   //crea una lista pasandole como parametro el titulo
   //con el metodo push se agrega la lista a nueva lista.
   crearLista(titulo: string){

    const nuevaLista = new Lista(titulo);

    this.listas.push(nuevaLista);
    this.guardarStorage();

    //se regresa el creado para que sean agregados los diferentes datos
    return nuevaLista.id;
   }


   //se pasa la
   obtenerLista(id: string | number){
    id= Number(id);
    return this.listas.find( listaData => listaData.id === id);

   }

   //se crea el guardar storage para que puede ser guardado
   //en el cache y no se elimine cuando se recarge la app
   //se utiliza el setitem pasando los parametros. utilizamos json.stringify para convertirlos en un tipo string y guarde la lista
   guardarStorage(){
    localStorage.setItem('data',JSON.stringify(this.listas));
   }


  //se crea el cargarstorage para cargar todo lo previamente guardado
   cargarStorage(){
     if(localStorage.getItem('data')){
      this.listas=JSON.parse (localStorage.getItem('data'));
     }else{
       this.listas= [];
     }
   }
  //Se de el metodo borrarlista  pasandole un lista tipo lista.
   borrarLista(lista: Lista){
     //de las listas se hace un filter se hace una lista data la cual se regresa las listas que son diferentes a la lista enviada
     this.listas= this.listas.filter(listaData => listaData.id !== lista.id );
     this.guardarStorage();
   }
}
