import {DecimalPipe} from '@angular/common';
import {Component, QueryList, ViewChildren, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {Prestaciones} from './../../../core/models/prestaciones/prestaciones';
import {NgbdSortableHeader, SortEvent} from './../../../core/directives/sortable.directive';
import { PrestacionesService } from './../../../core/services/prestaciones/prestaciones.service';



@Component({
  selector: 'app-prestaciones',
  templateUrl: './prestaciones.component.html',
  styleUrls: ['./prestaciones.component.scss'], 
  providers: [PrestacionesService, DecimalPipe]
})
export class PrestacionesComponent implements OnInit{
  Prestaciones$: Observable<Prestaciones[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: PrestacionesService) {
    this.Prestaciones$ = service.countries$;
    this.total$ = service.total$;
  }
  ngOnInit() {
  }
  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
