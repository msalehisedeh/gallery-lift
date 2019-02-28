(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@sedeh/gallery-lift', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global.sedeh = global.sedeh || {}, global.sedeh['gallery-lift'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var GalleryLiftComponent = (function () {
        function GalleryLiftComponent() {
            this.layList = [1];
            this.displayType = 'c1';
            this.selectedIndex = 0;
            this.liftup = false;
            this.focused = false;
            this.onselect = new core.EventEmitter();
            this.preview = 3;
            this.layout = 'large-on-single';
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        GalleryLiftComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes.layout) {
                    switch (this.layout) {
                        case 'large-on-single':
                            this.displayType = 'c1';
                            this.layList = [1];
                            break;
                        case 'split-on-dual':
                            this.displayType = 'c2';
                            this.layList = [1, 2];
                            break;
                        case 'large-on-right':
                            this.displayType = 'c3';
                            this.layList = [1, 2, 3];
                            break;
                        case 'split-on-quadruple':
                            this.displayType = 'c4';
                            this.layList = [1, 2, 3, 4];
                            break;
                        case 'large-on-middle':
                            this.displayType = 'c5';
                            this.layList = [1, 2, 3, 4, 5];
                            break;
                        case 'large-on-left':
                            this.displayType = 'rc3';
                            this.layList = [1, 2, 3];
                            break;
                        case 'large-on-sides':
                            this.displayType = 'rc4';
                            this.layList = [1, 2, 3, 4];
                            break;
                    }
                }
            };
        /**
         * @param {?} index
         * @return {?}
         */
        GalleryLiftComponent.prototype.liftUpImagery = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                this.selectedIndex = index;
                this.liftup = true;
                this.onselect.emit({
                    index: this.selectedIndex,
                    action: 'lift up'
                });
            };
        /**
         * @return {?}
         */
        GalleryLiftComponent.prototype.liftDownImagery = /**
         * @return {?}
         */
            function () {
                this.liftup = false;
                this.focused = false;
                this.onselect.emit({
                    index: this.selectedIndex,
                    action: 'lift down'
                });
            };
        /**
         * @return {?}
         */
        GalleryLiftComponent.prototype.fullScreen = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @param {?} closeButton
         * @return {?}
         */
        GalleryLiftComponent.prototype.showMore = /**
         * @param {?} closeButton
         * @return {?}
         */
            function (closeButton) {
                if (!this.focused) {
                    this.focused = true;
                    closeButton.focus();
                }
                return this.selectedIndex < this.gallery.length - 1;
            };
        /**
         * @param {?} event
         * @return {?}
         */
        GalleryLiftComponent.prototype.keyup = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var code = event.which;
                if (code === 13) {
                    event.target.click();
                }
            };
        GalleryLiftComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gallery-lift',
                        template: "\r\n<div class=\"viewport {{displayType}}\">\r\n    <div *ngFor=\"let row of layList; let i = index\"\r\n        (keyup)=\"keyup($event)\"\r\n        (click)=\"liftUpImagery(i)\"\r\n        class=\"view\"\r\n        [attr.tabindex]=\"liftup ? -1: 0\">\r\n        <span class=\"off-screen\">\r\n            <ng-container \r\n                *ngIf=\"template\"\r\n                [ngTemplateOutlet]=\"template\" \r\n                [ngTemplateOutletContext]=\"{data: gallery[i].data, selected: i+1, total: gallery.length}\"></ng-container>\r\n        </span>\r\n        <img *ngIf=\"gallery[i].type === 'image'\" aria-hidden=\"true\" width=\"100%\" height=\"100%\" [src]=\"gallery[i].src\" />\r\n        <video *ngIf=\"gallery[i].type === 'video'\" width=\"100%\" [attr.src]=\"gallery[i].src\" disabled></video>\r\n        <div class=\"more\">See more...</div>\r\n    </div>\r\n</div>\r\n<div class=\"lift\" *ngIf=\"liftup\">\r\n    <div class=\"left-controls\">\r\n        <a *ngIf=\"selectedIndex>0\"  title=\"View previous\"\r\n            class=\"fa fa-chevron-left\" tabindex=\"0\"\r\n            (keyup)=\"keyup($event)\"\r\n            (click)=\"selectedIndex = selectedIndex-1\"></a>\r\n    </div>\r\n    <div class=\"lifter\">\r\n        <div class=\"lift-view\">\r\n            <img *ngIf=\"gallery[selectedIndex].type === 'image'\"  aria-hidden=\"true\" width=\"100%\" height=\"100%\" [src]=\"gallery[selectedIndex].src\" />\r\n            <video *ngIf=\"gallery[selectedIndex].type === 'video'\" width=\"100%\" [attr.src]=\"gallery[selectedIndex].src\" controls></video>\r\n        </div>\r\n        <div class=\"lift-info\">\r\n            <ng-container \r\n                *ngIf=\"template\"\r\n                [ngTemplateOutlet]=\"template\" \r\n                [ngTemplateOutletContext]=\"{data: gallery[selectedIndex].data, selected: selectedIndex+1, total: gallery.length}\"></ng-container>\r\n        </div>\r\n    </div>\r\n    <div class=\"right-controls\">\r\n        <a tabindex=\"0\" class=\"close fa fa-close\" title=\"Close viewer\" #closeButton\r\n            (click)=\"liftDownImagery()\" \r\n            (keyup)=\"keyup($event)\"></a>\r\n        <!-- a (click)=\"fullScreen()\" class=\"fa fa-expand\"></a -->\r\n        <a *ngIf=\"showMore(closeButton)\" title=\"View next\"\r\n            class=\"next fa fa-chevron-right\" tabindex=\"0\" \r\n            (keyup)=\"keyup($event)\"\r\n            (click)=\"selectedIndex = selectedIndex + 1\"></a>\r\n        <a [href]=\"gallery[selectedIndex].src\"  title=\"download\" class=\"download fa fa-download\" download></a>\r\n    </div>\r\n</div>\r\n",
                        styles: [":host{box-sizing:border-box;display:table;padding:0;margin:5px}:host .off-screen{display:block;width:1px;height:1px;position:absolute;left:-99999px;top:-99999px}:host .lift{width:100%;height:100%;position:fixed;top:0;left:0;display:flex;flex-direction:row;z-index:99;background-color:rgba(0,0,0,.8)}:host .lift .left-controls{width:30px;height:100vh;color:#fff;background-color:transparent;padding:20% 0}:host .lift .left-controls a{font-size:1.8rem;cursor:pointer;text-align:center;width:100%}:host .lift .lifter{flex:1;display:flex;flex-direction:row}:host .lift .lifter .lift-view{flex:1;margin:20px}:host .lift .lifter .lift-view img{border:2px solid #fff}:host .lift .lifter .lift-info{width:300px;height:100vh;background-color:#fff;margin:0 0 0 15px;padding:10px}:host .lift .right-controls{width:30px;height:100vh;color:#fff;background-color:transparent;display:flex;flex-direction:column;padding:20% 0}:host .lift .right-controls .close{position:absolute;right:0;top:5px;width:33px}:host .lift .right-controls .fa-expand{position:absolute;right:0;top:44px;width:33px;font-size:1.5rem}:host .lift .right-controls a{font-size:1.8rem;cursor:pointer;text-align:center;width:100%}:host .lift .right-controls .download{position:absolute;right:0;bottom:30px;font-size:1.5rem;width:33px;color:#fff}:host .viewport{display:-ms-inline-grid;display:inline-grid;grid-gap:0;background-color:#2196f3;padding:0}:host .viewport div{background-color:rgba(255,255,255,.8);text-align:center;padding:0;font-size:30px;position:relative;background-size:cover;background-position:center;cursor:pointer}:host .viewport div:focus,:host .viewport div:hover{-webkit-filter:brightness(70%);-moz-filter:brightness(70%);-o-filter:brightness(70%);-ms-filter:brightness(70%);filter:brightness(70%)}:host .viewport div:focus .more,:host .viewport div:hover .more{display:inline}:host .viewport div .more{display:none;width:100%;background-color:#000;color:#fff;font-size:1.2rem;position:absolute;left:0;bottom:0;padding:5px}:host .viewport div:nth-child(1){-ms-grid-row:1;-ms-grid-column:1;grid-area:tl}:host .viewport div:nth-child(2){-ms-grid-row:1;-ms-grid-column:3;grid-area:bl}:host .viewport div:nth-child(3){-ms-grid-row:1;-ms-grid-row-span:3;-ms-grid-column:3;-ms-grid-column-span:3;grid-area:center}:host .viewport div:nth-child(4){-ms-grid-row:3;-ms-grid-column:3;grid-area:tr}:host .viewport div:nth-child(5){-ms-grid-row:3;-ms-grid-column:7;grid-area:br}:host .viewport.c1{grid-template-areas:'tl'}:host .viewport.c2{-ms-grid-columns:50% 0 50%;grid-template-columns:50% 50%;grid-template-areas:'tl bl'}:host .viewport.c3{-ms-grid-columns:32% 0 auto;grid-template-columns:32% auto;-ms-grid-rows:auto 0 auto;grid-template-areas:'tl center center' 'bl center center'}:host .viewport.c4{-ms-grid-columns:50% 0 50%;grid-template-columns:50% 50%;-ms-grid-rows:auto 0 auto;grid-template-areas:'tl center' 'bl tr'}:host .viewport.c5{-ms-grid-columns:25% 0 auto 0 25%;grid-template-columns:25% auto 25%;-ms-grid-rows:auto 0 auto;grid-template-areas:'tl center center tr' 'bl center center br'}:host .viewport.rc3{-ms-grid-columns:auto 0 30%;grid-template-columns:auto 30%;-ms-grid-rows:auto 0 auto;grid-template-areas:'tl tl bl' 'tl tl center'}:host .viewport.rc4{-ms-grid-columns:30% 0 auto 0 30%;grid-template-columns:30% auto 30%;-ms-grid-rows:auto 0 auto;grid-template-areas:'tl bl tr' 'tl center tr'}@media only screen and (max-width:600px){:host .lift .lifter{flex-direction:column}:host .lift .lifter .lift-info{width:auto;margin:20px;overflow-y:auto}}"]
                    }] }
        ];
        GalleryLiftComponent.propDecorators = {
            onselect: [{ type: core.Output }],
            gallery: [{ type: core.Input }],
            preview: [{ type: core.Input }],
            template: [{ type: core.Input }],
            layout: [{ type: core.Input }]
        };
        return GalleryLiftComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var GalleryLiftModule = (function () {
        function GalleryLiftModule() {
        }
        GalleryLiftModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [
                            GalleryLiftComponent
                        ],
                        exports: [
                            GalleryLiftComponent
                        ],
                        entryComponents: [],
                        schemas: [core.CUSTOM_ELEMENTS_SCHEMA]
                    },] }
        ];
        return GalleryLiftModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.GalleryLiftComponent = GalleryLiftComponent;
    exports.GalleryLiftModule = GalleryLiftModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=sedeh-gallery-lift.umd.js.map