import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[ngx-datatable-pagination-template]' })
export class DataTablePaginationTemplateDirective {
  constructor(public template: TemplateRef<any>) { }
}
