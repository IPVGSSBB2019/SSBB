import {DecimalPipe} from '@angular/common';
import {Component, QueryList, ViewChildren, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {CatEstablecimiento} from './../../../core/models/CatEstablecimiento/catEstablecimiento';
import {NgbdSortableHeader, SortEvent} from './../../../core/directives/sortable.directive';
import { catEstablecimientoService } from './../../../core/services/catEstablecimiento/cat-establecimiento.service';



@Component({
  selector: 'app-cat-establecimiento',
  templateUrl: './categoria-establecimiento.component.html',
  styleUrls: ['./categoria-establecimiento.component.scss'], 
  providers: [catEstablecimientoService, DecimalPipe]
})
export class catEstablecimientoComponent implements OnInit{
  CatEstablecimiento$: Observable<CatEstablecimiento[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: catEstablecimientoService) {
    this.CatEstablecimiento$ = service.countries$;
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
