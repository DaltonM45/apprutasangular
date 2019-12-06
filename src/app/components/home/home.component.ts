import { Component, OnInit } from '@angular/core';
import { IPelicula } from 'src/interfaces/pelicula';
import { PeliculaService } from 'src/services/pelicula.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //atributos
  nombre:string;
  descripcion:string;

  listaPelicula: IPelicula[] = [] // lista de peliculas que es un array
  peliculaObj: IPelicula;


  constructor(public listaService: PeliculaService) { 

  }

  ngOnInit() {
    this.listaPelicula = this.listaService.getListaDefault();
  }

  saveMovie(){
    
    this.peliculaObj = {
      nombre: this.nombre,
      descripcion: this.descripcion
    }

    this.listaPelicula.push(this.peliculaObj);
    this.nombre=''
    this.descripcion=''
    console.log( this.listaPelicula);

  }

  //metodo para recibir datos del componente hijo
  procesarIndice(indice:number){
    this.listaPelicula.splice(indice , 1);
    console.log('eliminado');
  }

}
