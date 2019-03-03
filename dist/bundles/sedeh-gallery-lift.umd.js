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
            var _this = this;
            this.layList = [1];
            this.displayType = 'c1';
            this.selectedIndex = 0;
            this.liftup = false;
            this.focused = false;
            this.expanded = false;
            this.onselect = new core.EventEmitter();
            this.onaction = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'gallery-lift',
                        template: "\r\n<div class=\"viewport {{displayType}}\">\r\n    <div *ngFor=\"let row of layList; let i = index\"\r\n        (keyup)=\"keyup($event)\"\r\n        (click)=\"liftUpImagery(i)\"\r\n        class=\"view\"\r\n        [style.max-height]='maxHeightOf(i)'\r\n        [attr.tabindex]=\"liftup ? -1: 0\">\r\n        <span class=\"off-screen\" *ngIf=\"template && gallery[i].data\">\r\n            <ng-container \r\n                [ngTemplateOutlet]=\"template\" \r\n                [ngTemplateOutletContext]=\"{data: gallery[i].data, selected: i+1, total: gallery.length}\"></ng-container>\r\n        </span>\r\n        <div *ngIf=\"showTitleOnHover && gallery[i].data && gallery[i].data.title\" class=\"title\">{{gallery[i].data.title}}</div>\r\n        <img *ngIf=\"gallery[i].type === undefined || gallery[i].type === 'image'\" aria-hidden=\"true\" width=\"100%\" height=\"100%\" [src]=\"gallery[i].src\" />\r\n        <video *ngIf=\"gallery[i].type === 'video'\" width=\"100%\" [attr.src]=\"gallery[i].src\" disabled></video>\r\n        <div *ngIf=\"showRemainingCount && i === (layList.length - 1)\" class=\"counter\">\r\n            + {{gallery.length - i - 1}}\r\n            <span class=\"off-screen\">more entries</span>\r\n        </div>\r\n        <div *ngIf=\"showMessageOnHover\" class=\"more\">\r\n            {{hoverMessage}}\r\n            <span aria-hidden=\"true\" class=\"enlarge fa fa-clone\" *ngIf=\"layout === 'large-on-single'\"></span>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"lift\" [class.piled]=\"!sideBySide\" *ngIf=\"liftup\">\r\n    <div class=\"left-controls\">\r\n        <a *ngIf=\"selectedIndex>0\" \r\n            title=\"View previous\"\r\n            class=\"prev fa fa-chevron-left\" tabindex=\"0\"\r\n            (keyup)=\"keyup($event)\"\r\n            (click)=\"previous()\"></a>\r\n    </div>\r\n    <div class=\"lifter\" \r\n        [class.vertical]=\"!sideBySide\"\r\n        [class.fullscreen]=\"expanded\">\r\n        <div class=\"lift-view\"\r\n            (mouseover)=\"hoverOver($event)\">\r\n            <img *ngIf=\"gallery[selectedIndex].type === undefined || gallery[selectedIndex].type === 'image'\"  aria-hidden=\"true\" width=\"100%\" height=\"100%\" [src]=\"gallery[selectedIndex].src\" />\r\n            <video *ngIf=\"gallery[selectedIndex].type === 'video'\" \r\n                width=\"100%\" \r\n                [attr.src]=\"gallery[selectedIndex].src\" \r\n                (play)=\"videoEvent($event)\"\r\n                (pause)=\"videoEvent($event)\"\r\n                (ended)=\"videoEvent($event)\"\r\n                (seeked)=\"videoEvent($event)\"\r\n                (error)=\"videoEvent($event)\"\r\n                (fullscreenchange)=\"videoEvent($event)\"\r\n                controls></video>\r\n        </div>\r\n        <div class=\"lift-info\" *ngIf=\"template && gallery[selectedIndex].data\">\r\n            <ng-container \r\n                [ngTemplateOutlet]=\"template\" \r\n                [ngTemplateOutletContext]=\"{data: gallery[selectedIndex].data, selected: selectedIndex+1, total: gallery.length}\"></ng-container>\r\n        </div>\r\n    </div>\r\n    <div class=\"right-controls\">\r\n        <a tabindex=\"0\"  #closeButton\r\n            class=\"close fa fa-close\" \r\n            title=\"Close viewer\"\r\n            (click)=\"liftDownImagery()\" \r\n            (keyup)=\"keyup($event)\"></a>\r\n        <a (click)=\"fullScreen()\" \r\n            class=\"fa\" \r\n            [attr.title]=\"expanded ? 'Normal screen view' : 'Full screen view'\"\r\n            [class.fa-expand]=\"!expanded\" \r\n            [class.fa-compress]=\"expanded\"></a>\r\n        <a *ngIf=\"template && gallery[selectedIndex].data\"\r\n            (click)=\"sideBySide = !sideBySide\" \r\n            class=\"fa\" \r\n            [attr.title]=\"sideBySide ? 'Align Vertical' : 'Align Horizontal'\"\r\n            [class.fa-columns]=\"!sideBySide\" \r\n            [class.fa-bars]=\"sideBySide\"></a>\r\n        <a *ngIf=\"showMore(closeButton)\" \r\n            title=\"View next\"\r\n            class=\"next fa fa-chevron-right\" tabindex=\"0\" \r\n            (keyup)=\"keyup($event)\"\r\n            (click)=\"next()\"></a>\r\n        <a [href]=\"gallery[selectedIndex].src\"  \r\n            title=\"download\" \r\n            class=\"download fa fa-download\" \r\n            download></a>\r\n    </div>\r\n</div>\r\n",
                        styles: [":host{box-sizing:border-box;display:flex;padding:0;margin:5px}:host .off-screen{display:block;width:1px;height:1px;position:absolute;left:-99999px;top:-99999px}:host .lift{width:100%;height:100%;min-height:300px;position:fixed;top:0;left:0;display:flex;flex-direction:row;z-index:99;background-color:rgba(0,0,0,.95)}:host .lift .left-controls{width:30px;height:100vh;color:#fff;background-color:transparent;padding:20% 0;box-sizing:border-box}:host .lift .left-controls .prev{top:50%;width:22px}:host .lift .left-controls a{font-size:1.8rem;cursor:pointer;text-align:center;width:100%;position:absolute;display:flex}:host .lift .left-controls a:hover{color:#ccc}:host .lift .lifter{flex:1;display:flex;flex-direction:row}:host .lift .lifter .lift-view{flex:1;margin:20px}:host .lift .lifter .lift-view img{border:2px solid #d1e4be}:host .lift .lifter .lift-info{width:300px;background-color:#fff;margin:20px 15px 16px;padding:10px;border:2px solid #d1e4be}:host .lift .lifter.vertical{flex-direction:column;display:block}:host .lift .lifter.vertical .lift-info{width:auto;height:200px;margin:20px;overflow-y:auto}:host .lift .right-controls{width:30px;height:100vh;color:#fff;background-color:transparent;display:flex;flex-direction:column;padding:20% 0;box-sizing:border-box}:host .lift .right-controls .close{position:absolute;right:0;top:5px;width:33px}:host .lift .right-controls .next{top:50%;width:22px}:host .lift .right-controls .fa-compress,:host .lift .right-controls .fa-expand{position:absolute;right:0;top:44px;width:33px;font-size:1.5rem}:host .lift .right-controls .fa-bars,:host .lift .right-controls .fa-columns{position:absolute;right:0;top:111px;width:33px;font-size:1.5rem}:host .lift .right-controls a{font-size:1.8rem;cursor:pointer;text-align:center;width:100%;position:absolute}:host .lift .right-controls a:hover{color:#ccc}:host .lift .right-controls .download{position:absolute;right:0;top:77px;font-size:1.5rem;width:33px;color:#fff}:host .lift.piled{position:absolute;height:inherit}:host .lift.piled .lifter.vertical .lift-info{margin:20px}:host .lift.piled .lifter.fullscreen .lift-info,:host .lift.piled .lifter.fullscreen .lift-view{margin:20;height:auto}:host .viewport{display:-ms-inline-grid;display:inline-grid;grid-gap:0;background-color:#000;padding:0}:host .viewport .view{text-align:center;padding:0;position:relative;box-sizing:border-box;display:flex;overflow:hidden;cursor:pointer}:host .viewport .view img,:host .viewport .view video{-o-object-fit:cover;object-fit:cover}:host .viewport .view:focus,:host .viewport .view:hover{-webkit-filter:brightness(70%);-moz-filter:brightness(70%);-o-filter:brightness(70%);-ms-filter:brightness(70%);filter:brightness(70%)}:host .viewport .view:focus .more,:host .viewport .view:focus .title,:host .viewport .view:hover .more,:host .viewport .view:hover .title{display:inline}:host .viewport .view .counter{width:100%;height:100%;background-color:rgba(100,100,100,.5);color:#fff;position:absolute;top:0;overflow:hidden;box-sizing:border-box}:host .viewport .view .title{display:none;width:100%;background-color:#000;color:#fff;font-size:1rem;position:absolute;left:0;top:0;padding:5px;overflow:hidden}:host .viewport .view .more{display:none;width:100%;background-color:#000;color:#fff;font-size:1.2rem;position:absolute;left:0;bottom:0;padding:5px}:host .viewport .view .more .enlarge{position:absolute;right:20px}:host .viewport .view:nth-child(1){-ms-grid-row:1;-ms-grid-column:1;grid-area:tl}:host .viewport .view:nth-child(2){-ms-grid-row:1;-ms-grid-column:3;grid-area:bl}:host .viewport .view:nth-child(3){-ms-grid-row:1;-ms-grid-row-span:3;-ms-grid-column:3;-ms-grid-column-span:3;grid-area:center}:host .viewport .view:nth-child(4){-ms-grid-row:3;-ms-grid-column:3;grid-area:tr}:host .viewport .view:nth-child(5){-ms-grid-row:3;-ms-grid-column:7;grid-area:br}:host .viewport.c1{grid-template-areas:'tl'}:host .viewport.c1 .counter{font-size:4rem;padding:25% 0}:host .viewport.c2{-ms-grid-columns:50% 0 50%;grid-template-columns:50% 50%;grid-template-areas:'tl bl'}:host .viewport.c2 .counter{font-size:4rem;padding:25% 0}:host .viewport.c3{-ms-grid-columns:32% 0 auto;grid-template-columns:32% auto;-ms-grid-rows:auto 0 auto;grid-template-areas:'tl center center' 'bl center center'}:host .viewport.c3 .counter{font-size:4rem;padding:25% 0}:host .viewport.c4{-ms-grid-columns:50% 0 50%;grid-template-columns:50% 50%;-ms-grid-rows:auto 0 auto;grid-template-areas:'tl center' 'bl tr'}:host .viewport.c4 .counter{font-size:4rem;padding:25% 0}:host .viewport.c5{-ms-grid-columns:25% 0 auto 0 25%;grid-template-columns:25% auto 25%;-ms-grid-rows:auto 0 auto;grid-template-areas:'tl center center tr' 'bl center center br'}:host .viewport.c5 .counter{font-size:2.5rem;padding:25% 0}:host .viewport.rc3{-ms-grid-columns:auto 0 30%;grid-template-columns:auto 30%;-ms-grid-rows:auto 0 auto;grid-template-areas:'tl tl bl' 'tl tl center'}:host .viewport.rc3 .counter{font-size:2.5rem;padding:40% 0}:host .viewport.rc4{-ms-grid-columns:30% 0 auto 0 30%;grid-template-columns:30% auto 30%;-ms-grid-rows:auto 0 auto;grid-template-areas:'tl bl tr' 'tl center tr'}:host .viewport.rc4 .counter{font-size:2.5rem;padding:80% 0}@media only screen and (max-width:600px){:host .lift .lifter{flex-direction:column}:host .lift .lifter .lift-info{width:auto;margin:20px;overflow-y:auto}:host .lift .right-controls .fa-bars,:host .lift .right-controls .fa-columns{display:none}:host .lift.piled{position:fixed!important}}"]
                    }] }
        ];
        /** @nocollapse */
        GalleryLiftComponent.ctorParameters = function () { return []; };
        GalleryLiftComponent.propDecorators = {
            onselect: [{ type: core.Output }],
            onaction: [{ type: core.Output }],
            sideBySide: [{ type: core.Input }],
            liftOnZero: [{ type: core.Input }],
            showRemainingCount: [{ type: core.Input }],
            showTitleOnHover: [{ type: core.Input }],
            showMessageOnHover: [{ type: core.Input }],
            gallery: [{ type: core.Input }],
            template: [{ type: core.Input }],
            maxHeight: [{ type: core.Input }],
            hoverMessage: [{ type: core.Input }],
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