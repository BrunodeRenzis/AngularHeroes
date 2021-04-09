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
    this._heroesService.getHeroes().subscribe( (data:any) => {this.heroes=data
        this.buscarFalopa();
    });
    
  }
  
  buscarFalopa(){
    this.activatedRoute.params.subscribe(params=>{
      console.log(params['termino']);
      
      this.termino=params['termino'];
      this.heroes=this._heroesService.buscarHeroes(params['termino'],this.heroes);
      console.log(this.heroes);
    });
  }

}
