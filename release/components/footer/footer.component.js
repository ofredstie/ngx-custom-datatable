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
var DataTableFooterComponent = /** @class */ (function () {
    function DataTableFooterComponent() {
        this.selectedCount = 0;
        this.page = new core_1.EventEmitter();
    }
    Object.defineProperty(DataTableFooterComponent.prototype, "isVisible", {
        get: function () {
            return (this.rowCount / this.pageSize) > 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableFooterComponent.prototype, "curPage", {
        get: function () {
            return this.offset + 1;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DataTableFooterComponent.prototype, "footerHeight", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DataTableFooterComponent.prototype, "rowCount", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DataTableFooterComponent.prototype, "pageSize", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DataTableFooterComponent.prototype, "offset", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DataTableFooterComponent.prototype, "pagerLeftArrowIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DataTableFooterComponent.prototype, "pagerRightArrowIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DataTableFooterComponent.prototype, "pagerPreviousIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DataTableFooterComponent.prototype, "pagerNextIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DataTableFooterComponent.prototype, "totalMessage", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", core_1.TemplateRef)
    ], DataTableFooterComponent.prototype, "footerTemplate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DataTableFooterComponent.prototype, "selectedCount", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataTableFooterComponent.prototype, "selectedMessage", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DataTableFooterComponent.prototype, "page", void 0);
    DataTableFooterComponent = __decorate([
        core_1.Component({
            selector: 'datatable-footer',
            templateUrl: 'footer.component.html',
            host: {
                class: 'datatable-footer'
            },
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], DataTableFooterComponent);
    return DataTableFooterComponent;
}());
exports.DataTableFooterComponent = DataTableFooterComponent;
//# sourceMappingURL=footer.component.js.map