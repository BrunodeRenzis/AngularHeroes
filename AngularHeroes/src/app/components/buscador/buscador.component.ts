import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../servicios/heroes.service';
import {HttpService} from '../../servicios/http.service'
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  
  heroes:any;
  termino:string="";
  constructor(private activatedRoute:ActivatedRoute, private _heroesService:HeroesService, private _httpService:HttpService) { 
            
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      console.log(params['termino']);
      
      this.termino=params['termino'];
      this._httpService.get('http://localhost:8080/heroes/buscar/'+this.termino).subscribe(data => this.heroes=data); //httpservice con get crear un get en httpservice
      console.log(this.heroes);
    });
  }

}
