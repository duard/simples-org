import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env/environment';

@Component({
  selector: 'simples-org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements AfterViewInit {
  hello$ = this.http.get<any>('/api/hello');
  constructor(
    private http: HttpClient,
    public router: Router,
    // public rootQuery: RootQuery,
    private _cdr: ChangeDetectorRef
  ) {
    console.log('=> production', environment.production);
  }

  ngAfterViewInit() {
    this._cdr.detectChanges();
  }
}
