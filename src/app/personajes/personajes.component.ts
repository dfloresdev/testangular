import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Angular2SwapiService, Film, People, Planet } from 'angular2-swapi';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent implements OnInit {
  
  film$: Observable<Film[]>;
  luke: Observable<People>;
  planetaLukeUrl;
  planetaL = "";
  planetaLuke: Observable<Planet>;

  han: Observable<People>;
  planetaHanUrl;
  planetaH = "";
  planetaHan: Observable<Planet>;

  leia: Observable<People>;
  planetaLeiaUrl;
  planetaLe = "";
  planetaLeia: Observable<Planet>;

  rey: Observable<People>;
  planetaReyUrl;
  planetaR = "";
  planetaRey: Observable<Planet>;

  constructor(private route:ActivatedRoute, private api:Angular2SwapiService)
  {
    console.log(this.route.queryParams);
    
  }

  ngOnInit() {

    this.luke = this.api.getPeopleById(1);
    this.luke.forEach(valor=>{
      // console.log(valor);
      this.planetaLukeUrl = valor.homeworld;
      this.planetaLukeUrl = this.planetaLukeUrl.split("/");
      this.planetaLuke = this.api.getPlanet(Number(this.planetaLukeUrl[this.planetaLukeUrl.length-2]));
      this.planetaLuke.forEach(planeta =>{
        this.planetaL = planeta.name;
      });
    });

    this.han = this.api.getPeopleById(14);
    this.han.forEach(valor=>{
      // console.log(valor);
      this.planetaHanUrl = valor.homeworld;
      this.planetaHanUrl = this.planetaHanUrl.split("/");
      this.planetaHan = this.api.getPlanet(Number(this.planetaHanUrl[this.planetaHanUrl.length-2]));
      this.planetaHan.forEach(planeta =>{
        this.planetaH = planeta.name;
      });
    });

    this.leia = this.api.getPeopleById(5);
    this.leia.forEach(valor=>{
      // console.log(valor);
      this.planetaLeiaUrl = valor.homeworld;
      this.planetaLeiaUrl = this.planetaLeiaUrl.split("/");
      this.planetaLeia = this.api.getPlanet(Number(this.planetaLeiaUrl[this.planetaLeiaUrl.length-2]));
      this.planetaLeia.forEach(planeta =>{
        this.planetaLe = planeta.name;
      });
    });

    this.rey = this.api.getPeopleById(85);
    this.rey.forEach(valor=>{
      // console.log(valor);
      this.planetaReyUrl = valor.homeworld;
      this.planetaReyUrl = this.planetaReyUrl.split("/");
      this.planetaRey = this.api.getPlanet(Number(this.planetaReyUrl[this.planetaReyUrl.length-2]));
      this.planetaRey.forEach(planeta =>{
        this.planetaR = planeta.name;
      });
    });
    
   
  }
  
}
