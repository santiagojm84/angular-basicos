import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _historial: string[] = [];
  private _apiKey: string = 'Zt34ambmloauohuD6p4w0oTIizqIXMPe';
  private _resultados: Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  get Resultados() {
    return [...this._resultados];
  }

  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!);
    this._resultados = JSON.parse(localStorage.getItem('resultados')!);
  }

  buscarGifs(query: string) {
    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const url: string = `https://api.giphy.com/v1/gifs/search?api_key=Zt34ambmloauohuD6p4w0oTIizqIXMPe&q=${query}&limit=10`;
    this.http
      .get<SearchGifsResponse>(url)
      .subscribe((resp: SearchGifsResponse) => {
        this._resultados = resp.data;
        console.log(resp.data);
        localStorage.setItem('resultados', JSON.stringify(this._resultados));
      });
  }
}
