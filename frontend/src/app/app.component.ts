import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseService } from './base.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
  payload: string = '';
  token: string = '';
  db: string = '';
  constructor(private baseService: BaseService) {}
  hehehe(){
    this.baseService.health().subscribe((x: object) => {
      this.payload = JSON.stringify(x);
    });
    console.dir('wwwwwww');
  };

  fetchToken(){
    this.baseService.fetchToken().subscribe((x: object) => {
      this.token = JSON.stringify(x);
    });
  }
  fetchDb(){
    this.baseService.getdb().subscribe((x: object) => {
      this.db = JSON.stringify(x);
    });
  }
}
