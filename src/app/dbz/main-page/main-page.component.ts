import { NumberFormatStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SelectControlValueAccessor } from '@angular/forms';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

// interface Personaje{
//   nombre: string;
//   poder: number | null;  //se agregó null para que no aparezca un  0 por defecto en la casilla de poder. 
// }

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }
    

  // agregarNuevoPersonaje( argumento: Personaje){  //argumento = personaje, es solo para no repetir tanto la palabra personaje
  //   this.personajes.push(argumento);
  //   }

    constructor() {
    }
  








}



