import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private ApiKey = 'j3epvIO6MfbQ6sFCpwTY0lJMhRlGM9ZB';
  private _historial: string[] = ['Dashboard'];

  public results: Gif[] = [];

  constructor(
    private http: HttpClient
  ) {
      this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
      this.results = JSON.parse(localStorage.getItem('resultados')!) || [];
    }

  get historial(): string[] {
    return [...this._historial];
  }

  buscarGifs( query: string = '' ): void{

    query = query.trim().toLowerCase();

    if ( !this._historial.includes(query) ){
      // agregar elementos a apartir de la segunda psicion
      // this._historial.unshift( query );
      this._historial.splice(1, 0, query);
      this._historial = this._historial.splice(0, 11);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    this.http.get<SearchGifsResponse>('https://api.giphy.com/v1/gifs/search', {
                params: {
                  api_key : this.ApiKey,
                  q : query,
                  limit : '10'
                }
              }).subscribe( response => {
                this.results = response.data;
                localStorage.setItem('resultados', JSON.stringify(this.results));
              });
  }

}
