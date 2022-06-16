import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent{

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor' ]
  heroeBorrado: string = '';
  // noBorrado: string = 'No ha borrado nada'


  borraHeroe(){
    console.log('borrando...');
    this.heroeBorrado = this.heroes.pop() || '';
    

  
    
  }



  

}




