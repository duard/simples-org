import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@simples-org/api-interfaces';
import { environment } from '@env/environment';

@Component({
  selector: 'simples-org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isDev = !environment.production;

  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {
    if (this.isDev) {
      console.log('=> development', this.isDev);
    }
  }
}
