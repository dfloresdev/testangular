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

  dtOptions: DataTables.Settings = {};
  

  allCharacters: Observable<People>;

  info = [];

  ordenamiento = "";
  
  constructor(private route:ActivatedRoute, private api:Angular2SwapiService)
  {
    // console.log(this.route.queryParams);
    this.route.queryParams.subscribe(params => {
      console.log(params['ordenar']);
      this.ordenamiento = params['ordenar'];
    });
    
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
      // console.log(this.planetaRey);
      this.planetaRey.forEach(planeta =>{
        this.planetaR = planeta.name;
      });
    });


    this.llenarData().then(resp => {
      console.log(resp);
      
      setTimeout( () => {
        if(this.ordenamiento == "nombre")
        {
          $(function (){
            $("#star").DataTable({"order": [[ 0, "desc" ]]});
            $("#load").css('display', 'none');
            $("#tabCharacters").css('display', 'block');
          });
        }
        else if(this.ordenamiento == "peso")
        {
          $(function (){
            $("#star").DataTable({"order": [[ 2, "desc" ]]});
            $("#load").css('display', 'none');
            $("#tabCharacters").css('display', 'block');
          });
        }
        else if(this.ordenamiento == "altura")
        {
          $(function (){
            $("#star").DataTable({"order": [[ 1, "desc" ]]});
            $("#load").css('display', 'none');
            $("#tabCharacters").css('display', 'block');
          });
        }
        else{
          $(function (){
            $("#star").DataTable();
            $("#load").css('display', 'none');
            $("#tabCharacters").css('display', 'block');
          });
        }
        
      }, 3000);
      
    });


  }

  
  public characterId(id)
  {
    return new Promise ((resolve, reject) => {
      this.api.getPeopleById(id).subscribe(val => {
        resolve(val);
      });
    });
  }

  public llenarData()
  {
    return new Promise ((resolve, reject)=>{
      for (let i = 1; i <= 51; i++) {
        if(i!=17)
        {
          this.characterId(i).then(respuesta => {
            this.info.push(respuesta)
            resolve(this.info);
          });
        }
      }
      // resolve(this.info);
    });
    
  }
  
  
}
