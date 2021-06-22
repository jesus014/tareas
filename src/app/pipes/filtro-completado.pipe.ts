import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtroCompletado',
  pure: false
})
export class FiltroCompletadoPipe implements PipeTransform {

  //De nuestras listas se hace una lista la cual cuando sea completada seran seleccionadas
  transform(listas: Lista[], completada: boolean = true): Lista[] {
    //se retorna de las listas las que en su campo este completada
    return  listas.filter(lista=>lista.terminada===completada);
  }

}
