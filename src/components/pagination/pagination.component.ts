import { Component, Output, EventEmitter, ChangeDetectionStrategy, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'datatable-pagination',
  templateUrl: 'pagination.component.html',
  host: {
    class: 'datatable-pagination'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTablePaginationComponent {

  @Input() paginationHeight: number;
  @Input() paginationTop: boolean;
  @Input() paginationBottom: boolean;
  @Input() rowCount: number;
  @Input() pageSize: number;
  @Input() offset: number;
  @Input() pagerLeftArrowIcon: string;
  @Input() pagerRightArrowIcon: string;
  @Input() pagerPreviousIcon: string;
  @Input() pagerNextIcon: string;
  @Input() totalMessage: string;
  @Input() paginationTemplate: TemplateRef<any>;

  @Input() selectedCount: number = 0;
  @Input() selectedMessage: string | boolean;

  @Output() page: EventEmitter<any> = new EventEmitter();

  get isVisible(): boolean {
    return (this.rowCount / this.pageSize) > 1;
  }

  get curPage(): number {
    return this.offset + 1;
  }

  get startRow(): number {
    return 1 + (this.pageSize * this.offset);
  }

  get endRow(): number {
    if (this.rowCount <= this.pageSize) {
      return this.rowCount;
    } else if (this.rowCount < (this.pageSize * this.curPage)) {
      return this.rowCount;
    } else {
      return this.curPage * this.pageSize;
    }
  }
}
