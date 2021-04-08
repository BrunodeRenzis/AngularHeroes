import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spa';

  constructor(private _http:HttpClient){
    this._http.get('http://localhost:8080/heroes').subscribe( (data:any) => console.log(data),(err:any)=>console.log(err),()=>console.log("Petición finalizada"));
    
  }
}
