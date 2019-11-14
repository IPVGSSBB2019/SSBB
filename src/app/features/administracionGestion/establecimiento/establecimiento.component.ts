import {DecimalPipe} from '@angular/common';
import {Component, QueryList, ViewChildren, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {Establecimiento} from './../../../core/models/establecimiento/establecimiento';
import {NgbdSortableHeader, SortEvent} from './../../../core/directives/sortable.directive';
import { EstablecimientoService } from './../../../core/services/establecimiento/establecimiento.service';



@Component({
  selector: 'app-establecimiento',
  templateUrl: './establecimiento.component.html',
  styleUrls: ['./establecimiento.component.scss'], 
  providers: [EstablecimientoService, DecimalPipe]
})
export class EstablecimientoComponent implements OnInit{
  Establecimiento$: Observable<Establecimiento[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: EstablecimientoService) {
    this.Establecimiento$ = service.countries$;
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
