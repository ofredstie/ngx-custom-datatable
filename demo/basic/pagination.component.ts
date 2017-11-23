import { Component } from '@angular/core';

@Component({
  selector: 'pagination-demo',
  template: `
    <div>
      <h3>
        Custom Pagination
        <small>
          <a href="https://github.com/swimlane/ngx-datatable/blob/master/demo/basic/footer.component.ts" target="_blank">
            Source
          </a>
        </small>
      </h3>
      <ngx-datatable
        class="material"
        [rows]="rows"
        [columns]="columns"
        [columnMode]="'force'"
        [paginationHeight]="100"
        [headerHeight]="50"
        [rowHeight]="'auto'">
        <ngx-datatable-pagination>
          <ng-template 
            ngx-datatable-pagination-template 
            let-rowCount="rowCount"
            let-pageSize="pageSize"
            let-selectedCount="selectedCount"
            let-curPage="curPage"
            let-offset="offset">
            <div style="padding: 5px 10px">
              <div>
                <strong>Summary</strong>: Gender: Female
              </div>
              <hr style="width:100%" />
              <div>
                Rows: {{rowCount}} |
                Size: {{pageSize}} |
                Current: {{curPage}} |
                Offset: {{offset}}
              </div>
            </div>
          </ng-template>
        </ngx-datatable-pagination>
      </ngx-datatable>
    </div>
  `
})
export class PaginationDemoComponent {

  rows = [];

  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];

  constructor() {
    this.fetch((data) => {
      this.rows = data.splice(0, 5);
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

}
