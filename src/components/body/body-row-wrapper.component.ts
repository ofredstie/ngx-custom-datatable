import {
  Component, Input, Output, EventEmitter, HostListener, DoCheck,
  ChangeDetectionStrategy, KeyValueDiffer, ChangeDetectorRef, KeyValueDiffers
} from '@angular/core';
import { MouseEvent } from '../../events';

@Component({
  selector: 'datatable-row-wrapper',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'body-row-wrapper.component.html',
  host: {
    class: 'datatable-row-wrapper'
  }
})
export class DataTableRowWrapperComponent implements DoCheck {

  @Input() innerWidth: number;
  @Input() rowDetail: any;
  @Input() groupHeader: any;
  @Input() offsetX: number;
  @Input() detailRowHeight: any;
  @Input() row: any;
  @Input() groupedRows: any;  
  @Output() rowContextmenu = new EventEmitter<{event: MouseEvent, row: any}>(false);

  @Input() set rowIndex(val: number) {
    this._rowIndex = val;
    this.rowContext.rowIndex = val;
    this.groupContext.rowIndex = val;
    this.cd.markForCheck();
  }

  get rowIndex(): number {
    return this._rowIndex;
  }

  @Input() set expanded(val: boolean) {
    this._expanded = val;
    this.groupContext.expanded = val;
    this.rowContext.expanded = val;
    this.cd.markForCheck();
  }

  get expanded(): boolean {
    return this._expanded;
  }

  groupContext: any = {
    group: this.row,
    expanded: this.expanded,
    rowIndex: this.rowIndex
  };

  rowContext: any = {
    row: this.row,
    expanded: this.expanded,
    rowIndex: this.rowIndex
  };

  private rowDiffer: KeyValueDiffer<{}, {}>;
  private _expanded: boolean = false;
  private _rowIndex: number;
  
  constructor(private cd: ChangeDetectorRef, private differs: KeyValueDiffers) {
    this.rowDiffer = differs.find({}).create();
  }

  ngDoCheck(): void {
    if (this.rowDiffer.diff(this.row)) {
      this.rowContext.row = this.row;
      this.groupContext.group = this.row;
      this.cd.markForCheck();
    }
  }

  @HostListener('contextmenu', ['$event'])
  onContextmenu($event: MouseEvent): void {
    this.rowContextmenu.emit({ event: $event, row: this.row });
  }

  getGroupHeaderStyle(group: any): any {
    const styles = {};

    styles['transform'] = 'translate3d(' + this.offsetX + 'px, 0px, 0px)';
    styles['backface-visibility'] = 'hidden';
    styles['width'] = this.innerWidth;

    return styles; 
  }
}
