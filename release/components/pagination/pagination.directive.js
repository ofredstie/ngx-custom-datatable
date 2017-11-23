"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var pagination_template_directive_1 = require("./pagination-template.directive");
var DatatablePaginationDirective = /** @class */ (function () {
    function DatatablePaginationDirective() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DatatablePaginationDirective.prototype, "paginationHeight", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DatatablePaginationDirective.prototype, "paginationTop", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DatatablePaginationDirective.prototype, "paginationBottom", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DatatablePaginationDirective.prototype, "totalMessage", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DatatablePaginationDirective.prototype, "selectedMessage", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DatatablePaginationDirective.prototype, "pagerLeftArrowIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DatatablePaginationDirective.prototype, "pagerRightArrowIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DatatablePaginationDirective.prototype, "pagerPreviousIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DatatablePaginationDirective.prototype, "pagerNextIcon", void 0);
    __decorate([
        core_1.Input(),
        core_1.ContentChild(pagination_template_directive_1.DataTablePaginationTemplateDirective, { read: core_1.TemplateRef }),
        __metadata("design:type", core_1.TemplateRef)
    ], DatatablePaginationDirective.prototype, "template", void 0);
    DatatablePaginationDirective = __decorate([
        core_1.Directive({ selector: 'ngx-datatable-pagination' })
    ], DatatablePaginationDirective);
    return DatatablePaginationDirective;
}());
exports.DatatablePaginationDirective = DatatablePaginationDirective;
//# sourceMappingURL=pagination.directive.js.map