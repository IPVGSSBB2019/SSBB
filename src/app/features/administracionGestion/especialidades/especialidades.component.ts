import {DecimalPipe} from '@angular/common';
import {Component, QueryList, ViewChildren, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {Especialidades} from './../../../core/models/especialidades/especialidades';
import {NgbdSortableHeader, SortEvent} from './../../../core/directives/sortable.directive';
import { EspecialidadService } from './../../../core/services/especialidades/especialidades.service';



@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.scss'], 
  providers: [EspecialidadService, DecimalPipe]
})
export class especialidadComponent implements OnInit{
  Especialidades$: Observable<Especialidades[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: EspecialidadService) {
    this.Especialidades$ = service.countries$;
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
