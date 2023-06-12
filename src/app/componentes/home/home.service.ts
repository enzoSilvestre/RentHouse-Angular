import { IItem } from './../../item';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private readonly API = 'http://localhost:3000/items';

  constructor(private readonly http: HttpClient) { }

  listItems(): Observable<IItem[]>{
      return this.http.get<IItem[]>(this.API);
  }


}
