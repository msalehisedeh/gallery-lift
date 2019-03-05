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
        this.magnified = false;
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
        this.magnifyImageEnabled = false;
        this.maxHeight = 400;
        this.hoverMessage = 'See more...';
        this.layout = 'large-on-single';
        if (navigator.platform.toUpperCase().indexOf('MAC') < 0) {
            document.addEventListener("webkitfullscreenchange", (event) => {
                if (!window.screenTop && !window.screenY) {
                    this.fullScreen();
                }
            });
            document.addEventListener("mozfullscreenchange", (event) => {
                /** @type {?} */
                const win = window;
                /** @type {?} */
                const isFullScreen = win.fullScreen ||
                    (win.innerWidth == screen.width && win.innerHeight == screen.height);
                if (!isFullScreen) {
                    this.fullScreen();
                }
            });
            document.addEventListener("MSFullscreenChange", (event) => {
                /** @type {?} */
                const win = window;
                /** @type {?} */
                const isFullScreen = win.fullScreen ||
                    (win.innerWidth == screen.width && win.innerHeight == screen.height);
                if (!isFullScreen) {
                    this.fullScreen();
                }
            });
        }
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
    maxHeightOf(index) {
        /** @type {?} */
        let max = this.maxHeight;
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
    }
    /**
     * @param {?} index
     * @return {?}
     */
    liftUpImagery(index) {
        this.selectedIndex = this.liftOnZero ? 0 : index;
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
        if (this.expanded) {
            this.fullScreen();
        }
        this.liftup = false;
        this.focused = false;
        this.onselect.emit({
            index: this.selectedIndex,
            action: 'lift down'
        });
    }
    /**
     * @param {?} liftView
     * @return {?}
     */
    magnify(liftView) {
        this.magnified = !this.magnified;
        if (this.magnified) {
            liftView.style.width = liftView.clientWidth + "px";
            liftView.style.height = liftView.clientHeight + "px";
            liftView.children[0].style.width = "300%";
            liftView.children[0].style.height = "300%";
        }
        else {
            liftView.children[0].style.width = "100%";
            liftView.children[0].style.height = "100%";
            liftView.children[0].style.top = "0px";
            liftView.children[0].style.left = "0px";
        }
    }
    /**
     * @return {?}
     */
    fullScreen() {
        /** @type {?} */
        const doc = document;
        this.expanded = !this.expanded;
        if (this.expanded) {
            /** @type {?} */
            const element = doc.documentElement;
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
    touchHover(event) {
        this.onaction.emit({
            action: event.type,
            index: this.selectedIndex,
            time: new Date()
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
     * @param {?} event
     * @return {?}
     */
    hoverOut(event) {
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
                template: "\r\n<div class=\"viewport {{displayType}}\">\r\n    <div *ngFor=\"let row of layList; let i = index\"\r\n        (keyup)=\"keyup($event)\"\r\n        (click)=\"liftUpImagery(i)\"\r\n        class=\"view\"\r\n        [style.max-height]='maxHeightOf(i)'\r\n        [attr.tabindex]=\"liftup ? -1: 0\">\r\n        <span class=\"off-screen\" *ngIf=\"template && gallery[i].data\">\r\n            <ng-container \r\n                [ngTemplateOutlet]=\"template\" \r\n                [ngTemplateOutletContext]=\"{data: gallery[i].data, selected: i+1, total: gallery.length}\"></ng-container>\r\n        </span>\r\n        <div *ngIf=\"showTitleOnHover && gallery[i].data && gallery[i].data.title\" class=\"title\">{{gallery[i].data.title}}</div>\r\n        <img *ngIf=\"gallery[i].type === undefined || gallery[i].type === 'image'\" aria-hidden=\"true\" width=\"100%\" height=\"100%\" [src]=\"gallery[i].src\" />\r\n        <video width=\"100%\" \r\n            *ngIf=\"gallery[i].type === 'video'\"\r\n            [attr.poster]=\"gallery[i].poster ? gallery[i].poster : null\"\r\n            [attr.src]=\"gallery[i].src\" disabled></video>\r\n        <div *ngIf=\"showRemainingCount && i === (layList.length - 1)\" class=\"counter\">\r\n            + {{gallery.length - i - 1}}\r\n            <span class=\"off-screen\">more entries</span>\r\n        </div>\r\n        <div *ngIf=\"showMessageOnHover\" class=\"more\">\r\n            {{hoverMessage}}\r\n            <span aria-hidden=\"true\" class=\"enlarge fa fa-clone\" *ngIf=\"layout === 'large-on-single'\"></span>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"lift\" [class.piled]=\"!sideBySide\" *ngIf=\"liftup\">\r\n    <div class=\"left-controls\">\r\n        <a *ngIf=\"selectedIndex>0\" \r\n            title=\"View previous\"\r\n            class=\"prev fa fa-chevron-left\" tabindex=\"0\"\r\n            (keyup)=\"keyup($event)\"\r\n            (click)=\"previous()\"></a>\r\n    </div>\r\n    <div class=\"lifter\" \r\n        [class.vertical]=\"!sideBySide\"\r\n        [class.fullscreen]=\"expanded\">\r\n        <div class=\"lift-view\" [class.magnified]=\"magnified\" #liftView\r\n            (touchmove)=\"touchHover($event)\"\r\n            (mouseover)=\"hoverOver($event)\"><img \r\n                *ngIf=\"gallery[selectedIndex].type === undefined || gallery[selectedIndex].type === 'image'\"  \r\n                aria-hidden=\"true\"\r\n                width=\"100%\" \r\n                height=\"100%\" \r\n                [src]=\"gallery[selectedIndex].src\" /><video \r\n\r\n                *ngIf=\"gallery[selectedIndex].type === 'video'\" \r\n                width=\"100%\" \r\n                [attr.src]=\"gallery[selectedIndex].src\" \r\n                [attr.poster]=\"gallery[selectedIndex].poster ? gallery[selectedIndex].poster : null\"\r\n                (play)=\"videoEvent($event)\"\r\n                (pause)=\"videoEvent($event)\"\r\n                (ended)=\"videoEvent($event)\"\r\n                (seeked)=\"videoEvent($event)\"\r\n                (error)=\"videoEvent($event)\"\r\n                (fullscreenchange)=\"videoEvent($event)\"\r\n                controls></video>\r\n        </div>\r\n        <div class=\"lift-info\" *ngIf=\"template && gallery[selectedIndex].data\">\r\n            <ng-container \r\n                [ngTemplateOutlet]=\"template\" \r\n                [ngTemplateOutletContext]=\"{data: gallery[selectedIndex].data, selected: selectedIndex+1, total: gallery.length}\"></ng-container>\r\n        </div>\r\n    </div>\r\n    <div class=\"right-controls\">\r\n        <a tabindex=\"0\"  #closeButton\r\n            class=\"close fa fa-close\" \r\n            title=\"Close viewer\"\r\n            (click)=\"liftDownImagery()\" \r\n            (keyup)=\"keyup($event)\"></a>\r\n        <span class=\"top-wrap\">\r\n            <a class=\"fa\" tabindex=\"0\"\r\n                (click)=\"fullScreen()\" \r\n                (keyup)=\"keyup($event)\"\r\n                [attr.title]=\"expanded ? 'Normal screen view' : 'Full screen view'\"\r\n                [class.fa-expand]=\"!expanded\" \r\n                [class.fa-compress]=\"expanded\"></a>\r\n            <a *ngIf=\"magnifyImageEnabled\" class=\"magnify fa\" tabindex=\"0\"\r\n                (click)=\"magnify(liftView)\" \r\n                (keyup)=\"keyup($event)\"\r\n                [attr.title]=\"magnified ? 'Normal Image' : 'Magnify Image'\"\r\n                [class.fa-expand]=\"!magnified\" \r\n                [class.fa-compress]=\"magnified\"></a>\r\n            <a *ngIf=\"template && gallery[selectedIndex].data\"\r\n                class=\"fa\" tabindex=\"0\"\r\n                (click)=\"sideBySide = !sideBySide\" \r\n                (keyup)=\"keyup($event)\"\r\n                [attr.title]=\"sideBySide ? 'Align Vertical' : 'Align Horizontal'\"\r\n                [class.fa-columns]=\"!sideBySide\" \r\n                [class.fa-bars]=\"sideBySide\"></a>\r\n            <a [href]=\"gallery[selectedIndex].src\" \r\n                tabindex=\"0\" title=\"download\" \r\n                class=\"download fa fa-download\" \r\n                (keyup)=\"keyup($event)\"\r\n                download></a>\r\n        </span>\r\n        <a *ngIf=\"showMore(closeButton)\" \r\n            title=\"View next\"\r\n            class=\"next fa fa-chevron-right\" tabindex=\"0\" \r\n            (keyup)=\"keyup($event)\"\r\n            (click)=\"next()\"></a>\r\n    </div>\r\n</div>\r\n",
                styles: [":host{box-sizing:border-box;display:flex;padding:0;margin:5px}:host .off-screen{display:block;width:1px;height:1px;position:absolute;left:-99999px;top:-99999px}:host .lift{width:100%;height:100%;min-height:300px;position:fixed;top:0;left:0;display:flex;flex-direction:row;z-index:99;background-color:rgba(0,0,0,.95)}:host .lift .left-controls{width:30px;height:100vh;color:#fff;background-color:transparent;padding:20% 0;box-sizing:border-box}:host .lift .left-controls .prev{top:50%;width:22px;left:8px}:host .lift .left-controls a{font-size:1.8rem;cursor:pointer;text-align:center;width:100%;position:absolute;display:flex}:host .lift .left-controls a:hover{color:#ccc}:host .lift .lifter{flex:1;display:flex;flex-direction:row}:host .lift .lifter .lift-view{flex:1;margin:20px;border:2px solid #d1e4be;position:relative;background-color:#fff}:host .lift .lifter .lift-view img{position:relative}:host .lift .lifter .lift-info{width:300px;background-color:#fff;margin:20px 15px 16px;padding:10px;border:2px solid #d1e4be}:host .lift .lifter.vertical{flex-direction:column;display:block}:host .lift .lifter.vertical .lift-info{width:auto;height:200px;margin:20px;overflow-y:auto}:host .lift .right-controls{width:30px;height:100vh;color:#fff;background-color:transparent;display:flex;flex-direction:column;padding:20% 0;box-sizing:border-box;position:relative}:host .lift .right-controls .close{position:absolute;right:0;top:5px;width:33px}:host .lift .right-controls .top-wrap{position:absolute;top:40px;right:2px}:host .lift .right-controls .top-wrap .magnify{display:none;width:33px;font-size:1.5rem;margin-bottom:8px}:host .lift .right-controls .top-wrap .fa-compress,:host .lift .right-controls .top-wrap .fa-expand{width:33px;font-size:1.5rem;margin-bottom:8px}:host .lift .right-controls .top-wrap .fa-bars,:host .lift .right-controls .top-wrap .fa-columns{width:33px;font-size:1.5rem;margin-bottom:8px}:host .lift .right-controls .top-wrap .download{font-size:1.5rem;width:33px;color:#fff;margin-bottom:8px}:host .lift .right-controls .next{top:50%;width:22px;position:absolute}:host .lift .right-controls a{font-size:1.8rem;cursor:pointer;text-align:center;width:100%}:host .lift .right-controls a:hover{color:#ccc}:host .lift.piled{position:absolute;height:inherit}:host .lift.piled .lifter.vertical .lift-info{margin:20px}:host .lift.piled .lifter.fullscreen .lift-info,:host .lift.piled .lifter.fullscreen .lift-view{margin:20;height:auto}:host .viewport{display:-ms-inline-grid;display:inline-grid;grid-gap:0;background-color:#000;padding:0}:host .viewport .view{text-align:center;padding:0;position:relative;box-sizing:border-box;display:flex;overflow:hidden;cursor:pointer}:host .viewport .view img,:host .viewport .view video{-o-object-fit:cover;object-fit:cover}:host .viewport .view:focus,:host .viewport .view:hover{-webkit-filter:brightness(70%);-moz-filter:brightness(70%);-o-filter:brightness(70%);-ms-filter:brightness(70%);filter:brightness(70%)}:host .viewport .view:focus .more,:host .viewport .view:focus .title,:host .viewport .view:hover .more,:host .viewport .view:hover .title{display:inline}:host .viewport .view .counter{width:100%;height:100%;background-color:rgba(100,100,100,.5);color:#fff;position:absolute;top:0;overflow:hidden;box-sizing:border-box}:host .viewport .view .title{display:none;width:100%;background-color:#000;color:#fff;font-size:1rem;position:absolute;left:0;top:0;padding:5px;overflow:hidden}:host .viewport .view .more{display:none;width:100%;background-color:#000;color:#fff;font-size:1.2rem;position:absolute;left:0;bottom:0;padding:5px}:host .viewport .view .more .enlarge{position:absolute;right:20px}:host .viewport .view:nth-child(1){-ms-grid-row:1;-ms-grid-column:1;grid-area:tl}:host .viewport .view:nth-child(2){-ms-grid-row:1;-ms-grid-column:3;grid-area:bl}:host .viewport .view:nth-child(3){-ms-grid-row:1;-ms-grid-row-span:3;-ms-grid-column:3;-ms-grid-column-span:3;grid-area:center}:host .viewport .view:nth-child(4){-ms-grid-row:3;-ms-grid-column:3;grid-area:tr}:host .viewport .view:nth-child(5){-ms-grid-row:3;-ms-grid-column:7;grid-area:br}:host .viewport.c1{grid-template-areas:'tl'}:host .viewport.c1 .counter{font-size:4rem;padding:25% 0}:host .viewport.c2{-ms-grid-columns:50% 0 50%;grid-template-columns:50% 50%;grid-template-areas:'tl bl'}:host .viewport.c2 .counter{font-size:4rem;padding:25% 0}:host .viewport.c3{-ms-grid-columns:32% 0 auto;grid-template-columns:32% auto;-ms-grid-rows:auto 0 auto;grid-template-areas:'tl center center' 'bl center center'}:host .viewport.c3 .counter{font-size:4rem;padding:25% 0}:host .viewport.c4{-ms-grid-columns:50% 0 50%;grid-template-columns:50% 50%;-ms-grid-rows:auto 0 auto;grid-template-areas:'tl center' 'bl tr'}:host .viewport.c4 .counter{font-size:4rem;padding:25% 0}:host .viewport.c5{-ms-grid-columns:25% 0 auto 0 25%;grid-template-columns:25% auto 25%;-ms-grid-rows:auto 0 auto;grid-template-areas:'tl center center tr' 'bl center center br'}:host .viewport.c5 .counter{font-size:2.5rem;padding:25% 0}:host .viewport.rc3{-ms-grid-columns:auto 0 30%;grid-template-columns:auto 30%;-ms-grid-rows:auto 0 auto;grid-template-areas:'tl tl bl' 'tl tl center'}:host .viewport.rc3 .counter{font-size:2.5rem;padding:40% 0}:host .viewport.rc4{-ms-grid-columns:30% 0 auto 0 30%;grid-template-columns:30% auto 30%;-ms-grid-rows:auto 0 auto;grid-template-areas:'tl bl tr' 'tl center tr'}:host .viewport.rc4 .counter{font-size:2.5rem;padding:80% 0}@media only screen and (max-width:600px){:host .lift .lifter{flex-direction:column}:host .lift .lifter .lift-view{flex:unset}:host .lift .lifter .lift-view.magnified{overflow:auto}:host .lift .lifter .lift-info{width:auto;margin:20px;flex:1;overflow-y:auto}:host .lift .right-controls .top-wrap .fa-compress,:host .lift .right-controls .top-wrap .fa-expand{display:none}:host .lift .right-controls .top-wrap .fa-compress.magnify,:host .lift .right-controls .top-wrap .fa-expand.magnify{display:inline-block}:host .lift .right-controls .top-wrap .fa-bars,:host .lift .right-controls .top-wrap .fa-columns{display:none}:host .lift.piled{position:fixed!important}}"]
            }] }
];
/** @nocollapse */
GalleryLiftComponent.ctorParameters = () => [];
GalleryLiftComponent.propDecorators = {
    onselect: [{ type: Output }],
    onaction: [{ type: Output }],
    sideBySide: [{ type: Input }],
    liftOnZero: [{ type: Input }],
    showRemainingCount: [{ type: Input }],
    showTitleOnHover: [{ type: Input }],
    showMessageOnHover: [{ type: Input }],
    magnifyImageEnabled: [{ type: Input }],
    gallery: [{ type: Input }],
    template: [{ type: Input }],
    maxHeight: [{ type: Input }],
    hoverMessage: [{ type: Input }],
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
    GalleryLiftComponent.prototype.magnified;
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
    GalleryLiftComponent.prototype.magnifyImageEnabled;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1saWZ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZWRlaC9nYWxsZXJ5LWxpZnQvIiwic291cmNlcyI6WyJzcmMvYXBwL2dhbGxlcnktbGlmdC9nYWxsZXJ5LWxpZnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBUXZCLE1BQU07SUF3Qko7dUJBdkJVLENBQUMsQ0FBQyxDQUFDOzJCQUNDLElBQUk7NkJBQ0YsQ0FBQzt5QkFDTCxLQUFLO3NCQUNSLEtBQUs7dUJBQ0osS0FBSzt3QkFDSixLQUFLO3dCQUVJLElBQUksWUFBWSxFQUFFO3dCQUNsQixJQUFJLFlBQVksRUFBRTswQkFFaEIsSUFBSTswQkFDSixLQUFLO2tDQUNHLEtBQUs7Z0NBQ1AsS0FBSztrQ0FDSCxJQUFJO21DQUNILEtBQUs7eUJBR2YsR0FBRzs0QkFDQSxhQUFhO3NCQUNuQixpQkFBaUI7UUFHakMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0RCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxLQUFZLEVBQUUsRUFBRTtnQkFDbkUsRUFBRSxDQUFBLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ3hDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztpQkFDbkI7YUFDRixDQUFDLENBQUM7WUFDSCxRQUFRLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxLQUFZLEVBQUUsRUFBRTs7Z0JBQ2hFLE1BQU0sR0FBRyxHQUFRLE1BQU0sQ0FBQzs7Z0JBQ3hCLE1BQU0s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QUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3JCO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0tBQ3JEOzs7OztJQUNELEtBQUssQ0FBQyxLQUFVOztRQUNoQixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN0QjtLQUNGOzs7WUFyTkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4Qiw2MktBQTRDOzthQUU3Qzs7Ozs7dUJBVUUsTUFBTTt1QkFDTixNQUFNO3lCQUVOLEtBQUs7eUJBQ0wsS0FBSztpQ0FDTCxLQUFLOytCQUNMLEtBQUs7aUNBQ0wsS0FBSztrQ0FDTCxLQUFLO3NCQUNMLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzJCQUNMLEtBQUs7cUJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkNoYW5nZXMsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlclxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBzdG9yZUNsZWFudXBXaXRoQ29udGV4dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvc3JjL3JlbmRlcjMvaW5zdHJ1Y3Rpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2FsbGVyeS1saWZ0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZ2FsbGVyeS1saWZ0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9nYWxsZXJ5LWxpZnQuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEdhbGxlcnlMaWZ0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBsYXlMaXN0ID0gWzFdO1xyXG4gIGRpc3BsYXlUeXBlID0gJ2MxJztcclxuICBzZWxlY3RlZEluZGV4ID0gMDtcclxuICBtYWduaWZpZWQgPSBmYWxzZTtcclxuICBsaWZ0dXAgPSBmYWxzZTtcclxuICBmb2N1c2VkID0gZmFsc2U7XHJcbiAgZXhwYW5kZWQgPSBmYWxzZTtcclxuICBcclxuICBAT3V0cHV0KCkgb25zZWxlY3Q9IG5ldyBFdmVudEVtaXR0ZXIoKVxyXG4gIEBPdXRwdXQoKSBvbmFjdGlvbj0gbmV3IEV2ZW50RW1pdHRlcigpXHJcblxyXG4gIEBJbnB1dCgpIHNpZGVCeVNpZGUgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGxpZnRPblplcm8gPSBmYWxzZTtcclxuICBASW5wdXQoKSBzaG93UmVtYWluaW5nQ291bnQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBzaG93VGl0bGVPbkhvdmVyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2hvd01lc3NhZ2VPbkhvdmVyID0gdHJ1ZTtcclxuICBASW5wdXQoKSBtYWduaWZ5SW1hZ2VFbmFibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZ2FsbGVyeTogYW55W107XHJcbiAgQElucHV0KCkgdGVtcGxhdGU6IGFueTtcclxuICBASW5wdXQoKSBtYXhIZWlnaHQgPSA0MDA7XHJcbiAgQElucHV0KCkgaG92ZXJNZXNzYWdlID0gJ1NlZSBtb3JlLi4uJztcclxuICBASW5wdXQoKSBsYXlvdXQgPSAnbGFyZ2Utb24tc2luZ2xlJztcclxuICBcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGlmIChuYXZpZ2F0b3IucGxhdGZvcm0udG9VcHBlckNhc2UoKS5pbmRleE9mKCdNQUMnKTwwKSB7XHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ3ZWJraXRmdWxsc2NyZWVuY2hhbmdlXCIsIChldmVudDogRXZlbnQpID0+IHtcclxuICAgICAgICBpZighd2luZG93LnNjcmVlblRvcCAmJiAhd2luZG93LnNjcmVlblkpIHtcclxuICAgICAgICAgIHRoaXMuZnVsbFNjcmVlbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3pmdWxsc2NyZWVuY2hhbmdlXCIsIChldmVudDogRXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCB3aW46IGFueSA9IHdpbmRvdztcclxuICAgICAgICBjb25zdCBpc0Z1bGxTY3JlZW4gPSB3aW4uZnVsbFNjcmVlbiB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHdpbi5pbm5lcldpZHRoID09IHNjcmVlbi53aWR0aCAmJiB3aW4uaW5uZXJIZWlnaHQgPT0gc2NyZWVuLmhlaWdodClcclxuICAgICAgICBpZighaXNGdWxsU2NyZWVuKSB7XHJcbiAgICAgICAgICB0aGlzLmZ1bGxTY3JlZW4oKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiTVNGdWxsc2NyZWVuQ2hhbmdlXCIsIChldmVudDogRXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCB3aW46IGFueSA9IHdpbmRvdztcclxuICAgICAgICBjb25zdCBpc0Z1bGxTY3JlZW4gPSB3aW4uZnVsbFNjcmVlbiB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHdpbi5pbm5lcldpZHRoID09IHNjcmVlbi53aWR0aCAmJiB3aW4uaW5uZXJIZWlnaHQgPT0gc2NyZWVuLmhlaWdodClcclxuICAgICAgICBpZighaXNGdWxsU2NyZWVuKSB7XHJcbiAgICAgICAgICB0aGlzLmZ1bGxTY3JlZW4oKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpIHtcclxuICAgIGlmIChjaGFuZ2VzLmxheW91dCkge1xyXG4gICAgICBzd2l0Y2godGhpcy5sYXlvdXQpIHtcclxuICAgICAgICBjYXNlICdsYXJnZS1vbi1zaW5nbGUnOiB0aGlzLmRpc3BsYXlUeXBlID0gJ2MxJzt0aGlzLmxheUxpc3QgPSBbMV07IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3NwbGl0LW9uLWR1YWwnOiB0aGlzLmRpc3BsYXlUeXBlID0gJ2MyJzt0aGlzLmxheUxpc3QgPSBbMSwyXTsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbGFyZ2Utb24tcmlnaHQnOiB0aGlzLmRpc3BsYXlUeXBlID0gJ2MzJzt0aGlzLmxheUxpc3QgPSBbMSwyLDNdOyBicmVhaztcclxuICAgICAgICBjYXNlICdzcGxpdC1vbi1xdWFkcnVwbGUnOiB0aGlzLmRpc3BsYXlUeXBlID0gJ2M0Jzt0aGlzLmxheUxpc3QgPSBbMSwyLDMsNF07IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2xhcmdlLW9uLW1pZGRsZSc6IHRoaXMuZGlzcGxheVR5cGUgPSAnYzUnO3RoaXMubGF5TGlzdCA9IFsxLDIsMyw0LDVdOyBicmVhaztcclxuICAgICAgICBjYXNlICdsYXJnZS1vbi1sZWZ0JzogdGhpcy5kaXNwbGF5VHlwZSA9ICdyYzMnO3RoaXMubGF5TGlzdCA9IFsxLDIsM107IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2xhcmdlLW9uLXNpZGVzJzogdGhpcy5kaXNwbGF5VHlwZSA9ICdyYzQnO3RoaXMubGF5TGlzdCA9IFsxLDIsMyw0XTsgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgbWF4SGVpZ2h0T2YoaW5kZXg6IG51bWJlcikge1xyXG4gICAgbGV0IG1heCA9IHRoaXMubWF4SGVpZ2h0O1xyXG4gICAgc3dpdGNoKHRoaXMubGF5b3V0KSB7XHJcbiAgICAgIGNhc2UgJ2xhcmdlLW9uLXNpbmdsZSc6IGJyZWFrO1xyXG4gICAgICBjYXNlICdzcGxpdC1vbi1kdWFsJzogYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2xhcmdlLW9uLXJpZ2h0JzogXHJcbiAgICAgICAgbWF4ID0gaW5kZXggPCAyID8gKHRoaXMubWF4SGVpZ2h0IC8gMik6IG1heDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnc3BsaXQtb24tcXVhZHJ1cGxlJzogbWF4ID0gdGhpcy5tYXhIZWlnaHQgLyAyOyBicmVhaztcclxuICAgICAgY2FzZSAnbGFyZ2Utb24tbWlkZGxlJzpcclxuICAgICAgICBtYXggPSBpbmRleCA9PT0gMiA/IG1heCA6ICh0aGlzLm1heEhlaWdodCAvIDIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdsYXJnZS1vbi1sZWZ0JzogXHJcbiAgICAgICAgbWF4ID0gaW5kZXggPT09IDAgPyBtYXggOiAodGhpcy5tYXhIZWlnaHQgLyAyKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnbGFyZ2Utb24tc2lkZXMnOiBcclxuICAgICAgICBtYXggPSAoaW5kZXggPT09IDAgfHwgaW5kZXggPT09IDMpID8gbWF4IDogKHRoaXMubWF4SGVpZ2h0IC8gMik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWF4ICsgJ3B4JztcclxuICB9XHJcbiAgbGlmdFVwSW1hZ2VyeShpbmRleDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB0aGlzLmxpZnRPblplcm8gPyAwIDogaW5kZXg7XHJcbiAgICB0aGlzLmxpZnR1cCA9IHRydWU7XHJcbiAgICB0aGlzLm9uc2VsZWN0LmVtaXQoe1xyXG4gICAgICBpbmRleDogdGhpcy5zZWxlY3RlZEluZGV4LFxyXG4gICAgICBhY3Rpb246ICdsaWZ0IHVwJ1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGxpZnREb3duSW1hZ2VyeSgpIHtcclxuICAgIGlmICh0aGlzLmV4cGFuZGVkKSB7XHJcbiAgICAgIHRoaXMuZnVsbFNjcmVlbigpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5saWZ0dXAgPSBmYWxzZTtcclxuICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlXHJcbiAgICB0aGlzLm9uc2VsZWN0LmVtaXQoe1xyXG4gICAgICBpbmRleDogdGhpcy5zZWxlY3RlZEluZGV4LFxyXG4gICAgICBhY3Rpb246ICdsaWZ0IGRvd24nXHJcbiAgICB9KTtcclxuICB9XHJcbiAgbWFnbmlmeShsaWZ0VmlldzogYW55KSB7XHJcbiAgICB0aGlzLm1hZ25pZmllZCA9ICF0aGlzLm1hZ25pZmllZDtcclxuICAgIGlmICh0aGlzLm1hZ25pZmllZCkge1xyXG4gICAgICBsaWZ0Vmlldy5zdHlsZS53aWR0aCA9IGxpZnRWaWV3LmNsaWVudFdpZHRoICsgXCJweFwiO1xyXG4gICAgICBsaWZ0Vmlldy5zdHlsZS5oZWlnaHQgPSBsaWZ0Vmlldy5jbGllbnRIZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgIGxpZnRWaWV3LmNoaWxkcmVuWzBdLnN0eWxlLndpZHRoID0gXCIzMDAlXCI7XHJcbiAgICAgIGxpZnRWaWV3LmNoaWxkcmVuWzBdLnN0eWxlLmhlaWdodCA9IFwiMzAwJVwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGlmdFZpZXcuY2hpbGRyZW5bMF0uc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgbGlmdFZpZXcuY2hpbGRyZW5bMF0uc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XHJcbiAgICAgIGxpZnRWaWV3LmNoaWxkcmVuWzBdLnN0eWxlLnRvcCA9IFwiMHB4XCI7XHJcbiAgICAgIGxpZnRWaWV3LmNoaWxkcmVuWzBdLnN0eWxlLmxlZnQgPSBcIjBweFwiO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdWxsU2NyZWVuKCkge1xyXG4gICAgY29uc3QgZG9jOiBhbnkgPSBkb2N1bWVudDtcclxuICAgIHRoaXMuZXhwYW5kZWQgPSAhdGhpcy5leHBhbmRlZDtcclxuICAgIGlmICh0aGlzLmV4cGFuZGVkKSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQ6IGFueSA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgICAgIGlmKGVsZW1lbnQucmVxdWVzdEZ1bGxzY3JlZW4pIHtcclxuICAgICAgICBlbGVtZW50LnJlcXVlc3RGdWxsc2NyZWVuKCk7XHJcbiAgICAgIH0gZWxzZSBpZihlbGVtZW50Lm1velJlcXVlc3RGdWxsU2NyZWVuKSB7XHJcbiAgICAgICAgZWxlbWVudC5tb3pSZXF1ZXN0RnVsbFNjcmVlbigpO1xyXG4gICAgICB9IGVsc2UgaWYoZWxlbWVudC53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbikge1xyXG4gICAgICAgIGVsZW1lbnQud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4oKTtcclxuICAgICAgfSBlbHNlIGlmKGVsZW1lbnQubXNSZXF1ZXN0RnVsbHNjcmVlbikge1xyXG4gICAgICAgIGVsZW1lbnQubXNSZXF1ZXN0RnVsbHNjcmVlbigpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZihkb2MuZXhpdEZ1bGxzY3JlZW4pIHtcclxuICAgICAgICBkb2MuZXhpdEZ1bGxzY3JlZW4oKTtcclxuICAgICAgfSBlbHNlIGlmKGRvYy5tb3pDYW5jZWxGdWxsU2NyZWVuKSB7XHJcbiAgICAgICAgZG9jLm1vekNhbmNlbEZ1bGxTY3JlZW4oKTtcclxuICAgICAgfSBlbHNlIGlmKGRvYy53ZWJraXRFeGl0RnVsbHNjcmVlbikge1xyXG4gICAgICAgIGRvYy53ZWJraXRFeGl0RnVsbHNjcmVlbigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHByZXZpb3VzKCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5zZWxlY3RlZEluZGV4IC0gMTtcclxuICAgIHRoaXMub25hY3Rpb24uZW1pdCh7XHJcbiAgICAgIGFjdGlvbjogXCJ2aWV3IHByZXZpb3VzXCIsXHJcbiAgICAgIGluZGV4OiB0aGlzLnNlbGVjdGVkSW5kZXgsXHJcblx0XHRcdHRpbWU6IG5ldyBEYXRlKClcclxuXHRcdH0pO1xyXG4gIH1cclxuICBuZXh0KCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5zZWxlY3RlZEluZGV4ICsgMTtcclxuICAgIHRoaXMub25hY3Rpb24uZW1pdCh7XHJcbiAgICAgIGFjdGlvbjogXCJ2aWV3IG5leHRcIixcclxuICAgICAgaW5kZXg6IHRoaXMuc2VsZWN0ZWRJbmRleCxcclxuXHRcdFx0dGltZTogbmV3IERhdGUoKVxyXG5cdFx0fSk7XHJcbiAgfVxyXG4gIHZpZGVvRXZlbnQoZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5vbmFjdGlvbi5lbWl0KHtcclxuICAgICAgYWN0aW9uOiBldmVudC50eXBlLFxyXG4gICAgICBpbmRleDogdGhpcy5zZWxlY3RlZEluZGV4LFxyXG4gICAgICB0aW1lOiBuZXcgRGF0ZSgpLFxyXG4gICAgICBpdGVtOiB7XHJcbiAgICAgICAgYXV0b3BsYXk6IGV2ZW50LnRhcmdldC5hdXRvcGxheSxcclxuICAgICAgICBjb250cm9sczogZXZlbnQudGFyZ2V0LmNvbnRyb2xzLFxyXG4gICAgICAgIGR1cmF0aW9uOiBldmVudC50YXJnZXQuZHVyYXRpb24sXHJcbiAgICAgICAgZW5kZWQ6IGV2ZW50LnRhcmdldC5lbmRlZCxcclxuICAgICAgICBlcnJvcjogZXZlbnQudGFyZ2V0LmVycm9yLFxyXG4gICAgICAgIHBhdXNlZDogZXZlbnQudGFyZ2V0LnBhdXNlZCxcclxuICAgICAgICBtdXRlZDogZXZlbnQudGFyZ2V0Lm11dGVkLFxyXG4gICAgICAgIGN1cnJlbnRUaW1lOiBldmVudC50YXJnZXQuY3VycmVudFRpbWUsXHJcbiAgICAgICAgdm9sdW1lOiBldmVudC50YXJnZXQudm9sdW1lXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICB0b3VjaEhvdmVyKGV2ZW50OiBhbnkpIHtcclxuXHRcdHRoaXMub25hY3Rpb24uZW1pdCh7XHJcbiAgICAgIGFjdGlvbjogZXZlbnQudHlwZSxcclxuICAgICAgaW5kZXg6IHRoaXMuc2VsZWN0ZWRJbmRleCxcclxuXHRcdFx0dGltZTogbmV3IERhdGUoKVxyXG5cdFx0fSk7XHJcblx0fVxyXG4gIGhvdmVyT3ZlcihldmVudDogYW55KSB7XHJcbiAgICB0aGlzLm9uYWN0aW9uLmVtaXQoe1xyXG4gICAgICBhY3Rpb246IGV2ZW50LnR5cGUsXHJcbiAgICAgIGluZGV4OiB0aGlzLnNlbGVjdGVkSW5kZXgsXHJcblx0XHRcdHRpbWU6IG5ldyBEYXRlKClcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRob3Zlck91dChldmVudDogYW55KSB7XHJcbiAgICB0aGlzLm9uYWN0aW9uLmVtaXQoe1xyXG4gICAgICBhY3Rpb246IGV2ZW50LnR5cGUsXHJcbiAgICAgIGluZGV4OiB0aGlzLnNlbGVjdGVkSW5kZXgsXHJcbiAgICAgIHRpbWU6IG5ldyBEYXRlKClcclxuICAgIH0pO1xyXG5cdH1cclxuXHJcbiAgc2hvd01vcmUoY2xvc2VCdXR0b24pIHtcclxuICAgIGlmICghdGhpcy5mb2N1c2VkKSB7XHJcbiAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XHJcbiAgICAgIGNsb3NlQnV0dG9uLmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEluZGV4IDwgdGhpcy5nYWxsZXJ5Lmxlbmd0aCAtIDE7XHJcbiAgfVxyXG4gIGtleXVwKGV2ZW50OiBhbnkpIHtcclxuXHRcdGNvbnN0IGNvZGUgPSBldmVudC53aGljaDtcclxuXHRcdGlmIChjb2RlID09PSAxMykge1xyXG4gICAgICBldmVudC50YXJnZXQuY2xpY2soKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19