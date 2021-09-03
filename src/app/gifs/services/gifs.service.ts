import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private ApiKey = 'j3epvIO6MfbQ6sFCpwTY0lJMhRlGM9ZB';

  private _historial: string[] = ['Dashboard'];

  constructor() { }

  get historial(): string[] {
    return [...this._historial];
  }

  buscarGifs( query: string): void{

    query = query.trim().toLowerCase();

    if ( !this._historial.includes(query) ){
      // agregar elementos a apartir de la segunda psicion
      // this._historial.unshift( query );
      this._historial.splice(1, 0, query);
      this._historial = this._historial.splice(0, 11);
    }
    console.log(this._historial);
  }
}
