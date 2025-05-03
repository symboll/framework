import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-ts-app';

  constructor (
    private readonly http: HttpClient
  ){}

  async ngOnInit () {
    try {
      const res = await firstValueFrom(this.http.get('http://localhost:3000/goods'))
      console.log(':',res)
    } catch(err) {
      console.log(err)
    }
  }
}
