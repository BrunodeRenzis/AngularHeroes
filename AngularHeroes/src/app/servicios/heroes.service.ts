import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HeroesService{
    private heroes:Heroe[]=[

      ];
    constructor(private http:HttpClient){
        
    }

    getHeroes():Observable<Heroe[]>{
        //return this.heroes;
        return this.http.get<Heroe[]>('http://localhost:8080/heroes');
    }
    
    getHeroe( idx: string ){
      return this.heroes[idx];
    }

    buscarHeroes(termino:string):Observable<Heroe[]>{
        return this.http.post<Heroe[]>('http://localhost:8080/heroes/buscar',{filtro:termino});
    }

    buscarHeroesCompleto(termino:string):Observable<Heroe[]>{
      return this.http.post<Heroe[]>('http://localhost:8080/heroes/buscar-completo',{filtro:termino});
    }

    /*agregarHeroe(heroe:Heroe):Heroe{
     return this.http.post('http://localhost:8080/heroes/guardar');
    }*/

}

  export interface Heroe{
    nombre:string;
    bio:string;
    img:string;
    aparicion:string;
    casa:string;
    idx?:number;
}