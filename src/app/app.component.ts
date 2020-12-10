import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RequestParams } from './models/request.model';
import { ColorTable } from './models/response.model';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pixelSize$: BehaviorSubject<number> = new BehaviorSubject<number>(2);
  pixels$: Observable<ColorTable[][]>;
  /**
   *
   */
  constructor(private apiService: ApiService) {
    this.pixels$ = this.apiService.pixels;
  }

  changePixelSize(value) {
    this.pixelSize$.next(value);
  }

  requestParamsChange(params: RequestParams) {
    this.apiService.updateRequestParams(params);
  }

}
