import { IPelicula } from 'src/interfaces/pelicula';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PeliculaService {

    listaDefault: IPelicula[] = [
        {
            "nombre": "Game of thrones",
            "descripcion": "lorem ipsum"
        },
        {
            "nombre": "Dark",
            "descripcion": "lorem ipsum 30/30 lorem"
        },
        {
            "nombre": "Stranger Things",
            "descripcion": "m ipsum dolor sit amet, consectetur adipiscing elit. "
        },
        {
            "nombre": "Game of thrones",
            "descripcion": "m ipsum dolor sit amet, consectetur adipiscing elit.  congue libero aliquet aliquam sit amet eget elit. Sed con  "
        },
        {
            "nombre": "Prison Break",
            "descripcion": "Praesent nibh lacus, faucibus sed odio eu, imperdiet lobortis ligula. Aliquam sit amet elit lectus. Proin auctor posuere sapien, nec maximus justo fermentum sit amet. Suspendisse lacinia nulla vitae magna luctus dict"
        }
    ]

    getListaDefault(){
        return this.listaDefault;
    }


}