/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class GalleryLiftComponent {
    constructor() {
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
    ngOnChanges(changes) {
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
    }
    /**
     * @param {?} index
     * @return {?}
     */
    liftUpImagery(index) {
        this.selectedIndex = index;
        this.liftup = true;
        this.onselect.emit({
            index: this.selectedIndex,
            action: 'lift up'
        });
    }
    /**
     * @return {?}
     */
    liftDownImagery() {
        this.liftup = false;
        this.focused = false;
        this.onselect.emit({
            index: this.selectedIndex,
            action: 'lift down'
        });
    }
    /**
     * @return {?}
     */
    fullScreen() {
    }
    /**
     * @param {?} closeButton
     * @return {?}
     */
    showMore(closeButton) {
        if (!this.focused) {
            this.focused = true;
            closeButton.focus();
        }
        return this.selectedIndex < this.gallery.length - 1;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keyup(event) {
        /** @type {?} */
        const code = event.which;
        if (code === 13) {
            event.target.click();
        }
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1saWZ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZWRlaC9nYWxsZXJ5LWxpZnQvIiwic291cmNlcyI6WyJzcmMvYXBwL2dhbGxlcnktbGlmdC9nYWxsZXJ5LWxpZnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBT3ZCLE1BQU07O3VCQUNNLENBQUMsQ0FBQyxDQUFDOzJCQUNDLElBQUk7NkJBQ0YsQ0FBQztzQkFDUixLQUFLO3VCQUNKLEtBQUs7d0JBRUssSUFBSSxZQUFZLEVBQUU7dUJBR25CLENBQUM7c0JBRUYsaUJBQWlCOzs7Ozs7SUFFbkMsV0FBVyxDQUFDLE9BQVk7UUFDdEIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDbkIsTUFBTSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBLENBQUM7Z0JBQ2xCLEtBQUssaUJBQWlCO29CQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO29CQUFBLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFBQSxLQUFLLENBQUM7Z0JBQ3pFLEtBQUssZUFBZTtvQkFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztvQkFBQSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO29CQUFBLEtBQUssQ0FBQztnQkFDekUsS0FBSyxnQkFBZ0I7b0JBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7b0JBQUEsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQUEsS0FBSyxDQUFDO2dCQUM1RSxLQUFLLG9CQUFvQjtvQkFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztvQkFBQSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQUEsS0FBSyxDQUFDO2dCQUNsRixLQUFLLGlCQUFpQjtvQkFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztvQkFBQSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO29CQUFBLEtBQUssQ0FBQztnQkFDakYsS0FBSyxlQUFlO29CQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO29CQUFBLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO29CQUFBLEtBQUssQ0FBQztnQkFDNUUsS0FBSyxnQkFBZ0I7b0JBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7b0JBQUEsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO29CQUFBLEtBQUssQ0FBQzthQUNoRjtTQUNGO0tBQ0Y7Ozs7O0lBQ0QsYUFBYSxDQUFDLEtBQWE7UUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDakIsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ3pCLE1BQU0sRUFBRSxTQUFTO1NBQ2xCLENBQUMsQ0FBQztLQUNKOzs7O0lBQ0QsZUFBZTtRQUNiLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2pCLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYTtZQUN6QixNQUFNLEVBQUUsV0FBVztTQUNwQixDQUFDLENBQUM7S0FDSjs7OztJQUNELFVBQVU7S0FFVDs7Ozs7SUFDRCxRQUFRLENBQUMsV0FBVztRQUNsQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNyQjtRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztLQUNyRDs7Ozs7SUFDRCxLQUFLLENBQUMsS0FBVTs7UUFDaEIsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN6QixFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNkLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDdEI7S0FDRjs7O1lBL0RGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsMGtGQUE0Qzs7YUFFN0M7Ozt1QkFRRSxNQUFNO3NCQUVOLEtBQUs7c0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3FCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2FsbGVyeS1saWZ0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZ2FsbGVyeS1saWZ0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9nYWxsZXJ5LWxpZnQuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEdhbGxlcnlMaWZ0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBsYXlMaXN0ID0gWzFdO1xyXG4gIGRpc3BsYXlUeXBlID0gJ2MxJztcclxuICBzZWxlY3RlZEluZGV4ID0gMDtcclxuICBsaWZ0dXAgPSBmYWxzZTtcclxuICBmb2N1c2VkID0gZmFsc2U7XHJcbiAgXHJcbiAgQE91dHB1dCgpIG9uc2VsZWN0PSBuZXcgRXZlbnRFbWl0dGVyKClcclxuXHJcbiAgQElucHV0KCkgZ2FsbGVyeTogYW55W107XHJcbiAgQElucHV0KCkgcHJldmlldyA9IDM7XHJcbiAgQElucHV0KCkgdGVtcGxhdGU6IGFueTtcclxuICBASW5wdXQoKSBsYXlvdXQgPSAnbGFyZ2Utb24tc2luZ2xlJztcclxuICBcclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpIHtcclxuICAgIGlmIChjaGFuZ2VzLmxheW91dCkge1xyXG4gICAgICBzd2l0Y2godGhpcy5sYXlvdXQpe1xyXG4gICAgICAgIGNhc2UgJ2xhcmdlLW9uLXNpbmdsZSc6IHRoaXMuZGlzcGxheVR5cGUgPSAnYzEnO3RoaXMubGF5TGlzdCA9IFsxXTticmVhaztcclxuICAgICAgICBjYXNlICdzcGxpdC1vbi1kdWFsJzogdGhpcy5kaXNwbGF5VHlwZSA9ICdjMic7dGhpcy5sYXlMaXN0ID0gWzEsMl07YnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbGFyZ2Utb24tcmlnaHQnOiB0aGlzLmRpc3BsYXlUeXBlID0gJ2MzJzt0aGlzLmxheUxpc3QgPSBbMSwyLDNdO2JyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3NwbGl0LW9uLXF1YWRydXBsZSc6IHRoaXMuZGlzcGxheVR5cGUgPSAnYzQnO3RoaXMubGF5TGlzdCA9IFsxLDIsMyw0XTticmVhaztcclxuICAgICAgICBjYXNlICdsYXJnZS1vbi1taWRkbGUnOiB0aGlzLmRpc3BsYXlUeXBlID0gJ2M1Jzt0aGlzLmxheUxpc3QgPSBbMSwyLDMsNCw1XTticmVhaztcclxuICAgICAgICBjYXNlICdsYXJnZS1vbi1sZWZ0JzogdGhpcy5kaXNwbGF5VHlwZSA9ICdyYzMnO3RoaXMubGF5TGlzdCA9IFsxLDIsM107YnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbGFyZ2Utb24tc2lkZXMnOiB0aGlzLmRpc3BsYXlUeXBlID0gJ3JjNCc7dGhpcy5sYXlMaXN0ID0gWzEsMiwzLDRdO2JyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGxpZnRVcEltYWdlcnkoaW5kZXg6IG51bWJlcikge1xyXG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XHJcbiAgICB0aGlzLmxpZnR1cCA9IHRydWU7XHJcbiAgICB0aGlzLm9uc2VsZWN0LmVtaXQoe1xyXG4gICAgICBpbmRleDogdGhpcy5zZWxlY3RlZEluZGV4LFxyXG4gICAgICBhY3Rpb246ICdsaWZ0IHVwJ1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGxpZnREb3duSW1hZ2VyeSgpIHtcclxuICAgIHRoaXMubGlmdHVwID0gZmFsc2U7XHJcbiAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZVxyXG4gICAgdGhpcy5vbnNlbGVjdC5lbWl0KHtcclxuICAgICAgaW5kZXg6IHRoaXMuc2VsZWN0ZWRJbmRleCxcclxuICAgICAgYWN0aW9uOiAnbGlmdCBkb3duJ1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGZ1bGxTY3JlZW4oKSB7XHJcblxyXG4gIH1cclxuICBzaG93TW9yZShjbG9zZUJ1dHRvbikge1xyXG4gICAgaWYgKCF0aGlzLmZvY3VzZWQpIHtcclxuICAgICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcclxuICAgICAgY2xvc2VCdXR0b24uZm9jdXMoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSW5kZXggPCB0aGlzLmdhbGxlcnkubGVuZ3RoIC0gMTtcclxuICB9XHJcbiAga2V5dXAoZXZlbnQ6IGFueSkge1xyXG5cdFx0Y29uc3QgY29kZSA9IGV2ZW50LndoaWNoO1xyXG5cdFx0aWYgKGNvZGUgPT09IDEzKSB7XHJcbiAgICAgIGV2ZW50LnRhcmdldC5jbGljaygpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=