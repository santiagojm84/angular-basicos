import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _servicioURL: string = 'https://restcountries.com/v2/name';

  constructor(private http: HttpClient) { }

  getPais(nombrePais:string): Observable<Country[]>
  {
    return this.http.get<Country[]>(`${this._servicioURL}/${nombrePais}`);
  }
}
