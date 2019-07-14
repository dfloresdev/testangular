import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Angular2SwapiService, Film, People, Planet } from 'angular2-swapi';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personajes',
  templateUrl: './residentes.component.html'
})
export class ResidentesComponent implements OnInit{

  info = [];
  namePlanet;



  constructor(private route:ActivatedRoute, private api:Angular2SwapiService)
  {
    // console.log(this.route.queryParams);
    // this.planetId(10).then(val => console.log(val.name, "plan"));
  }

  ngOnInit() {
    // this.llenarData().then(resp => {
      
    // });


    this.llenarData().then(resp => {
      // console.log("final", resp);
      
      setTimeout( () => {
        $(function (){
          // debugger;
          $("#star").DataTable({"order": [[ 7, "asc" ]]});
          $("#load").css('display', 'none');
          $("#tabCharacters").css('display', 'block');
        });
      }, 3000);
      
    });
  }

  

  public planetId(id)
  {
    return new Promise ((resolve, reject) => {
      this.api.getPlanet(id).subscribe(val => {
        resolve(val.name);
      });
    });
  }

  public characterId(id)
  {
    return new Promise ((resolve, reject) => {
      this.api.getPeopleById(id).subscribe(val => {
        let mundo = val.homeworld.split("/");
        let mundoId = Number(mundo[mundo.length-2]);
        this.planetId(mundoId).then(planet => {
          // console.log("planet", planet);
          // console.log("people", val);
          val['casita'] = planet;
          // console.log("pre", val);
          resolve(val);
        });
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
