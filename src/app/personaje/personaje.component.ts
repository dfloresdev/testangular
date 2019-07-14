import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Angular2SwapiService, Film, People, Planet } from 'angular2-swapi';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit{

  character = "";

  infoCharacter;

  imgCharacter = "";

  constructor(private route:ActivatedRoute, private api:Angular2SwapiService)
  {
    this.character = this.route.snapshot.params['nombre'];
    console.log(this.character);
    
  }

  ngOnInit() {
    
    if(this.character == "luke")
    {
      this.getCharacter(1).then(person => {
        this.infoCharacter = person;
        // console.log(this.infoCharacter);
        this.imgCharacter = "https://rogermooresmovienation.files.wordpress.com/2017/12/luke.jpg?w=640";
      });
    }
    else if(this.character == "han")
    {
      this.getCharacter(14).then(person => {
        this.infoCharacter = person;
        // console.log(this.infoCharacter);
        this.imgCharacter = "http://images6.fanpop.com/image/photos/39500000/Han-Solo-han-solo-39501593-275-183.jpg";
      });
    }
    else if(this.character == "leia")
    {
      this.getCharacter(5).then(person => {
        this.infoCharacter = person;
        // console.log(this.infoCharacter);
        this.imgCharacter = "https://1.bp.blogspot.com/-ActvOdb0bWs/WGRHevSwg-I/AAAAAAAADy0/Bv89skLQM68A-JbQtptv11h2i7MYLoRxgCLcB/s1600/images.jpg";
      });
    }
    else if (this.character == "rey")
    {
      this.getCharacter(85).then(person => {
        this.infoCharacter = person;
        // console.log(this.infoCharacter);
        this.imgCharacter = "https://lalunadeendorstarwars.files.wordpress.com/2016/02/unknown-29.jpeg?w=768";
      });
    }
    else{
      $(function (){
        // debugger;
        $("#card").css('display', 'none');
        $("#load").css('display', 'block');
        $("body").css('background-color', 'black');
      });
    }
    

  }

  public getCharacter(id)
  {
    return new Promise((resolve, reject)=>{
      this.api.getPeopleById(id).subscribe(val => {
        resolve(val);
      });
    });
  }


}
