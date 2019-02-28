/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var GalleryLiftComponent = /** @class */ (function () {
    function GalleryLiftComponent() {
        this.layList = [1];
        this.displayType = 'c1';
        this.selectedIndex = 0;
        this.liftup = false;
        this.focused = false;
        this.onselect = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'gallery-lift',
                    template: "\r\n<div class=\"viewport {{displayType}}\">\r\n    <div *ngFor=\"let row of layList; let i = index\"\r\n        (keyup)=\"keyup($event)\"\r\n        (click)=\"liftUpImagery(i)\"\r\n        class=\"view\"\r\n        [attr.tabindex]=\"liftup ? -1: 0\">\r\n        <span class=\"off-screen\">\r\n            <ng-container \r\n                *ngIf=\"template\"\r\n                [ngTemplateOutlet]=\"template\" \r\n                [ngTemplateOutletContext]=\"{data: gallery[i].data, selected: i+1, total: gallery.length}\"></ng-container>\r\n        </span>\r\n        <img *ngIf=\"gallery[i].type === 'image'\" aria-hidden=\"true\" width=\"100%\" height=\"100%\" [src]=\"gallery[i].src\" />\r\n        <video *ngIf=\"gallery[i].type === 'video'\" width=\"100%\" [attr.src]=\"gallery[i].src\" disabled></video>\r\n        <div class=\"more\">See more...</div>\r\n    </div>\r\n</div>\r\n<div class=\"lift\" *ngIf=\"liftup\">\r\n    <div class=\"left-controls\">\r\n        <a *ngIf=\"selectedIndex>0\"  title=\"View previous\"\r\n            class=\"fa fa-chevron-left\" tabindex=\"0\"\r\n            (keyup)=\"keyup($event)\"\r\n            (click)=\"selectedIndex = selectedIndex-1\"></a>\r\n    </div>\r\n    <div class=\"lifter\">\r\n        <div class=\"lift-view\">\r\n            <img *ngIf=\"gallery[selectedIndex].type === 'image'\"  aria-hidden=\"true\" width=\"100%\" height=\"100%\" [src]=\"gallery[selectedIndex].src\" />\r\n            <video *ngIf=\"gallery[selectedIndex].type === 'video'\" width=\"100%\" [attr.src]=\"gallery[selectedIndex].src\" controls></video>\r\n        </div>\r\n        <div class=\"lift-info\">\r\n            <ng-container \r\n                *ngIf=\"template\"\r\n                [ngTemplateOutlet]=\"template\" \r\n                [ngTemplateOutletContext]=\"{data: gallery[selectedIndex].data, selected: selectedIndex+1, total: gallery.length}\"></ng-container>\r\n        </div>\r\n    </div>\r\n    <div class=\"right-controls\">\r\n        <a tabindex=\"0\" class=\"close fa fa-close\" title=\"Close viewer\" #closeButton\r\n            (click)=\"liftDownImagery()\" \r\n            (keyup)=\"keyup($event)\"></a>\r\n        <!-- a (click)=\"fullScreen()\" class=\"fa fa-expand\"></a -->\r\n        <a *ngIf=\"showMore(closeButton)\" title=\"View next\"\r\n            class=\"next fa fa-chevron-right\" tabindex=\"0\" \r\n            (keyup)=\"keyup($event)\"\r\n            (click)=\"selectedIndex = selectedIndex + 1\"></a>\r\n        <a [href]=\"gallery[selectedIndex].src\"  title=\"download\" class=\"download fa fa-download\" download></a>\r\n    </div>\r\n</div>\r\n",
                    styles: [":host{box-sizing:border-box;display:table;padding:0;margin:5px}:host .off-screen{display:block;width:1px;height:1px;position:absolute;left:-99999px;top:-99999px}:host .lift{width:100%;height:100%;position:fixed;top:0;left:0;display:flex;flex-direction:row;z-index:99;background-color:rgba(0,0,0,.8)}:host .lift .left-controls{width:30px;height:100vh;color:#fff;background-color:transparent;padding:20% 0}:host .lift .left-controls a{font-size:1.8rem;cursor:pointer;text-align:center;width:100%}:host .lift .lifter{flex:1;display:flex;flex-direction:row}:host .lift .lifter .lift-view{flex:1;margin:20px}:host .lift .lifter .lift-view img{border:2px solid #fff}:host .lift .lifter .lift-info{width:300px;height:100vh;background-color:#fff;margin:0 0 0 15px;padding:10px}:host .lift .right-controls{width:30px;height:100vh;color:#fff;background-color:transparent;display:flex;flex-direction:column;padding:20% 0}:host .lift .right-controls .close{position:absolute;right:0;top:5px;width:33px}:host .lift .right-controls .fa-expand{position:absolute;right:0;top:44px;width:33px;font-size:1.5rem}:host .lift .right-controls a{font-size:1.8rem;cursor:pointer;text-align:center;width:100%}:host .lift .right-controls .download{position:absolute;right:0;bottom:30px;font-size:1.5rem;width:33px;color:#fff}:host .viewport{display:-ms-inline-grid;display:inline-grid;grid-gap:0;background-color:#2196f3;padding:0}:host .viewport div{background-color:rgba(255,255,255,.8);text-align:center;padding:0;font-size:30px;position:relative;background-size:cover;background-position:center;cursor:pointer}:host .viewport div:focus,:host .viewport div:hover{-webkit-filter:brightness(70%);-moz-filter:brightness(70%);-o-filter:brightness(70%);-ms-filter:brightness(70%);filter:brightness(70%)}:host .viewport div:focus .more,:host .viewport div:hover .more{display:inline}:host .viewport div .more{display:none;width:100%;background-color:#000;color:#fff;font-size:1.2rem;position:absolute;left:0;bottom:0;padding:5px}:host .viewport div:nth-child(1){-ms-grid-row:1;-ms-grid-column:1;grid-area:tl}:host .viewport div:nth-child(2){-ms-grid-row:1;-ms-grid-column:3;grid-area:bl}:host .viewport div:nth-child(3){-ms-grid-row:1;-ms-grid-row-span:3;-ms-grid-column:3;-ms-grid-column-span:3;grid-area:center}:host .viewport div:nth-child(4){-ms-grid-row:3;-ms-grid-column:3;grid-area:tr}:host .viewport div:nth-child(5){-ms-grid-row:3;-ms-grid-column:7;grid-area:br}:host .viewport.c1{grid-template-areas:'tl'}:host .viewport.c2{-ms-grid-columns:50% 0 50%;grid-template-columns:50% 50%;grid-template-areas:'tl bl'}:host .viewport.c3{-ms-grid-columns:32% 0 auto;grid-template-columns:32% auto;-ms-grid-rows:auto 0 auto;grid-template-areas:'tl center center' 'bl center center'}:host .viewport.c4{-ms-grid-columns:50% 0 50%;grid-template-columns:50% 50%;-ms-grid-rows:auto 0 auto;grid-template-areas:'tl center' 'bl tr'}:host .viewport.c5{-ms-grid-columns:25% 0 auto 0 25%;grid-template-columns:25% auto 25%;-ms-grid-rows:auto 0 auto;grid-template-areas:'tl center center tr' 'bl center center br'}:host .viewport.rc3{-ms-grid-columns:auto 0 30%;grid-template-columns:auto 30%;-ms-grid-rows:auto 0 auto;grid-template-areas:'tl tl bl' 'tl tl center'}:host .viewport.rc4{-ms-grid-columns:30% 0 auto 0 30%;grid-template-columns:30% auto 30%;-ms-grid-rows:auto 0 auto;grid-template-areas:'tl bl tr' 'tl center tr'}@media only screen and (max-width:600px){:host .lift .lifter{flex-direction:column}:host .lift .lifter .lift-info{width:auto;margin:20px;overflow-y:auto}}"]
                }] }
    ];
    GalleryLiftComponent.propDecorators = {
        onselect: [{ type: Output }],
        gallery: [{ type: Input }],
        preview: [{ type: Input }],
        template: [{ type: Input }],
        layout: [{ type: Input }]
    };
    return GalleryLiftComponent;
}());
export { GalleryLiftComponent };
if (false) {
    /** @type {?} */
    GalleryLiftComponent.prototype.layList;
    /** @type {?} */
    GalleryLiftComponent.prototype.displayType;
    /** @type {?} */
    GalleryLiftComponent.prototype.selectedIndex;
    /** @type {?} */
    GalleryLiftComponent.prototype.liftup;
    /** @type {?} */
    GalleryLiftComponent.prototype.focused;
    /** @type {?} */
    GalleryLiftComponent.prototype.onselect;
    /** @type {?} */
    GalleryLiftComponent.prototype.gallery;
    /** @type {?} */
    GalleryLiftComponent.prototype.preview;
    /** @type {?} */
    GalleryLiftComponent.prototype.template;
    /** @type {?} */
    GalleryLiftComponent.prototype.layout;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1saWZ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZWRlaC9nYWxsZXJ5LWxpZnQvIiwic291cmNlcyI6WyJzcmMvYXBwL2dhbGxlcnktbGlmdC9nYWxsZXJ5LWxpZnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDOzs7dUJBUVgsQ0FBQyxDQUFDLENBQUM7MkJBQ0MsSUFBSTs2QkFDRixDQUFDO3NCQUNSLEtBQUs7dUJBQ0osS0FBSzt3QkFFSyxJQUFJLFlBQVksRUFBRTt1QkFHbkIsQ0FBQztzQkFFRixpQkFBaUI7Ozs7OztJQUVuQywwQ0FBVzs7OztJQUFYLFVBQVksT0FBWTtRQUN0QixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNuQixNQUFNLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUEsQ0FBQztnQkFDbEIsS0FBSyxpQkFBaUI7b0JBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7b0JBQUEsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUFBLEtBQUssQ0FBQztnQkFDekUsS0FBSyxlQUFlO29CQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO29CQUFBLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQUEsS0FBSyxDQUFDO2dCQUN6RSxLQUFLLGdCQUFnQjtvQkFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztvQkFBQSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztvQkFBQSxLQUFLLENBQUM7Z0JBQzVFLEtBQUssb0JBQW9CO29CQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO29CQUFBLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztvQkFBQSxLQUFLLENBQUM7Z0JBQ2xGLEtBQUssaUJBQWlCO29CQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO29CQUFBLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQUEsS0FBSyxDQUFDO2dCQUNqRixLQUFLLGVBQWU7b0JBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7b0JBQUEsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQUEsS0FBSyxDQUFDO2dCQUM1RSxLQUFLLGdCQUFnQjtvQkFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztvQkFBQSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQUEsS0FBSyxDQUFDO2FBQ2hGO1NBQ0Y7S0FDRjs7Ozs7SUFDRCw0Q0FBYTs7OztJQUFiLFVBQWMsS0FBYTtRQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNqQixLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDekIsTUFBTSxFQUFFLFNBQVM7U0FDbEIsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFDRCw4Q0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtRQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNqQixLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDekIsTUFBTSxFQUFFLFdBQVc7U0FDcEIsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFDRCx5Q0FBVTs7O0lBQVY7S0FFQzs7Ozs7SUFDRCx1Q0FBUTs7OztJQUFSLFVBQVMsV0FBVztRQUNsQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNyQjtRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztLQUNyRDs7Ozs7SUFDRCxvQ0FBSzs7OztJQUFMLFVBQU0sS0FBVTs7UUFDaEIsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN6QixFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNkLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDdEI7S0FDRjs7Z0JBL0RGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsMGtGQUE0Qzs7aUJBRTdDOzs7MkJBUUUsTUFBTTswQkFFTixLQUFLOzBCQUNMLEtBQUs7MkJBQ0wsS0FBSzt5QkFDTCxLQUFLOzsrQkExQlI7O1NBY2Esb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dhbGxlcnktbGlmdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dhbGxlcnktbGlmdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ2FsbGVyeS1saWZ0LmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHYWxsZXJ5TGlmdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgbGF5TGlzdCA9IFsxXTtcclxuICBkaXNwbGF5VHlwZSA9ICdjMSc7XHJcbiAgc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgbGlmdHVwID0gZmFsc2U7XHJcbiAgZm9jdXNlZCA9IGZhbHNlO1xyXG4gIFxyXG4gIEBPdXRwdXQoKSBvbnNlbGVjdD0gbmV3IEV2ZW50RW1pdHRlcigpXHJcblxyXG4gIEBJbnB1dCgpIGdhbGxlcnk6IGFueVtdO1xyXG4gIEBJbnB1dCgpIHByZXZpZXcgPSAzO1xyXG4gIEBJbnB1dCgpIHRlbXBsYXRlOiBhbnk7XHJcbiAgQElucHV0KCkgbGF5b3V0ID0gJ2xhcmdlLW9uLXNpbmdsZSc7XHJcbiAgXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogYW55KSB7XHJcbiAgICBpZiAoY2hhbmdlcy5sYXlvdXQpIHtcclxuICAgICAgc3dpdGNoKHRoaXMubGF5b3V0KXtcclxuICAgICAgICBjYXNlICdsYXJnZS1vbi1zaW5nbGUnOiB0aGlzLmRpc3BsYXlUeXBlID0gJ2MxJzt0aGlzLmxheUxpc3QgPSBbMV07YnJlYWs7XHJcbiAgICAgICAgY2FzZSAnc3BsaXQtb24tZHVhbCc6IHRoaXMuZGlzcGxheVR5cGUgPSAnYzInO3RoaXMubGF5TGlzdCA9IFsxLDJdO2JyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2xhcmdlLW9uLXJpZ2h0JzogdGhpcy5kaXNwbGF5VHlwZSA9ICdjMyc7dGhpcy5sYXlMaXN0ID0gWzEsMiwzXTticmVhaztcclxuICAgICAgICBjYXNlICdzcGxpdC1vbi1xdWFkcnVwbGUnOiB0aGlzLmRpc3BsYXlUeXBlID0gJ2M0Jzt0aGlzLmxheUxpc3QgPSBbMSwyLDMsNF07YnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbGFyZ2Utb24tbWlkZGxlJzogdGhpcy5kaXNwbGF5VHlwZSA9ICdjNSc7dGhpcy5sYXlMaXN0ID0gWzEsMiwzLDQsNV07YnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbGFyZ2Utb24tbGVmdCc6IHRoaXMuZGlzcGxheVR5cGUgPSAncmMzJzt0aGlzLmxheUxpc3QgPSBbMSwyLDNdO2JyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2xhcmdlLW9uLXNpZGVzJzogdGhpcy5kaXNwbGF5VHlwZSA9ICdyYzQnO3RoaXMubGF5TGlzdCA9IFsxLDIsMyw0XTticmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBsaWZ0VXBJbWFnZXJ5KGluZGV4OiBudW1iZXIpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xyXG4gICAgdGhpcy5saWZ0dXAgPSB0cnVlO1xyXG4gICAgdGhpcy5vbnNlbGVjdC5lbWl0KHtcclxuICAgICAgaW5kZXg6IHRoaXMuc2VsZWN0ZWRJbmRleCxcclxuICAgICAgYWN0aW9uOiAnbGlmdCB1cCdcclxuICAgIH0pO1xyXG4gIH1cclxuICBsaWZ0RG93bkltYWdlcnkoKSB7XHJcbiAgICB0aGlzLmxpZnR1cCA9IGZhbHNlO1xyXG4gICAgdGhpcy5mb2N1c2VkID0gZmFsc2VcclxuICAgIHRoaXMub25zZWxlY3QuZW1pdCh7XHJcbiAgICAgIGluZGV4OiB0aGlzLnNlbGVjdGVkSW5kZXgsXHJcbiAgICAgIGFjdGlvbjogJ2xpZnQgZG93bidcclxuICAgIH0pO1xyXG4gIH1cclxuICBmdWxsU2NyZWVuKCkge1xyXG5cclxuICB9XHJcbiAgc2hvd01vcmUoY2xvc2VCdXR0b24pIHtcclxuICAgIGlmICghdGhpcy5mb2N1c2VkKSB7XHJcbiAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XHJcbiAgICAgIGNsb3NlQnV0dG9uLmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEluZGV4IDwgdGhpcy5nYWxsZXJ5Lmxlbmd0aCAtIDE7XHJcbiAgfVxyXG4gIGtleXVwKGV2ZW50OiBhbnkpIHtcclxuXHRcdGNvbnN0IGNvZGUgPSBldmVudC53aGljaDtcclxuXHRcdGlmIChjb2RlID09PSAxMykge1xyXG4gICAgICBldmVudC50YXJnZXQuY2xpY2soKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19