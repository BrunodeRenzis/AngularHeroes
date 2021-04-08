import { Component, OnInit } from '@angular/core';
import {Heroe, HeroesService} from '../../servicios/heroes.service';
import {HttpService} from '../../servicios/http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:any = [];
  constructor(private _heroesService:HeroesService, private router:Router,private _httpService:HttpService) { }

  ngOnInit(): void {
    console.log("Llamando a heroes");
    
    this.cargarHeroes();
  }

  verHeroe( idx:number ){
    this.router.navigate( ['/heroe',idx] );
  }

  cargarHeroes(){
    this._httpService.get('http://localhost:8080/heroes').subscribe( (data:any) => this.heroes=data);
  }

}
