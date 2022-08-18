import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _historial: string[] = [];
  private _apiKey: string = 'Zt34ambmloauohuD6p4w0oTIizqIXMPe';
  private _servicioURL = 'https://api.giphy.com/v1/gifs/';
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

    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('limit', '10')
      .set('q', query);

    this.http
      .get<SearchGifsResponse>(`${this._servicioURL}/search`, {
        params,
      })
      .subscribe((resp: SearchGifsResponse) => {
        this._resultados = resp.data;
        console.log(resp.data);
        localStorage.setItem('resultados', JSON.stringify(this._resultados));
      });
  }
}
