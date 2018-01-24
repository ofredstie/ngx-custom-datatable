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
var DataTablePaginationComponent = /** @class */ (function () {
    function DataTablePaginationComponent() {
        this.selectedCount = 0;
        this.page = new core_1.EventEmitter();
    }
    Object.defineProperty(DataTablePaginationComponent.prototype, "isVisible", {
        get: function () {
            return (this.rowCount / this.pageSize) > 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTablePaginationComponent.prototype, "curPage", {
        get: function () {
            return this.offset + 1;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DataTablePaginationComponent.prototype, "paginationHeight", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DataTablePaginationComponent.prototype, "rowCount", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DataTablePaginationComponent.prototype, "pageSize", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DataTablePaginationComponent.prototype, "offset", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DataTablePaginationComponent.prototype, "pagerLeftArrowIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DataTablePaginationComponent.prototype, "pagerRightArrowIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DataTablePaginationComponent.prototype, "pagerPreviousIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DataTablePaginationComponent.prototype, "pagerNextIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DataTablePaginationComponent.prototype, "totalMessage", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", core_1.TemplateRef)
    ], DataTablePaginationComponent.prototype, "paginationTemplate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DataTablePaginationComponent.prototype, "selectedCount", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataTablePaginationComponent.prototype, "selectedMessage", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DataTablePaginationComponent.prototype, "page", void 0);
    DataTablePaginationComponent = __decorate([
        core_1.Component({
            selector: 'datatable-pagination',
            templateUrl: 'pagination.component.html',
            host: {
                class: 'datatable-pagination'
            },
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], DataTablePaginationComponent);
    return DataTablePaginationComponent;
}());
exports.DataTablePaginationComponent = DataTablePaginationComponent;
//# sourceMappingURL=pagination.component.js.map