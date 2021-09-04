import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Listbox } from 'primeng/listbox';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @ViewChild('listboxItem') listboxItem!: Listbox;

  constructor(
    private gifsService: GifsService
  ) { }

  ngOnInit(): void {
  }

  get historial(): string[]{
    return this.gifsService.historial;
  }

  listItemClicked(): void{
    this.gifsService.buscarGifs(this.listboxItem.value);
  }

}
