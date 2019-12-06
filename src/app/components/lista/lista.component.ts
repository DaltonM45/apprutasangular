import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPelicula } from 'src/interfaces/pelicula';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input()listado: IPelicula[]; //el input se usa para recibir datos del padre al hijo
  @Output() indiceObtenid = new EventEmitter<number>(); // el output se usa para enviar datos del hijo al padre


  constructor() { }

  ngOnInit() {
  }


  obtenerPeli(indice:number){
    console.log('la peli esta en el puestoL: ' + indice)
    this.indiceObtenid.emit(indice);
  }
}
