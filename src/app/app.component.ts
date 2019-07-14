import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'examenFut';

  nombre:string = '';
  apellido:string = '';

  hacerAlgo()
  {
    alert("holi prro");
  }

}
