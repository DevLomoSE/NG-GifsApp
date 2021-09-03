import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  public termino?: string;

  constructor(
    private gifsService: GifsService
  ) { }

  ngOnInit(): void {
  }

  public buscar(): void {
    this.termino = this.txtBuscar.nativeElement.value;

    if (this.termino.trim().length === 0 ){
      return;
    }

    this.gifsService.buscarGifs(this.termino);

    this.txtBuscar.nativeElement.value = '';
  }

}
