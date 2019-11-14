import {DecimalPipe} from '@angular/common';
import {Component, QueryList, ViewChildren, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {comuna} from './../../../core/models/comunas/comunas';
import {ComunaService} from './../../../core/services/comunas/comunas.service';
import {NgbdSortableHeader, SortEvent} from './../../../core/directives/sortable.directive';

@Component({
  selector: 'app-comunas',
  templateUrl: './comunas.component.html',
  styleUrls: ['./comunas.component.scss'], 
  providers: [ComunaService, DecimalPipe]
})
export class ComunasComponent implements OnInit{
  comuna$: Observable<comuna[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: ComunaService) {
    this.comuna$ = service.countries$;
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




