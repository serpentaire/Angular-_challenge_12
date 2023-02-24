import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  constructor(public http: HttpClient) { }

  getImageOfTheDay(): Observable<any> {
    return this.http.get("https://api.nasa.gov/planetary/apod?api_key=dHequJa4pvnvEWN1MjfN7kU7bLYBCY9OgCbcQMoI");
  }

}
