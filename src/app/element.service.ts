import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Periodic } from './periodic';

@Injectable({
  providedIn: 'root'
})
export class ElementService {

  private url = "http://localhost:3000/periodicelements";

  constructor(private http: HttpClient) { }

  getAll()
  {
    return this.http.get<Periodic>(this.url);
  }
}
