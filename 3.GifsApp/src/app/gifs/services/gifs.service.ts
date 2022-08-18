import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];
  private _apiKey:string = 'Zt34ambmloauohuD6p4w0oTIizqIXMPe';
  private _resultados: any[] = [];

  get historial()
  {
    return [...this._historial];
  }

  get Resultados()
  {
    return [...this._resultados];
  }

  constructor(private http:HttpClient) {}

  buscarGifs(query:string)
  {
    query = query.trim().toLocaleLowerCase();
    if (query.trim().length === 0)
    {
      return;
    }
    else if(this._historial.includes(query))
    {
      return;
    }
    else{
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);
      const url:string = `https://api.giphy.com/v1/gifs/search?api_key=Zt34ambmloauohuD6p4w0oTIizqIXMPe&q=${query}&limit=10`;
      this.http.get(url).subscribe((resp:any) => 
        {
          this._resultados = resp.data;
          console.log(resp.data);
        });
    }

  }
}
