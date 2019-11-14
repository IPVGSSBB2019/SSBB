import {DecimalPipe} from '@angular/common';
import {Component, QueryList, ViewChildren, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {Rendimiento} from './../../../core/models/rendimiento/rendimiento';
import {NgbdSortableHeader, SortEvent} from './../../../core/directives/sortable.directive';
import { RendimientoService } from './../../../core/services/rendimiento/rendimiento.service';



@Component({
  selector: 'app-rendimiento',
  templateUrl: './rendimiento.component.html',
  styleUrls: ['./rendimiento.component.scss'], 
  providers: [RendimientoService, DecimalPipe]
})
export class RendimientoComponent implements OnInit{
  Rendimiento$: Observable<Rendimiento[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: RendimientoService) {
    this.Rendimiento$ = service.countries$;
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
