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
        this.onaction = new EventEmitter();
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
     * @return {?}
     */
    previous() {
        this.selectedIndex = this.selectedIndex - 1;
        this.onaction.emit({
            action: "view previous",
            index: this.selectedIndex,
            time: new Date()
        });
    }
    /**
     * @return {?}
     */
    next() {
        this.selectedIndex = this.selectedIndex + 1;
        this.onaction.emit({
            action: "view next",
            index: this.selectedIndex,
            time: new Date()
        });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    videoEvent(event) {
        this.onaction.emit({
            action: event.type,
            index: this.selectedIndex,
            time: new Date(),
            item: {
                autoplay: event.target.autoplay,
                controls: event.target.controls,
                duration: event.target.duration,
                ended: event.target.ended,
                error: event.target.error,
                paused: event.target.paused,
                muted: event.target.muted,
                currentTime: event.target.currentTime,
                volume: event.target.volume
            }
        });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    hoverOver(event) {
        this.onaction.emit({
            action: event.type,
            index: this.selectedIndex,
            time: new Date()
        });
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
                template: "\r\n<div class=\"viewport {{displayType}}\">\r\n    <div *ngFor=\"let row of layList; let i = index\"\r\n        (keyup)=\"keyup($event)\"\r\n        (click)=\"liftUpImagery(i)\"\r\n        class=\"view\"\r\n        [attr.tabindex]=\"liftup ? -1: 0\">\r\n        <span class=\"off-screen\">\r\n            <ng-container \r\n                *ngIf=\"template\"\r\n                [ngTemplateOutlet]=\"template\" \r\n                [ngTemplateOutletContext]=\"{data: gallery[i].data, selected: i+1, total: gallery.length}\"></ng-container>\r\n        </span>\r\n        <img *ngIf=\"gallery[i].type === 'image'\" aria-hidden=\"true\" width=\"100%\" height=\"100%\" [src]=\"gallery[i].src\" />\r\n        <video *ngIf=\"gallery[i].type === 'video'\" width=\"100%\" [attr.src]=\"gallery[i].src\" disabled></video>\r\n        <div class=\"more\">See more...</div>\r\n    </div>\r\n</div>\r\n<div class=\"lift\" *ngIf=\"liftup\">\r\n    <div class=\"left-controls\">\r\n        <a *ngIf=\"selectedIndex>0\"  title=\"View previous\"\r\n            class=\"fa fa-chevron-left\" tabindex=\"0\"\r\n            (keyup)=\"keyup($event)\"\r\n            (click)=\"previous()\"></a>\r\n    </div>\r\n    <div class=\"lifter\">\r\n        <div class=\"lift-view\"\r\n            (mouseover)=\"hoverOver($event)\">\r\n            <img *ngIf=\"gallery[selectedIndex].type === 'image'\"  aria-hidden=\"true\" width=\"100%\" height=\"100%\" [src]=\"gallery[selectedIndex].src\" />\r\n            <video *ngIf=\"gallery[selectedIndex].type === 'video'\" \r\n                width=\"100%\" \r\n                [attr.src]=\"gallery[selectedIndex].src\" \r\n                (play)=\"videoEvent($event)\"\r\n                (pause)=\"videoEvent($event)\"\r\n                (ended)=\"videoEvent($event)\"\r\n                (seeked)=\"videoEvent($event)\"\r\n                (error)=\"videoEvent($event)\"\r\n                (fullscreenchange)=\"videoEvent($event)\"\r\n                controls></video>\r\n        </div>\r\n        <div class=\"lift-info\">\r\n            <ng-container \r\n                *ngIf=\"template\"\r\n                [ngTemplateOutlet]=\"template\" \r\n                [ngTemplateOutletContext]=\"{data: gallery[selectedIndex].data, selected: selectedIndex+1, total: gallery.length}\"></ng-container>\r\n        </div>\r\n    </div>\r\n    <div class=\"right-controls\">\r\n        <a tabindex=\"0\" class=\"close fa fa-close\" title=\"Close viewer\" #closeButton\r\n            (click)=\"liftDownImagery()\" \r\n            (keyup)=\"keyup($event)\"></a>\r\n        <!-- a (click)=\"fullScreen()\" class=\"fa fa-expand\"></a -->\r\n        <a *ngIf=\"showMore(closeButton)\" title=\"View next\"\r\n            class=\"next fa fa-chevron-right\" tabindex=\"0\" \r\n            (keyup)=\"keyup($event)\"\r\n            (click)=\"next()\"></a>\r\n        <a [href]=\"gallery[selectedIndex].src\"  title=\"download\" class=\"download fa fa-download\" download></a>\r\n    </div>\r\n</div>\r\n",
                styles: [":host{box-sizing:border-box;display:table;padding:0;margin:5px}:host .off-screen{display:block;width:1px;height:1px;position:absolute;left:-99999px;top:-99999px}:host .lift{width:100%;height:100%;position:fixed;top:0;left:0;display:flex;flex-direction:row;z-index:99;background-color:rgba(0,0,0,.8)}:host .lift .left-controls{width:30px;height:100vh;color:#fff;background-color:transparent;padding:20% 0}:host .lift .left-controls a{font-size:1.8rem;cursor:pointer;text-align:center;width:100%}:host .lift .left-controls a:hover{color:#ccc}:host .lift .lifter{flex:1;display:flex;flex-direction:row}:host .lift .lifter .lift-view{flex:1;margin:20px}:host .lift .lifter .lift-view img{border:2px solid #fff}:host .lift .lifter .lift-info{width:300px;background-color:#fff;margin:20px 15px 16px;padding:10px;border:2px solid #555}:host .lift .right-controls{width:30px;height:100vh;color:#fff;background-color:transparent;display:flex;flex-direction:column;padding:20% 0}:host .lift .right-controls .close{position:absolute;right:0;top:5px;width:33px}:host .lift .right-controls .fa-expand{position:absolute;right:0;top:44px;width:33px;font-size:1.5rem}:host .lift .right-controls a{font-size:1.8rem;cursor:pointer;text-align:center;width:100%}:host .lift .right-controls a:hover{color:#ccc}:host .lift .right-controls .download{position:absolute;right:0;bottom:30px;font-size:1.5rem;width:33px;color:#fff}:host .viewport{display:-ms-inline-grid;display:inline-grid;grid-gap:0;background-color:#2196f3;padding:0}:host .viewport div{background-color:rgba(255,255,255,.8);text-align:center;padding:0;font-size:30px;position:relative;background-size:cover;background-position:center;cursor:pointer}:host .viewport div:focus,:host .viewport div:hover{-webkit-filter:brightness(70%);-moz-filter:brightness(70%);-o-filter:brightness(70%);-ms-filter:brightness(70%);filter:brightness(70%)}:host .viewport div:focus .more,:host .viewport div:hover .more{display:inline}:host .viewport div .more{display:none;width:100%;background-color:#000;color:#fff;font-size:1.2rem;position:absolute;left:0;bottom:0;padding:5px}:host .viewport div:nth-child(1){-ms-grid-row:1;-ms-grid-column:1;grid-area:tl}:host .viewport div:nth-child(2){-ms-grid-row:1;-ms-grid-column:3;grid-area:bl}:host .viewport div:nth-child(3){-ms-grid-row:1;-ms-grid-row-span:3;-ms-grid-column:3;-ms-grid-column-span:3;grid-area:center}:host .viewport div:nth-child(4){-ms-grid-row:3;-ms-grid-column:3;grid-area:tr}:host .viewport div:nth-child(5){-ms-grid-row:3;-ms-grid-column:7;grid-area:br}:host .viewport.c1{grid-template-areas:'tl'}:host .viewport.c2{-ms-grid-columns:50% 0 50%;grid-template-columns:50% 50%;grid-template-areas:'tl bl'}:host .viewport.c3{-ms-grid-columns:32% 0 auto;grid-template-columns:32% auto;-ms-grid-rows:auto 0 auto;grid-template-areas:'tl center center' 'bl center center'}:host .viewport.c4{-ms-grid-columns:50% 0 50%;grid-template-columns:50% 50%;-ms-grid-rows:auto 0 auto;grid-template-areas:'tl center' 'bl tr'}:host .viewport.c5{-ms-grid-columns:25% 0 auto 0 25%;grid-template-columns:25% auto 25%;-ms-grid-rows:auto 0 auto;grid-template-areas:'tl center center tr' 'bl center center br'}:host .viewport.rc3{-ms-grid-columns:auto 0 30%;grid-template-columns:auto 30%;-ms-grid-rows:auto 0 auto;grid-template-areas:'tl tl bl' 'tl tl center'}:host .viewport.rc4{-ms-grid-columns:30% 0 auto 0 30%;grid-template-columns:30% auto 30%;-ms-grid-rows:auto 0 auto;grid-template-areas:'tl bl tr' 'tl center tr'}@media only screen and (max-width:600px){:host .lift .lifter{flex-direction:column}:host .lift .lifter .lift-info{width:auto;margin:20px;overflow-y:auto}}"]
            }] }
];
GalleryLiftComponent.propDecorators = {
    onselect: [{ type: Output }],
    onaction: [{ type: Output }],
    gallery: [{ type: Input }],
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
    GalleryLiftComponent.prototype.onaction;
    /** @type {?} */
    GalleryLiftComponent.prototype.gallery;
    /** @type {?} */
    GalleryLiftComponent.prototype.template;
    /** @type {?} */
    GalleryLiftComponent.prototype.layout;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1saWZ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZWRlaC9nYWxsZXJ5LWxpZnQvIiwic291cmNlcyI6WyJzcmMvYXBwL2dhbGxlcnktbGlmdC9nYWxsZXJ5LWxpZnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBT3ZCLE1BQU07O3VCQUNNLENBQUMsQ0FBQyxDQUFDOzJCQUNDLElBQUk7NkJBQ0YsQ0FBQztzQkFDUixLQUFLO3VCQUNKLEtBQUs7d0JBRUssSUFBSSxZQUFZLEVBQUU7d0JBQ2xCLElBQUksWUFBWSxFQUFFO3NCQUlwQixpQkFBaUI7Ozs7OztJQUVuQyxXQUFXLENBQUMsT0FBWTtRQUN0QixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNuQixNQUFNLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUEsQ0FBQztnQkFDbEIsS0FBSyxpQkFBaUI7b0JBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7b0JBQUEsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUFBLEtBQUssQ0FBQztnQkFDekUsS0FBSyxlQUFlO29CQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO29CQUFBLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQUEsS0FBSyxDQUFDO2dCQUN6RSxLQUFLLGdCQUFnQjtvQkFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztvQkFBQSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztvQkFBQSxLQUFLLENBQUM7Z0JBQzVFLEtBQUss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dGVudCI6WyJcclxuaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2FsbGVyeS1saWZ0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZ2FsbGVyeS1saWZ0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9nYWxsZXJ5LWxpZnQuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEdhbGxlcnlMaWZ0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBsYXlMaXN0ID0gWzFdO1xyXG4gIGRpc3BsYXlUeXBlID0gJ2MxJztcclxuICBzZWxlY3RlZEluZGV4ID0gMDtcclxuICBsaWZ0dXAgPSBmYWxzZTtcclxuICBmb2N1c2VkID0gZmFsc2U7XHJcbiAgXHJcbiAgQE91dHB1dCgpIG9uc2VsZWN0PSBuZXcgRXZlbnRFbWl0dGVyKClcclxuICBAT3V0cHV0KCkgb25hY3Rpb249IG5ldyBFdmVudEVtaXR0ZXIoKVxyXG5cclxuICBASW5wdXQoKSBnYWxsZXJ5OiBhbnlbXTtcclxuICBASW5wdXQoKSB0ZW1wbGF0ZTogYW55O1xyXG4gIEBJbnB1dCgpIGxheW91dCA9ICdsYXJnZS1vbi1zaW5nbGUnO1xyXG4gIFxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSkge1xyXG4gICAgaWYgKGNoYW5nZXMubGF5b3V0KSB7XHJcbiAgICAgIHN3aXRjaCh0aGlzLmxheW91dCl7XHJcbiAgICAgICAgY2FzZSAnbGFyZ2Utb24tc2luZ2xlJzogdGhpcy5kaXNwbGF5VHlwZSA9ICdjMSc7dGhpcy5sYXlMaXN0ID0gWzFdO2JyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3NwbGl0LW9uLWR1YWwnOiB0aGlzLmRpc3BsYXlUeXBlID0gJ2MyJzt0aGlzLmxheUxpc3QgPSBbMSwyXTticmVhaztcclxuICAgICAgICBjYXNlICdsYXJnZS1vbi1yaWdodCc6IHRoaXMuZGlzcGxheVR5cGUgPSAnYzMnO3RoaXMubGF5TGlzdCA9IFsxLDIsM107YnJlYWs7XHJcbiAgICAgICAgY2FzZSAnc3BsaXQtb24tcXVhZHJ1cGxlJzogdGhpcy5kaXNwbGF5VHlwZSA9ICdjNCc7dGhpcy5sYXlMaXN0ID0gWzEsMiwzLDRdO2JyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2xhcmdlLW9uLW1pZGRsZSc6IHRoaXMuZGlzcGxheVR5cGUgPSAnYzUnO3RoaXMubGF5TGlzdCA9IFsxLDIsMyw0LDVdO2JyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2xhcmdlLW9uLWxlZnQnOiB0aGlzLmRpc3BsYXlUeXBlID0gJ3JjMyc7dGhpcy5sYXlMaXN0ID0gWzEsMiwzXTticmVhaztcclxuICAgICAgICBjYXNlICdsYXJnZS1vbi1zaWRlcyc6IHRoaXMuZGlzcGxheVR5cGUgPSAncmM0Jzt0aGlzLmxheUxpc3QgPSBbMSwyLDMsNF07YnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgbGlmdFVwSW1hZ2VyeShpbmRleDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcclxuICAgIHRoaXMubGlmdHVwID0gdHJ1ZTtcclxuICAgIHRoaXMub25zZWxlY3QuZW1pdCh7XHJcbiAgICAgIGluZGV4OiB0aGlzLnNlbGVjdGVkSW5kZXgsXHJcbiAgICAgIGFjdGlvbjogJ2xpZnQgdXAnXHJcbiAgICB9KTtcclxuICB9XHJcbiAgbGlmdERvd25JbWFnZXJ5KCkge1xyXG4gICAgdGhpcy5saWZ0dXAgPSBmYWxzZTtcclxuICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlXHJcbiAgICB0aGlzLm9uc2VsZWN0LmVtaXQoe1xyXG4gICAgICBpbmRleDogdGhpcy5zZWxlY3RlZEluZGV4LFxyXG4gICAgICBhY3Rpb246ICdsaWZ0IGRvd24nXHJcbiAgICB9KTtcclxuICB9XHJcbiAgZnVsbFNjcmVlbigpIHtcclxuXHJcbiAgfVxyXG4gIHByZXZpb3VzKCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5zZWxlY3RlZEluZGV4IC0gMTtcclxuICAgIHRoaXMub25hY3Rpb24uZW1pdCh7XHJcbiAgICAgIGFjdGlvbjogXCJ2aWV3IHByZXZpb3VzXCIsXHJcbiAgICAgIGluZGV4OiB0aGlzLnNlbGVjdGVkSW5kZXgsXHJcblx0XHRcdHRpbWU6IG5ldyBEYXRlKClcclxuXHRcdH0pO1xyXG4gIH1cclxuICBuZXh0KCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5zZWxlY3RlZEluZGV4ICsgMTtcclxuICAgIHRoaXMub25hY3Rpb24uZW1pdCh7XHJcbiAgICAgIGFjdGlvbjogXCJ2aWV3IG5leHRcIixcclxuICAgICAgaW5kZXg6IHRoaXMuc2VsZWN0ZWRJbmRleCxcclxuXHRcdFx0dGltZTogbmV3IERhdGUoKVxyXG5cdFx0fSk7XHJcbiAgfVxyXG4gIHZpZGVvRXZlbnQoZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5vbmFjdGlvbi5lbWl0KHtcclxuICAgICAgYWN0aW9uOiBldmVudC50eXBlLFxyXG4gICAgICBpbmRleDogdGhpcy5zZWxlY3RlZEluZGV4LFxyXG4gICAgICB0aW1lOiBuZXcgRGF0ZSgpLFxyXG4gICAgICBpdGVtOiB7XHJcbiAgICAgICAgYXV0b3BsYXk6IGV2ZW50LnRhcmdldC5hdXRvcGxheSxcclxuICAgICAgICBjb250cm9sczogZXZlbnQudGFyZ2V0LmNvbnRyb2xzLFxyXG4gICAgICAgIGR1cmF0aW9uOiBldmVudC50YXJnZXQuZHVyYXRpb24sXHJcbiAgICAgICAgZW5kZWQ6IGV2ZW50LnRhcmdldC5lbmRlZCxcclxuICAgICAgICBlcnJvcjogZXZlbnQudGFyZ2V0LmVycm9yLFxyXG4gICAgICAgIHBhdXNlZDogZXZlbnQudGFyZ2V0LnBhdXNlZCxcclxuICAgICAgICBtdXRlZDogZXZlbnQudGFyZ2V0Lm11dGVkLFxyXG4gICAgICAgIGN1cnJlbnRUaW1lOiBldmVudC50YXJnZXQuY3VycmVudFRpbWUsXHJcbiAgICAgICAgdm9sdW1lOiBldmVudC50YXJnZXQudm9sdW1lXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBob3Zlck92ZXIoZXZlbnQ6IGFueSkge1xyXG5cdHRoaXMub25hY3Rpb24uZW1pdCh7XHJcblx0XHRhY3Rpb246IGV2ZW50LnR5cGUsXHJcblx0XHRpbmRleDogdGhpcy5zZWxlY3RlZEluZGV4LFxyXG5cdFx0dGltZTogbmV3IERhdGUoKVxyXG5cdH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIHNob3dNb3JlKGNsb3NlQnV0dG9uKSB7XHJcbiAgICBpZiAoIXRoaXMuZm9jdXNlZCkge1xyXG4gICAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xyXG4gICAgICBjbG9zZUJ1dHRvbi5mb2N1cygpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJbmRleCA8IHRoaXMuZ2FsbGVyeS5sZW5ndGggLSAxO1xyXG4gIH1cclxuICBrZXl1cChldmVudDogYW55KSB7XHJcblx0XHRjb25zdCBjb2RlID0gZXZlbnQud2hpY2g7XHJcblx0XHRpZiAoY29kZSA9PT0gMTMpIHtcclxuICAgICAgZXZlbnQudGFyZ2V0LmNsaWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==