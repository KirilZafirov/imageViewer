
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestParams } from '../models/request.model';
import { filter, map, switchMap } from 'rxjs/operators';
import { ColorTable, ImageResponse } from '../models/response.model';
import { Observable, BehaviorSubject } from 'rxjs';


const BASE_URL = "https://assignment.triu-software.de/api/";

@Injectable()
export class ApiService {

  baseUrl;
  private _requestParams$: BehaviorSubject<RequestParams> = new BehaviorSubject<RequestParams>(({
    style: 'style-2',
    complexity: 'high',
    size: 'medium'
  }));

  constructor(protected http: HttpClient) {
    this.baseUrl = BASE_URL;
  }

  get(requestParams: RequestParams):Observable<ColorTable[][]> {

    const params = this.makeRequestUrl(requestParams);
    const requestUrl = `${this.baseUrl}${params}`;

    return this.http.get<ImageResponse>(requestUrl).pipe(
      filter((res:ImageResponse) => !!res.data),
      map((res:ImageResponse) =>  ({
        colors: res.data.reduce( (acc , current) => [...acc , res.colorTable[current]], []),
        width: res.width
      })),
      map( res => {
        let line = res.width;
        let startingPosition = 0;

        return res.colors.reduce( (acc , current ,index ) => {
          if(line - index === 0) {
            startingPosition++;
            line += res.width;
            acc[startingPosition] = [];
          }
          acc[startingPosition].push(current);
          return acc;
        }, [[]]).reverse();
      })
    );
  }

  pixels:Observable<ColorTable[][]> = this._requestParams$.pipe(
      switchMap((requestParams) => this.get(requestParams))
    );

  makeRequestUrl(searchParams: RequestParams) {
    return `${searchParams.style}-${searchParams.complexity}-${searchParams.size}.json`
  }

  updateRequestParams(searchParams: RequestParams) {
    this._requestParams$.next(searchParams);
  }
}
