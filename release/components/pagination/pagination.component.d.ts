import { EventEmitter, TemplateRef } from '@angular/core';
export declare class DataTablePaginationComponent {
    paginationHeight: number;
    paginationTop: boolean;
    paginationBottom: boolean;
    rowCount: number;
    pageSize: number;
    offset: number;
    pagerLeftArrowIcon: string;
    pagerRightArrowIcon: string;
    pagerPreviousIcon: string;
    pagerNextIcon: string;
    totalMessage: string;
    paginationTemplate: TemplateRef<any>;
    selectedCount: number;
    selectedMessage: string | boolean;
    page: EventEmitter<any>;
    readonly isVisible: boolean;
    readonly curPage: number;
    readonly startRow: number;
    readonly endRow: number;
}
