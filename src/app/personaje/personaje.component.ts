import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html'
})
export class PersonajeComponent {
  constructor(private route:ActivatedRoute)
  {
    console.log(this.route.snapshot.params['nombre']);
  }
}
