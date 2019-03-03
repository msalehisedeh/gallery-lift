/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var GalleryLiftComponent = /** @class */ (function () {
    function GalleryLiftComponent() {
        var _this = this;
        this.layList = [1];
        this.displayType = 'c1';
        this.selectedIndex = 0;
        this.liftup = false;
        this.focused = false;
        this.expanded = false;
        this.onselect = new EventEmitter();
        this.onaction = new EventEmitter();
        this.sideBySide = true;
        this.liftOnZero = false;
        this.showRemainingCount = false;
        this.showTitleOnHover = false;
        this.showMessageOnHover = true;
        this.maxHeight = 400;
        this.hoverMessage = 'See more...';
        this.layout = 'large-on-single';
        if (navigator.platform.toUpperCase().indexOf('MAC') < 0) {
            document.addEventListener("webkitfullscreenchange", function (event) {
                if (!window.screenTop && !window.screenY) {
                    _this.fullScreen();
                }
            });
            document.addEventListener("mozfullscreenchange", function (event) {
                /** @type {?} */
                var win = window;
                /** @type {?} */
                var isFullScreen = win.fullScreen ||
                    (win.innerWidth == screen.width && win.innerHeight == screen.height);
                if (!isFullScreen) {
                    _this.fullScreen();
                }
            });
            document.addEventListener("MSFullscreenChange", function (event) {
                /** @type {?} */
                var win = window;
                /** @type {?} */
                var isFullScreen = win.fullScreen ||
                    (win.innerWidth == screen.width && win.innerHeight == screen.height);
                if (!isFullScreen) {
                    _this.fullScreen();
                }
            });
        }
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
    GalleryLiftComponent.prototype.maxHeightOf = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var max = this.maxHeight;
        switch (this.layout) {
            case 'large-on-single': break;
            case 'split-on-dual': break;
            case 'large-on-right':
                max = index < 2 ? (this.maxHeight / 2) : max;
                break;
            case 'split-on-quadruple':
                max = this.maxHeight / 2;
                break;
            case 'large-on-middle':
                max = index === 2 ? max : (this.maxHeight / 2);
                break;
            case 'large-on-left':
                max = index === 0 ? max : (this.maxHeight / 2);
                break;
            case 'large-on-sides':
                max = (index === 0 || index === 3) ? max : (this.maxHeight / 2);
                break;
        }
        return max + 'px';
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
        this.selectedIndex = this.liftOnZero ? 0 : index;
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
        if (this.expanded) {
            this.fullScreen();
        }
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
        /** @type {?} */
        var doc = document;
        this.expanded = !this.expanded;
        if (this.expanded) {
            /** @type {?} */
            var element = doc.documentElement;
            if (element.requestFullscreen) {
                element.requestFullscreen();
            }
            else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            }
            else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen();
            }
            else if (element.msRequestFullscreen) {
                element.msRequestFullscreen();
            }
        }
        else {
            if (doc.exitFullscreen) {
                doc.exitFullscreen();
            }
            else if (doc.mozCancelFullScreen) {
                doc.mozCancelFullScreen();
            }
            else if (doc.webkitExitFullscreen) {
                doc.webkitExitFullscreen();
            }
        }
    };
    /**
     * @return {?}
     */
    GalleryLiftComponent.prototype.previous = /**
     * @return {?}
     */
    function () {
        this.selectedIndex = this.selectedIndex - 1;
        this.onaction.emit({
            action: "view previous",
            index: this.selectedIndex,
            time: new Date()
        });
    };
    /**
     * @return {?}
     */
    GalleryLiftComponent.prototype.next = /**
     * @return {?}
     */
    function () {
        this.selectedIndex = this.selectedIndex + 1;
        this.onaction.emit({
            action: "view next",
            index: this.selectedIndex,
            time: new Date()
        });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    GalleryLiftComponent.prototype.videoEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
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
    };
    /**
     * @param {?} event
     * @return {?}
     */
    GalleryLiftComponent.prototype.hoverOver = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onaction.emit({
            action: event.type,
            index: this.selectedIndex,
            time: new Date()
        });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    GalleryLiftComponent.prototype.hoverOut = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onaction.emit({
            action: event.type,
            index: this.selectedIndex,
            time: new Date()
        });
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
                    template: "\r\n<div class=\"viewport {{displayType}}\">\r\n    <div *ngFor=\"let row of layList; let i = index\"\r\n        (keyup)=\"keyup($event)\"\r\n        (click)=\"liftUpImagery(i)\"\r\n        class=\"view\"\r\n        [style.max-height]='maxHeightOf(i)'\r\n        [attr.tabindex]=\"liftup ? -1: 0\">\r\n        <span class=\"off-screen\">\r\n            <ng-container \r\n                *ngIf=\"template\"\r\n                [ngTemplateOutlet]=\"template\" \r\n                [ngTemplateOutletContext]=\"{data: gallery[i].data, selected: i+1, total: gallery.length}\"></ng-container>\r\n        </span>\r\n        <div *ngIf=\"showTitleOnHover\" class=\"title\">{{gallery[i].data.title}}</div>\r\n        <img *ngIf=\"gallery[i].type === 'image'\" aria-hidden=\"true\" width=\"100%\" height=\"100%\" [src]=\"gallery[i].src\" />\r\n        <video *ngIf=\"gallery[i].type === 'video'\" width=\"100%\" [attr.src]=\"gallery[i].src\" disabled></video>\r\n        <div *ngIf=\"showRemainingCount && i === (layList.length - 1)\" class=\"counter\">\r\n            + {{gallery.length - i - 1}}\r\n            <span class=\"off-screen\">more entries</span>\r\n        </div>\r\n        <div *ngIf=\"showMessageOnHover\" class=\"more\">\r\n            {{hoverMessage}}\r\n            <span aria-hidden=\"true\" class=\"enlarge fa fa-clone\" *ngIf=\"layout === 'large-on-single'\"></span>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"lift\" [class.piled]=\"!sideBySide\" *ngIf=\"liftup\">\r\n    <div class=\"left-controls\">\r\n        <a *ngIf=\"selectedIndex>0\"  title=\"View previous\"\r\n            class=\"fa fa-chevron-left\" tabindex=\"0\"\r\n            (keyup)=\"keyup($event)\"\r\n            (click)=\"previous()\"></a>\r\n    </div>\r\n    <div class=\"lifter\" \r\n        [class.vertical]=\"!sideBySide\"\r\n        [class.fullscreen]=\"expanded\">\r\n        <div class=\"lift-view\"\r\n            (mouseover)=\"hoverOver($event)\">\r\n            <img *ngIf=\"gallery[selectedIndex].type === 'image'\"  aria-hidden=\"true\" width=\"100%\" height=\"100%\" [src]=\"gallery[selectedIndex].src\" />\r\n            <video *ngIf=\"gallery[selectedIndex].type === 'video'\" \r\n                width=\"100%\" \r\n                [attr.src]=\"gallery[selectedIndex].src\" \r\n                (play)=\"videoEvent($event)\"\r\n                (pause)=\"videoEvent($event)\"\r\n                (ended)=\"videoEvent($event)\"\r\n                (seeked)=\"videoEvent($event)\"\r\n                (error)=\"videoEvent($event)\"\r\n                (fullscreenchange)=\"videoEvent($event)\"\r\n                controls></video>\r\n        </div>\r\n        <div class=\"lift-info\">\r\n            <ng-container \r\n                *ngIf=\"template\"\r\n                [ngTemplateOutlet]=\"template\" \r\n                [ngTemplateOutletContext]=\"{data: gallery[selectedIndex].data, selected: selectedIndex+1, total: gallery.length}\"></ng-container>\r\n        </div>\r\n    </div>\r\n    <div class=\"right-controls\">\r\n        <a tabindex=\"0\"  #closeButton\r\n            class=\"close fa fa-close\" \r\n            title=\"Close viewer\"\r\n            (click)=\"liftDownImagery()\" \r\n            (keyup)=\"keyup($event)\"></a>\r\n        <a (click)=\"fullScreen()\" \r\n            class=\"fa\" \r\n            [attr.title]=\"expanded ? 'Normal screen view' : 'Full screen view'\"\r\n            [class.fa-expand]=\"!expanded\" \r\n            [class.fa-compress]=\"expanded\"></a>\r\n        <a (click)=\"sideBySide = !sideBySide\" \r\n            class=\"fa\" \r\n            [attr.title]=\"sideBySide ? 'Align Vertical' : 'Align Horizontal'\"\r\n            [class.fa-columns]=\"!sideBySide\" \r\n            [class.fa-bars]=\"sideBySide\"></a>\r\n        <a *ngIf=\"showMore(closeButton)\" \r\n            title=\"View next\"\r\n            class=\"next fa fa-chevron-right\" tabindex=\"0\" \r\n            (keyup)=\"keyup($event)\"\r\n            (click)=\"next()\"></a>\r\n        <a [href]=\"gallery[selectedIndex].src\"  \r\n            title=\"download\" \r\n            class=\"download fa fa-download\" \r\n            download></a>\r\n    </div>\r\n</div>\r\n",
                    styles: [":host{box-sizing:border-box;display:flex;padding:0;margin:5px}:host .off-screen{display:block;width:1px;height:1px;position:absolute;left:-99999px;top:-99999px}:host .lift{width:100%;height:100%;position:fixed;top:0;left:0;display:flex;flex-direction:row;z-index:99;background-color:rgba(0,0,0,.95)}:host .lift .left-controls{width:30px;height:100vh;color:#fff;background-color:transparent;padding:20% 0;box-sizing:border-box}:host .lift .left-controls a{font-size:1.8rem;cursor:pointer;text-align:center;width:100%}:host .lift .left-controls a:hover{color:#ccc}:host .lift .lifter{flex:1;display:flex;flex-direction:row}:host .lift .lifter .lift-view{flex:1;margin:20px}:host .lift .lifter .lift-view img{border:2px solid #fff}:host .lift .lifter .lift-info{width:300px;background-color:#fff;margin:20px 15px 16px;padding:10px;border:2px solid #555}:host .lift .lifter.fullscreen .lift-info,:host .lift .lifter.fullscreen .lift-view{margin:0}:host .lift .lifter.vertical{flex-direction:column;display:block}:host .lift .lifter.vertical .lift-info{width:auto;height:200px;margin:20px;overflow-y:auto}:host .lift .right-controls{width:30px;height:100vh;color:#fff;background-color:transparent;display:flex;flex-direction:column;padding:20% 0;box-sizing:border-box}:host .lift .right-controls .close{position:absolute;right:0;top:5px;width:33px}:host .lift .right-controls .next{top:50%;width:22px}:host .lift .right-controls .fa-compress,:host .lift .right-controls .fa-expand{position:absolute;right:0;top:44px;width:33px;font-size:1.5rem}:host .lift .right-controls .fa-bars,:host .lift .right-controls .fa-columns{position:absolute;right:0;top:77px;width:33px;font-size:1.5rem}:host .lift .right-controls a{font-size:1.8rem;cursor:pointer;text-align:center;width:100%;position:absolute}:host .lift .right-controls a:hover{color:#ccc}:host .lift .right-controls .download{position:absolute;right:0;bottom:30px;font-size:1.5rem;width:33px;color:#fff}:host .lift.piled{position:absolute;height:inherit}:host .lift.piled .lifter.vertical .lift-info{margin:20px}:host .lift.piled .lifter.fullscreen .lift-info,:host .lift.piled .lifter.fullscreen .lift-view{margin:20;height:auto}:host .viewport{display:-ms-inline-grid;display:inline-grid;grid-gap:0;background-color:#000;padding:0}:host .viewport .view{text-align:center;padding:0;position:relative;box-sizing:border-box;display:flex;overflow:hidden;cursor:pointer}:host .viewport .view img,:host .viewport .view video{-o-object-fit:cover;object-fit:cover}:host .viewport .view:focus,:host .viewport .view:hover{-webkit-filter:brightness(70%);-moz-filter:brightness(70%);-o-filter:brightness(70%);-ms-filter:brightness(70%);filter:brightness(70%)}:host .viewport .view:focus .more,:host .viewport .view:focus .title,:host .viewport .view:hover .more,:host .viewport .view:hover .title{display:inline}:host .viewport .view .counter{width:100%;height:100%;background-color:rgba(100,100,100,.5);color:#fff;position:absolute;top:0;overflow:hidden;box-sizing:border-box}:host .viewport .view .title{display:none;width:100%;background-color:#000;color:#fff;font-size:1rem;position:absolute;left:0;top:0;padding:5px;overflow:hidden}:host .viewport .view .more{display:none;width:100%;background-color:#000;color:#fff;font-size:1.2rem;position:absolute;left:0;bottom:0;padding:5px}:host .viewport .view .more .enlarge{position:absolute;right:20px}:host .viewport .view:nth-child(1){-ms-grid-row:1;-ms-grid-column:1;grid-area:tl}:host .viewport .view:nth-child(2){-ms-grid-row:1;-ms-grid-column:3;grid-area:bl}:host .viewport .view:nth-child(3){-ms-grid-row:1;-ms-grid-row-span:3;-ms-grid-column:3;-ms-grid-column-span:3;grid-area:center}:host .viewport .view:nth-child(4){-ms-grid-row:3;-ms-grid-column:3;grid-area:tr}:host .viewport .view:nth-child(5){-ms-grid-row:3;-ms-grid-column:7;grid-area:br}:host .viewport.c1{grid-template-areas:'tl'}:host .viewport.c1 .counter{font-size:4rem;padding:25% 0}:host .viewport.c2{-ms-grid-columns:50% 0 50%;grid-template-columns:50% 50%;grid-template-areas:'tl bl'}:host .viewport.c2 .counter{font-size:4rem;padding:25% 0}:host .viewport.c3{-ms-grid-columns:32% 0 auto;grid-template-columns:32% auto;-ms-grid-rows:auto 0 auto;grid-template-areas:'tl center center' 'bl center center'}:host .viewport.c3 .counter{font-size:4rem;padding:25% 0}:host .viewport.c4{-ms-grid-columns:50% 0 50%;grid-template-columns:50% 50%;-ms-grid-rows:auto 0 auto;grid-template-areas:'tl center' 'bl tr'}:host .viewport.c4 .counter{font-size:4rem;padding:25% 0}:host .viewport.c5{-ms-grid-columns:25% 0 auto 0 25%;grid-template-columns:25% auto 25%;-ms-grid-rows:auto 0 auto;grid-template-areas:'tl center center tr' 'bl center center br'}:host .viewport.c5 .counter{font-size:2.5rem;padding:25% 0}:host .viewport.rc3{-ms-grid-columns:auto 0 30%;grid-template-columns:auto 30%;-ms-grid-rows:auto 0 auto;grid-template-areas:'tl tl bl' 'tl tl center'}:host .viewport.rc3 .counter{font-size:2.5rem;padding:40% 0}:host .viewport.rc4{-ms-grid-columns:30% 0 auto 0 30%;grid-template-columns:30% auto 30%;-ms-grid-rows:auto 0 auto;grid-template-areas:'tl bl tr' 'tl center tr'}:host .viewport.rc4 .counter{font-size:2.5rem;padding:80% 0}@media only screen and (max-width:600px){:host .lift .lifter{flex-direction:column}:host .lift .lifter .lift-info{width:auto;margin:20px;overflow-y:auto}}"]
                }] }
    ];
    /** @nocollapse */
    GalleryLiftComponent.ctorParameters = function () { return []; };
    GalleryLiftComponent.propDecorators = {
        onselect: [{ type: Output }],
        onaction: [{ type: Output }],
        sideBySide: [{ type: Input }],
        liftOnZero: [{ type: Input }],
        showRemainingCount: [{ type: Input }],
        showTitleOnHover: [{ type: Input }],
        showMessageOnHover: [{ type: Input }],
        gallery: [{ type: Input }],
        template: [{ type: Input }],
        maxHeight: [{ type: Input }],
        hoverMessage: [{ type: Input }],
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
    GalleryLiftComponent.prototype.expanded;
    /** @type {?} */
    GalleryLiftComponent.prototype.onselect;
    /** @type {?} */
    GalleryLiftComponent.prototype.onaction;
    /** @type {?} */
    GalleryLiftComponent.prototype.sideBySide;
    /** @type {?} */
    GalleryLiftComponent.prototype.liftOnZero;
    /** @type {?} */
    GalleryLiftComponent.prototype.showRemainingCount;
    /** @type {?} */
    GalleryLiftComponent.prototype.showTitleOnHover;
    /** @type {?} */
    GalleryLiftComponent.prototype.showMessageOnHover;
    /** @type {?} */
    GalleryLiftComponent.prototype.gallery;
    /** @type {?} */
    GalleryLiftComponent.prototype.template;
    /** @type {?} */
    GalleryLiftComponent.prototype.maxHeight;
    /** @type {?} */
    GalleryLiftComponent.prototype.hoverMessage;
    /** @type {?} */
    GalleryLiftComponent.prototype.layout;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1saWZ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZWRlaC9nYWxsZXJ5LWxpZnQvIiwic291cmNlcyI6WyJzcmMvYXBwL2dhbGxlcnktbGlmdC9nYWxsZXJ5LWxpZnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDOztJQTZCckI7UUFBQSxpQkF3QkM7dUJBN0NTLENBQUMsQ0FBQyxDQUFDOzJCQUNDLElBQUk7NkJBQ0YsQ0FBQztzQkFDUixLQUFLO3VCQUNKLEtBQUs7d0JBQ0osS0FBSzt3QkFFSSxJQUFJLFlBQVksRUFBRTt3QkFDbEIsSUFBSSxZQUFZLEVBQUU7MEJBRWhCLElBQUk7MEJBQ0osS0FBSztrQ0FDRyxLQUFLO2dDQUNQLEtBQUs7a0NBQ0gsSUFBSTt5QkFHYixHQUFHOzRCQUNBLGFBQWE7c0JBQ25CLGlCQUFpQjtRQUdqQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyx3QkFBd0IsRUFBRSxVQUFDLEtBQVk7Z0JBQy9ELEVBQUUsQ0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUN4QyxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7aUJBQ25CO2FBQ0YsQ0FBQyxDQUFDO1lBQ0gsUUFBUSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixFQUFFLFVBQUMsS0FBWTs7Z0JBQzVELElBQU0sR0FBRyxHQUFRLE1BQU0sQ0FBQzs7Z0JBQ3hCLElBQU0sWUFBWSxHQUFHLEdBQUcsQ0FBQyxVQUFVO29CQUNmLENBQUMsR0FB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UTs7OztJQUFSLFVBQVMsV0FBVztRQUNsQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNyQjtRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztLQUNyRDs7Ozs7SUFDRCxvQ0FBSzs7OztJQUFMLFVBQU0sS0FBVTs7UUFDaEIsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN6QixFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNkLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDdEI7S0FDRjs7Z0JBOUxGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsNG1JQUE0Qzs7aUJBRTdDOzs7OzsyQkFTRSxNQUFNOzJCQUNOLE1BQU07NkJBRU4sS0FBSzs2QkFDTCxLQUFLO3FDQUNMLEtBQUs7bUNBQ0wsS0FBSztxQ0FDTCxLQUFLOzBCQUNMLEtBQUs7MkJBQ0wsS0FBSzs0QkFDTCxLQUFLOytCQUNMLEtBQUs7eUJBQ0wsS0FBSzs7K0JBbENSOztTQWNhLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkNoYW5nZXMsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlclxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnYWxsZXJ5LWxpZnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nYWxsZXJ5LWxpZnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2dhbGxlcnktbGlmdC5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2FsbGVyeUxpZnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIGxheUxpc3QgPSBbMV07XHJcbiAgZGlzcGxheVR5cGUgPSAnYzEnO1xyXG4gIHNlbGVjdGVkSW5kZXggPSAwO1xyXG4gIGxpZnR1cCA9IGZhbHNlO1xyXG4gIGZvY3VzZWQgPSBmYWxzZTtcclxuICBleHBhbmRlZCA9IGZhbHNlO1xyXG4gIFxyXG4gIEBPdXRwdXQoKSBvbnNlbGVjdD0gbmV3IEV2ZW50RW1pdHRlcigpXHJcbiAgQE91dHB1dCgpIG9uYWN0aW9uPSBuZXcgRXZlbnRFbWl0dGVyKClcclxuXHJcbiAgQElucHV0KCkgc2lkZUJ5U2lkZSA9IHRydWU7XHJcbiAgQElucHV0KCkgbGlmdE9uWmVybyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNob3dSZW1haW5pbmdDb3VudCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNob3dUaXRsZU9uSG92ZXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBzaG93TWVzc2FnZU9uSG92ZXIgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGdhbGxlcnk6IGFueVtdO1xyXG4gIEBJbnB1dCgpIHRlbXBsYXRlOiBhbnk7XHJcbiAgQElucHV0KCkgbWF4SGVpZ2h0ID0gNDAwO1xyXG4gIEBJbnB1dCgpIGhvdmVyTWVzc2FnZSA9ICdTZWUgbW9yZS4uLic7XHJcbiAgQElucHV0KCkgbGF5b3V0ID0gJ2xhcmdlLW9uLXNpbmdsZSc7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBpZiAobmF2aWdhdG9yLnBsYXRmb3JtLnRvVXBwZXJDYXNlKCkuaW5kZXhPZignTUFDJyk8MCkge1xyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwid2Via2l0ZnVsbHNjcmVlbmNoYW5nZVwiLCAoZXZlbnQ6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYoIXdpbmRvdy5zY3JlZW5Ub3AgJiYgIXdpbmRvdy5zY3JlZW5ZKSB7XHJcbiAgICAgICAgICB0aGlzLmZ1bGxTY3JlZW4oKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW96ZnVsbHNjcmVlbmNoYW5nZVwiLCAoZXZlbnQ6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgd2luOiBhbnkgPSB3aW5kb3c7XHJcbiAgICAgICAgY29uc3QgaXNGdWxsU2NyZWVuID0gd2luLmZ1bGxTY3JlZW4gfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh3aW4uaW5uZXJXaWR0aCA9PSBzY3JlZW4ud2lkdGggJiYgd2luLmlubmVySGVpZ2h0ID09IHNjcmVlbi5oZWlnaHQpXHJcbiAgICAgICAgaWYoIWlzRnVsbFNjcmVlbikge1xyXG4gICAgICAgICAgdGhpcy5mdWxsU2NyZWVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIk1TRnVsbHNjcmVlbkNoYW5nZVwiLCAoZXZlbnQ6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgd2luOiBhbnkgPSB3aW5kb3c7XHJcbiAgICAgICAgY29uc3QgaXNGdWxsU2NyZWVuID0gd2luLmZ1bGxTY3JlZW4gfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh3aW4uaW5uZXJXaWR0aCA9PSBzY3JlZW4ud2lkdGggJiYgd2luLmlubmVySGVpZ2h0ID09IHNjcmVlbi5oZWlnaHQpXHJcbiAgICAgICAgaWYoIWlzRnVsbFNjcmVlbikge1xyXG4gICAgICAgICAgdGhpcy5mdWxsU2NyZWVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogYW55KSB7XHJcbiAgICBpZiAoY2hhbmdlcy5sYXlvdXQpIHtcclxuICAgICAgc3dpdGNoKHRoaXMubGF5b3V0KSB7XHJcbiAgICAgICAgY2FzZSAnbGFyZ2Utb24tc2luZ2xlJzogdGhpcy5kaXNwbGF5VHlwZSA9ICdjMSc7dGhpcy5sYXlMaXN0ID0gWzFdOyBicmVhaztcclxuICAgICAgICBjYXNlICdzcGxpdC1vbi1kdWFsJzogdGhpcy5kaXNwbGF5VHlwZSA9ICdjMic7dGhpcy5sYXlMaXN0ID0gWzEsMl07IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2xhcmdlLW9uLXJpZ2h0JzogdGhpcy5kaXNwbGF5VHlwZSA9ICdjMyc7dGhpcy5sYXlMaXN0ID0gWzEsMiwzXTsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnc3BsaXQtb24tcXVhZHJ1cGxlJzogdGhpcy5kaXNwbGF5VHlwZSA9ICdjNCc7dGhpcy5sYXlMaXN0ID0gWzEsMiwzLDRdOyBicmVhaztcclxuICAgICAgICBjYXNlICdsYXJnZS1vbi1taWRkbGUnOiB0aGlzLmRpc3BsYXlUeXBlID0gJ2M1Jzt0aGlzLmxheUxpc3QgPSBbMSwyLDMsNCw1XTsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbGFyZ2Utb24tbGVmdCc6IHRoaXMuZGlzcGxheVR5cGUgPSAncmMzJzt0aGlzLmxheUxpc3QgPSBbMSwyLDNdOyBicmVhaztcclxuICAgICAgICBjYXNlICdsYXJnZS1vbi1zaWRlcyc6IHRoaXMuZGlzcGxheVR5cGUgPSAncmM0Jzt0aGlzLmxheUxpc3QgPSBbMSwyLDMsNF07IGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIG1heEhlaWdodE9mKGluZGV4OiBudW1iZXIpIHtcclxuICAgIGxldCBtYXggPSB0aGlzLm1heEhlaWdodDtcclxuICAgIHN3aXRjaCh0aGlzLmxheW91dCkge1xyXG4gICAgICBjYXNlICdsYXJnZS1vbi1zaW5nbGUnOiBicmVhaztcclxuICAgICAgY2FzZSAnc3BsaXQtb24tZHVhbCc6IGJyZWFrO1xyXG4gICAgICBjYXNlICdsYXJnZS1vbi1yaWdodCc6IFxyXG4gICAgICAgIG1heCA9IGluZGV4IDwgMiA/ICh0aGlzLm1heEhlaWdodCAvIDIpOiBtYXg7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3NwbGl0LW9uLXF1YWRydXBsZSc6IG1heCA9IHRoaXMubWF4SGVpZ2h0IC8gMjsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2xhcmdlLW9uLW1pZGRsZSc6XHJcbiAgICAgICAgbWF4ID0gaW5kZXggPT09IDIgPyBtYXggOiAodGhpcy5tYXhIZWlnaHQgLyAyKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnbGFyZ2Utb24tbGVmdCc6IFxyXG4gICAgICAgIG1heCA9IGluZGV4ID09PSAwID8gbWF4IDogKHRoaXMubWF4SGVpZ2h0IC8gMik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2xhcmdlLW9uLXNpZGVzJzogXHJcbiAgICAgICAgbWF4ID0gKGluZGV4ID09PSAwIHx8IGluZGV4ID09PSAzKSA/IG1heCA6ICh0aGlzLm1heEhlaWdodCAvIDIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1heCArICdweCc7XHJcbiAgfVxyXG4gIGxpZnRVcEltYWdlcnkoaW5kZXg6IG51bWJlcikge1xyXG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5saWZ0T25aZXJvID8gMCA6IGluZGV4O1xyXG4gICAgdGhpcy5saWZ0dXAgPSB0cnVlO1xyXG4gICAgdGhpcy5vbnNlbGVjdC5lbWl0KHtcclxuICAgICAgaW5kZXg6IHRoaXMuc2VsZWN0ZWRJbmRleCxcclxuICAgICAgYWN0aW9uOiAnbGlmdCB1cCdcclxuICAgIH0pO1xyXG4gIH1cclxuICBsaWZ0RG93bkltYWdlcnkoKSB7XHJcbiAgICBpZiAodGhpcy5leHBhbmRlZCkge1xyXG4gICAgICB0aGlzLmZ1bGxTY3JlZW4oKTtcclxuICAgIH1cclxuICAgIHRoaXMubGlmdHVwID0gZmFsc2U7XHJcbiAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZVxyXG4gICAgdGhpcy5vbnNlbGVjdC5lbWl0KHtcclxuICAgICAgaW5kZXg6IHRoaXMuc2VsZWN0ZWRJbmRleCxcclxuICAgICAgYWN0aW9uOiAnbGlmdCBkb3duJ1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGZ1bGxTY3JlZW4oKSB7XHJcbiAgICBjb25zdCBkb2M6IGFueSA9IGRvY3VtZW50O1xyXG4gICAgdGhpcy5leHBhbmRlZCA9ICF0aGlzLmV4cGFuZGVkO1xyXG4gICAgaWYgKHRoaXMuZXhwYW5kZWQpIHtcclxuICAgICAgY29uc3QgZWxlbWVudDogYW55ID0gZG9jLmRvY3VtZW50RWxlbWVudDtcclxuICAgICAgaWYoZWxlbWVudC5yZXF1ZXN0RnVsbHNjcmVlbikge1xyXG4gICAgICAgIGVsZW1lbnQucmVxdWVzdEZ1bGxzY3JlZW4oKTtcclxuICAgICAgfSBlbHNlIGlmKGVsZW1lbnQubW96UmVxdWVzdEZ1bGxTY3JlZW4pIHtcclxuICAgICAgICBlbGVtZW50Lm1velJlcXVlc3RGdWxsU2NyZWVuKCk7XHJcbiAgICAgIH0gZWxzZSBpZihlbGVtZW50LndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKSB7XHJcbiAgICAgICAgZWxlbWVudC53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpO1xyXG4gICAgICB9IGVsc2UgaWYoZWxlbWVudC5tc1JlcXVlc3RGdWxsc2NyZWVuKSB7XHJcbiAgICAgICAgZWxlbWVudC5tc1JlcXVlc3RGdWxsc2NyZWVuKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmKGRvYy5leGl0RnVsbHNjcmVlbikge1xyXG4gICAgICAgIGRvYy5leGl0RnVsbHNjcmVlbigpO1xyXG4gICAgICB9IGVsc2UgaWYoZG9jLm1vekNhbmNlbEZ1bGxTY3JlZW4pIHtcclxuICAgICAgICBkb2MubW96Q2FuY2VsRnVsbFNjcmVlbigpO1xyXG4gICAgICB9IGVsc2UgaWYoZG9jLndlYmtpdEV4aXRGdWxsc2NyZWVuKSB7XHJcbiAgICAgICAgZG9jLndlYmtpdEV4aXRGdWxsc2NyZWVuKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcHJldmlvdXMoKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB0aGlzLnNlbGVjdGVkSW5kZXggLSAxO1xyXG4gICAgdGhpcy5vbmFjdGlvbi5lbWl0KHtcclxuICAgICAgYWN0aW9uOiBcInZpZXcgcHJldmlvdXNcIixcclxuICAgICAgaW5kZXg6IHRoaXMuc2VsZWN0ZWRJbmRleCxcclxuXHRcdFx0dGltZTogbmV3IERhdGUoKVxyXG5cdFx0fSk7XHJcbiAgfVxyXG4gIG5leHQoKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB0aGlzLnNlbGVjdGVkSW5kZXggKyAxO1xyXG4gICAgdGhpcy5vbmFjdGlvbi5lbWl0KHtcclxuICAgICAgYWN0aW9uOiBcInZpZXcgbmV4dFwiLFxyXG4gICAgICBpbmRleDogdGhpcy5zZWxlY3RlZEluZGV4LFxyXG5cdFx0XHR0aW1lOiBuZXcgRGF0ZSgpXHJcblx0XHR9KTtcclxuICB9XHJcbiAgdmlkZW9FdmVudChldmVudDogYW55KSB7XHJcbiAgICB0aGlzLm9uYWN0aW9uLmVtaXQoe1xyXG4gICAgICBhY3Rpb246IGV2ZW50LnR5cGUsXHJcbiAgICAgIGluZGV4OiB0aGlzLnNlbGVjdGVkSW5kZXgsXHJcbiAgICAgIHRpbWU6IG5ldyBEYXRlKCksXHJcbiAgICAgIGl0ZW06IHtcclxuICAgICAgICBhdXRvcGxheTogZXZlbnQudGFyZ2V0LmF1dG9wbGF5LFxyXG4gICAgICAgIGNvbnRyb2xzOiBldmVudC50YXJnZXQuY29udHJvbHMsXHJcbiAgICAgICAgZHVyYXRpb246IGV2ZW50LnRhcmdldC5kdXJhdGlvbixcclxuICAgICAgICBlbmRlZDogZXZlbnQudGFyZ2V0LmVuZGVkLFxyXG4gICAgICAgIGVycm9yOiBldmVudC50YXJnZXQuZXJyb3IsXHJcbiAgICAgICAgcGF1c2VkOiBldmVudC50YXJnZXQucGF1c2VkLFxyXG4gICAgICAgIG11dGVkOiBldmVudC50YXJnZXQubXV0ZWQsXHJcbiAgICAgICAgY3VycmVudFRpbWU6IGV2ZW50LnRhcmdldC5jdXJyZW50VGltZSxcclxuICAgICAgICB2b2x1bWU6IGV2ZW50LnRhcmdldC52b2x1bWVcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGhvdmVyT3ZlcihldmVudDogYW55KSB7XHJcblx0XHR0aGlzLm9uYWN0aW9uLmVtaXQoe1xyXG4gICAgICBhY3Rpb246IGV2ZW50LnR5cGUsXHJcbiAgICAgIGluZGV4OiB0aGlzLnNlbGVjdGVkSW5kZXgsXHJcblx0XHRcdHRpbWU6IG5ldyBEYXRlKClcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRob3Zlck91dChldmVudDogYW55KSB7XHJcbiAgICB0aGlzLm9uYWN0aW9uLmVtaXQoe1xyXG4gICAgICBhY3Rpb246IGV2ZW50LnR5cGUsXHJcbiAgICAgIGluZGV4OiB0aGlzLnNlbGVjdGVkSW5kZXgsXHJcbiAgICAgIHRpbWU6IG5ldyBEYXRlKClcclxuICAgIH0pO1xyXG5cdH1cclxuXHJcbiAgc2hvd01vcmUoY2xvc2VCdXR0b24pIHtcclxuICAgIGlmICghdGhpcy5mb2N1c2VkKSB7XHJcbiAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XHJcbiAgICAgIGNsb3NlQnV0dG9uLmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEluZGV4IDwgdGhpcy5nYWxsZXJ5Lmxlbmd0aCAtIDE7XHJcbiAgfVxyXG4gIGtleXVwKGV2ZW50OiBhbnkpIHtcclxuXHRcdGNvbnN0IGNvZGUgPSBldmVudC53aGljaDtcclxuXHRcdGlmIChjb2RlID09PSAxMykge1xyXG4gICAgICBldmVudC50YXJnZXQuY2xpY2soKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19