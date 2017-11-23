import { TemplateRef } from '@angular/core';
export declare class DatatablePaginationDirective {
    paginationHeight: number;
    paginationTop: boolean;
    paginationBottom: boolean;
    totalMessage: string;
    selectedMessage: string | boolean;
    pagerLeftArrowIcon: string;
    pagerRightArrowIcon: string;
    pagerPreviousIcon: string;
    pagerNextIcon: string;
    template: TemplateRef<any>;
}
