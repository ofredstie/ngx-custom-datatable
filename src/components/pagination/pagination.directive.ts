import { Input, Output, EventEmitter, Directive, TemplateRef, ContentChild } from '@angular/core';
import { DataTablePaginationTemplateDirective } from './pagination-template.directive';

@Directive({ selector: 'ngx-datatable-pagination' })
export class DatatablePaginationDirective {

  @Input() paginationHeight: number;
  @Input() paginationTop: boolean;
  @Input() paginationBottom: boolean;
  @Input() totalMessage: string;
  @Input() selectedMessage: string | boolean;
  @Input() pagerLeftArrowIcon: string;
  @Input() pagerRightArrowIcon: string;
  @Input() pagerPreviousIcon: string;
  @Input() pagerNextIcon: string;

  @Input()
  @ContentChild(DataTablePaginationTemplateDirective, { read: TemplateRef }) 
  template: TemplateRef<any>;

}
