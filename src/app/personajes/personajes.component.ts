import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {
  constructor(private route:ActivatedRoute)
  {
    console.log(this.route.queryParams);
  }
  
}
