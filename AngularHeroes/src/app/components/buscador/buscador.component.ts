import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../servicios/heroes.service';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  
  heroes:any[]=[];
  termino:string="";
  constructor(private activatedRoute:ActivatedRoute, private _heroesService:HeroesService) { 
            
  }

  ngOnInit() {
        this.buscar();    
  }
  
  buscar(){
    this.activatedRoute.params.subscribe(params=>{
      console.log(params['termino']);
      
      this.termino=params['termino'];
      this._heroesService.buscarHeroesCompleto(params['termino']).subscribe((data:any)=>{this.heroes=data})
      console.log(this.heroes);
    });
  }

}
