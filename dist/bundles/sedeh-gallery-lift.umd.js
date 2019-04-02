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
        function GalleryLiftComponent(el, cdr) {
            var _this = this;
            this.cdr = cdr;
            this.layList = [1];
            this.displayType = 'c1';
            this.selectedIndex = 0;
            this.host = undefined;
            this.magnified = false;
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
            this.magnifyImageEnabled = false;
            this.borderOnView = null;
            this.maxHeight = 400;
            this.hoverMessage = 'See more...';
            this.layout = 'large-on-single';
            this.host = el.nativeElement;
            this.host.setAttribute("class", "mobile");
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
                if (changes.gallery && this.layout === 'random') {
                    this.pickRandomLayout();
                }
                else if (changes.layout) {
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
                        case 'large-on-top':
                            this.displayType = 'rc5';
                            this.layList = [1, 2, 3];
                            break;
                        case 'large-on-top-triple':
                            this.displayType = 'rc6';
                            this.layList = [1, 2, 3, 4];
                            break;
                        case 'large-on-top-quadruple':
                            this.displayType = 'rc7';
                            this.layList = [1, 2, 3, 4, 5];
                            break;
                        case 'layered-on-middle':
                            this.displayType = 'mc1';
                            this.layList = [1, 2, 3, 4];
                            break;
                        case 'layered-on-corners':
                            this.displayType = 'mc2';
                            this.layList = [1, 2, 3, 4, 5];
                            break;
                        case 'random':
                            if (this.gallery) {
                                this.pickRandomLayout();
                            }
                            break;
                    }
                }
                else if (changes.maxHeight) {
                    if (this.maxHeight < 100) {
                        this.maxHeight = 100;
                        this.cdr.detectChanges();
                    }
                    else if (this.host.clientHeight > 100 && this.host.clientHeight < this.maxHeight) {
                        this.maxHeight = this.host.clientHeight;
                        this.cdr.detectChanges();
                    }
                }
            };
        /**
         * @param {?} min
         * @param {?} max
         * @return {?}
         */
        GalleryLiftComponent.prototype.range = /**
         * @param {?} min
         * @param {?} max
         * @return {?}
         */
            function (min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            };
        /**
         * @return {?}
         */
        GalleryLiftComponent.prototype.pickRandomLayout = /**
         * @return {?}
         */
            function () {
                if (this.gallery.length === 1) {
                    this.displayType = 'c1';
                    this.layList = [1];
                }
                else if (this.gallery.length === 2) {
                    switch (this.range(1, 2)) {
                        case 1:
                            this.displayType = 'c1';
                            this.layList = [1];
                            break;
                        case 2:
                            this.displayType = 'c2';
                            this.layList = [1, 2];
                            break;
                    }
                }
                else if (this.gallery.length === 3) {
                    switch (this.range(1, 5)) {
                        case 1:
                            this.displayType = 'c1';
                            this.layList = [1];
                            break;
                        case 2:
                            this.displayType = 'c2';
                            this.layList = [1, 2];
                            break;
                        case 3:
                            this.displayType = 'c3';
                            this.layList = [1, 2, 3];
                            break;
                        case 4:
                            this.displayType = 'rc3';
                            this.layList = [1, 2, 3];
                            break;
                        case 5:
                            this.displayType = 'rc5';
                            this.layList = [1, 2, 3];
                            break;
                    }
                }
                else if (this.gallery.length === 4) {
                    switch (this.range(1, 9)) {
                        case 1:
                            this.displayType = 'c1';
                            this.layList = [1];
                            break;
                        case 2:
                            this.displayType = 'c2';
                            this.layList = [1, 2];
                            break;
                        case 3:
                            this.displayType = 'c3';
                            this.layList = [1, 2, 3];
                            break;
                        case 4:
                            this.displayType = 'rc3';
                            this.layList = [1, 2, 3];
                            break;
                        case 5:
                            this.displayType = 'rc5';
                            this.layList = [1, 2, 3];
                            break;
                        case 6:
                            this.displayType = 'c4';
                            this.layList = [1, 2, 3, 4];
                            break;
                        case 7:
                            this.displayType = 'rc4';
                            this.layList = [1, 2, 3, 4];
                            break;
                        case 8:
                            this.displayType = 'rc6';
                            this.layList = [1, 2, 3, 4];
                            break;
                        case 9:
                            this.displayType = 'mc1';
                            this.layList = [1, 2, 3, 4];
                            break;
                    }
                }
                else if (this.gallery.length >= 5) {
                    switch (this.range(1, 12)) {
                        case 1:
                            this.displayType = 'c1';
                            this.layList = [1];
                            break;
                        case 2:
                            this.displayType = 'c2';
                            this.layList = [1, 2];
                            break;
                        case 3:
                            this.displayType = 'c3';
                            this.layList = [1, 2, 3];
                            break;
                        case 4:
                            this.displayType = 'rc3';
                            this.layList = [1, 2, 3];
                            break;
                        case 5:
                            this.displayType = 'rc5';
                            this.layList = [1, 2, 3];
                            break;
                        case 6:
                            this.displayType = 'c4';
                            this.layList = [1, 2, 3, 4];
                            break;
                        case 7:
                            this.displayType = 'rc4';
                            this.layList = [1, 2, 3, 4];
                            break;
                        case 8:
                            this.displayType = 'rc6';
                            this.layList = [1, 2, 3, 4];
                            break;
                        case 9:
                            this.displayType = 'mc1';
                            this.layList = [1, 2, 3, 4];
                            break;
                        case 10:
                            this.displayType = 'c5';
                            this.layList = [1, 2, 3, 4, 5];
                            break;
                        case 11:
                            this.displayType = 'rc7';
                            this.layList = [1, 2, 3, 4, 5];
                            break;
                        case 12:
                            this.displayType = 'mc2';
                            this.layList = [1, 2, 3, 4, 5];
                            break;
                    }
                }
            };
        /**
         * @param {?} index
         * @return {?}
         */
        GalleryLiftComponent.prototype.minHeightOf = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                /** @type {?} */
                var min = null;
                switch (this.displayType) {
                    case 'c1':
                        min = this.maxHeight;
                        break; // large-on-single
                }
                return min ? min + 'px' : null;
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
                switch (this.displayType) {
                    case 'mc1': // layered-on-middle
                    case 'mc2':
                        // layered-on-corners
                        max = this.maxHeight / 3;
                        break;
                    case 'rc5': // large-on-top
                    case 'rc6': // large-on-top-triple
                    case 'rc7':
                        // large-on-top-quadruple
                        max = this.maxHeight / 2;
                        break;
                    case 'c1': break; // large-on-single
                    case 'c2': break; // split-on-dual
                    case 'c3':
                        // split-on-right
                        max = index < 2 ? (this.maxHeight / 2) : max;
                        break;
                    case 'c4':
                        // split-on-quadruple
                        max = this.maxHeight / 2;
                        break;
                    case 'c5':
                        // large-on-middle
                        max = index === 2 ? max : (this.maxHeight / 2);
                        break;
                    case 'rc3':
                        // large-on-left
                        max = index === 0 ? max : (this.maxHeight / 2);
                        break;
                    case 'rc4':
                        // large-on-sides
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
         * @param {?} liftView
         * @return {?}
         */
        GalleryLiftComponent.prototype.magnify = /**
         * @param {?} liftView
         * @return {?}
         */
            function (liftView) {
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
        GalleryLiftComponent.prototype.evalTop = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var max = this.maxHeight;
                switch (this.displayType) {
                    case 'mc1': // layered-on-middle
                    case 'mc2':
                        // layered-on-corners
                        max = 0;
                        break;
                    case 'c2': // split-on-dual
                    case 'c1': // large-on-single
                    case 'c3': // split-on-right
                    case 'rc4':
                        // large-on-sides
                        max = ((max - 30) / 3);
                        break;
                    case 'c4': // split-on-quadruple
                    case 'c5': // large-on-middle
                    case 'rc3': // large-on-left
                    case 'rc5': // large-on-top
                    case 'rc6': // large-on-top-triple
                    case 'rc7':
                        // large-on-top-quadruple
                        max = ((max - 30) / 6);
                        break;
                }
                return max + 'px';
            };
        /**
         * @return {?}
         */
        GalleryLiftComponent.prototype.evalFont = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var max = this.maxHeight;
                switch (this.displayType) {
                    case 'mc1': // layered-on-middle
                    case 'mc2':
                        // layered-on-corners
                        max = max / 60;
                        break;
                    case 'c2': // split-on-dual
                    case 'c1': // large-on-single
                    case 'c3': // split-on-right
                    case 'rc4':
                        // large-on-sides
                        max = (max / 50);
                        break;
                    case 'c4': // split-on-quadruple
                    case 'c5': // large-on-middle
                    case 'rc3': // large-on-left
                    case 'rc5': // large-on-top
                    case 'rc6': // large-on-top-triple
                    case 'rc7':
                        // large-on-top-quadruple
                        max = (max / 100);
                        break;
                }
                max = max > 6 ? 6 : max;
                return max + 'rem';
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
        GalleryLiftComponent.prototype.touchHover = /**
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
        /**
         * @return {?}
         */
        GalleryLiftComponent.prototype.isMobile = /**
         * @return {?}
         */
            function () {
                return false;
            };
        GalleryLiftComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gallery-lift',
                        template: "\r\n<div class=\"viewport {{displayType}}\">\r\n    <div *ngFor=\"let row of layList; let i = index\"\r\n        (keyup)=\"keyup($event)\"\r\n        (click)=\"liftUpImagery(i)\"\r\n        class=\"view\"\r\n        [style.border]='borderOnView'\r\n        [style.min-height]='minHeightOf(i)'\r\n        [style.max-height]='maxHeightOf(i)'\r\n        [attr.tabindex]=\"liftup ? -1: 0\">\r\n        <span class=\"off-screen\" *ngIf=\"template && gallery[i].data\">\r\n            <ng-container \r\n                [ngTemplateOutlet]=\"template\" \r\n                [ngTemplateOutletContext]=\"{data: gallery[i].data, selected: i+1, total: gallery.length}\"></ng-container>\r\n        </span>\r\n        <div *ngIf=\"showTitleOnHover && gallery[i].data && gallery[i].data.title\" class=\"title\">{{gallery[i].data.title}}</div>\r\n        <img *ngIf=\"gallery[i].type === undefined || gallery[i].type === 'image'\" aria-hidden=\"true\" width=\"100%\" height=\"100%\" [src]=\"gallery[i].src\" />\r\n        <video width=\"100%\" \r\n            *ngIf=\"gallery[i].type === 'video'\"\r\n            [attr.poster]=\"gallery[i].poster ? gallery[i].poster : null\"\r\n            [attr.src]=\"gallery[i].src\" disabled></video>\r\n        <div *ngIf=\"showRemainingCount && layList.length > 1 && i === (layList.length - 1)\" \r\n            class=\"counter\" \r\n            [style.font-size]=\"evalFont()\"\r\n            [style.padding-top]=\"evalTop()\">\r\n            + {{gallery.length - i - 1}}\r\n            <span class=\"off-screen\">more entries</span>\r\n        </div>\r\n        <div *ngIf=\"showMessageOnHover\" class=\"more\">\r\n            {{hoverMessage}}\r\n            <span aria-hidden=\"true\" class=\"enlarge fa fa-clone\" *ngIf=\"layout === 'large-on-single'\"></span>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"lift\" [class.piled]=\"!sideBySide\" *ngIf=\"liftup\">\r\n    <div class=\"left-controls\">\r\n        <a *ngIf=\"selectedIndex>0\" \r\n            title=\"View previous\"\r\n            class=\"prev fa fa-chevron-left\" tabindex=\"0\"\r\n            (keyup)=\"keyup($event)\"\r\n            (click)=\"previous()\"></a>\r\n    </div>\r\n    <div class=\"lifter\" \r\n        [class.vertical]=\"!sideBySide\"\r\n        [class.fullscreen]=\"expanded\">\r\n        <div class=\"lift-view\" [class.magnified]=\"magnified\" #liftView\r\n            (touchmove)=\"touchHover($event)\"\r\n            (mouseover)=\"hoverOver($event)\"><img \r\n                *ngIf=\"gallery[selectedIndex].type === undefined || gallery[selectedIndex].type === 'image'\"  \r\n                aria-hidden=\"true\"\r\n                width=\"100%\" \r\n                height=\"100%\" \r\n                [src]=\"gallery[selectedIndex].src\" /><video \r\n\r\n                *ngIf=\"gallery[selectedIndex].type === 'video'\" \r\n                width=\"100%\" \r\n                [attr.src]=\"gallery[selectedIndex].src\" \r\n                [attr.poster]=\"gallery[selectedIndex].poster ? gallery[selectedIndex].poster : null\"\r\n                (play)=\"videoEvent($event)\"\r\n                (pause)=\"videoEvent($event)\"\r\n                (ended)=\"videoEvent($event)\"\r\n                (seeked)=\"videoEvent($event)\"\r\n                (error)=\"videoEvent($event)\"\r\n                (fullscreenchange)=\"videoEvent($event)\"\r\n                controls></video>\r\n        </div>\r\n        <div class=\"lift-info\" *ngIf=\"template && gallery[selectedIndex].data\">\r\n            <ng-container \r\n                [ngTemplateOutlet]=\"template\" \r\n                [ngTemplateOutletContext]=\"{data: gallery[selectedIndex].data, selected: selectedIndex+1, total: gallery.length}\"></ng-container>\r\n        </div>\r\n    </div>\r\n    <div class=\"right-controls\">\r\n        <a tabindex=\"0\"  #closeButton\r\n            class=\"close fa fa-close\" \r\n            title=\"Close viewer\"\r\n            (click)=\"liftDownImagery()\" \r\n            (keyup)=\"keyup($event)\"></a>\r\n        <span class=\"top-wrap\">\r\n            <a class=\"fa\" tabindex=\"0\"\r\n                (click)=\"fullScreen()\" \r\n                (keyup)=\"keyup($event)\"\r\n                [attr.title]=\"expanded ? 'Normal screen view' : 'Full screen view'\"\r\n                [class.fa-expand]=\"!expanded\" \r\n                [class.fa-compress]=\"expanded\"></a>\r\n            <a *ngIf=\"magnifyImageEnabled\" class=\"magnify fa\" tabindex=\"0\"\r\n                (click)=\"magnify(liftView)\" \r\n                (keyup)=\"keyup($event)\"\r\n                [attr.title]=\"magnified ? 'Normal Image' : 'Magnify Image'\"\r\n                [class.fa-expand]=\"!magnified\" \r\n                [class.fa-compress]=\"magnified\"></a>\r\n            <a *ngIf=\"template && gallery[selectedIndex].data\"\r\n                class=\"fa\" tabindex=\"0\"\r\n                (click)=\"sideBySide = !sideBySide\" \r\n                (keyup)=\"keyup($event)\"\r\n                [attr.title]=\"sideBySide ? 'Align Vertical' : 'Align Horizontal'\"\r\n                [class.fa-columns]=\"!sideBySide\" \r\n                [class.fa-bars]=\"sideBySide\"></a>\r\n            <a [href]=\"gallery[selectedIndex].src\" \r\n                tabindex=\"0\" title=\"download\" \r\n                class=\"download fa fa-download\" \r\n                (keyup)=\"keyup($event)\"\r\n                download></a>\r\n        </span>\r\n        <a *ngIf=\"showMore(closeButton)\" \r\n            title=\"View next\"\r\n            class=\"next fa fa-chevron-right\" tabindex=\"0\" \r\n            (keyup)=\"keyup($event)\"\r\n            (click)=\"next()\"></a>\r\n    </div>\r\n</div>\r\n",
                        styles: [":host{box-sizing:border-box;display:flex;padding:0;margin:5px}:host .off-screen{display:block;width:1px;height:1px;position:absolute;left:-99999px;top:-99999px}:host .lift{width:100%;height:100%;min-height:300px;position:fixed;top:0;left:0;display:flex;flex-direction:row;z-index:99;background-color:rgba(0,0,0,.95)}:host .lift .left-controls{width:30px;height:100vh;color:#fff;background-color:transparent;padding:20% 0;box-sizing:border-box;position:relative}:host .lift .left-controls .prev{top:50%;width:22px;left:8px}:host .lift .left-controls a{font-size:1.8rem;cursor:pointer;text-align:center;width:100%;position:absolute;display:flex}:host .lift .left-controls a:hover{color:#ccc}:host .lift .lifter{flex:1;display:flex;flex-direction:row}:host .lift .lifter .lift-view{flex:1;margin:20px;border:2px solid #d1e4be;position:relative;background-color:#fff}:host .lift .lifter .lift-view img{position:relative}:host .lift .lifter .lift-info{width:300px;background-color:#fff;margin:20px 15px 16px;padding:10px;border:2px solid #d1e4be}:host .lift .lifter.vertical{flex-direction:column;display:block}:host .lift .lifter.vertical .lift-info{width:auto;height:200px;margin:20px;overflow-y:auto}:host .lift .right-controls{width:30px;height:100vh;color:#fff;background-color:transparent;display:flex;flex-direction:column;padding:20% 0;box-sizing:border-box;position:relative}:host .lift .right-controls .close{position:absolute;right:0;top:5px;width:33px}:host .lift .right-controls .top-wrap{position:absolute;top:40px;right:2px}:host .lift .right-controls .top-wrap .magnify{display:none;width:33px;font-size:1.5rem;margin-bottom:8px}:host .lift .right-controls .top-wrap .fa-compress,:host .lift .right-controls .top-wrap .fa-expand{width:33px;font-size:1.5rem;margin-bottom:8px}:host .lift .right-controls .top-wrap .fa-bars,:host .lift .right-controls .top-wrap .fa-columns{width:33px;font-size:1.5rem;margin-bottom:8px}:host .lift .right-controls .top-wrap .download{font-size:1.5rem;width:33px;color:#fff;margin-bottom:8px}:host .lift .right-controls .next{top:50%;width:22px;position:absolute}:host .lift .right-controls a{font-size:1.8rem;cursor:pointer;text-align:center;width:100%}:host .lift .right-controls a:hover{color:#ccc}:host .lift.piled{position:absolute;height:inherit}:host .lift.piled .lifter.vertical .lift-info{margin:20px}:host .lift.piled .lifter.fullscreen .lift-info,:host .lift.piled .lifter.fullscreen .lift-view{margin:20;height:auto}:host .viewport{display:-ms-inline-grid;display:inline-grid;grid-gap:0;width:100%;background-color:#000;padding:0}:host .viewport .view{text-align:center;padding:0;position:relative;box-sizing:border-box;display:flex;overflow:hidden;cursor:pointer}:host .viewport .view img,:host .viewport .view video{-o-object-fit:cover;object-fit:cover}:host .viewport .view:focus,:host .viewport .view:hover{-webkit-filter:brightness(80%);-moz-filter:brightness(80%);-o-filter:brightness(80%);-ms-filter:brightness(80%);filter:brightness(80%)}:host .viewport .view:focus .more,:host .viewport .view:focus .title,:host .viewport .view:hover .more,:host .viewport .view:hover .title{display:inline}:host .viewport .view .counter{width:100%;height:100%;background-color:rgba(0,0,0,.4);color:#fff;position:absolute;top:0;overflow:hidden;box-sizing:border-box}:host .viewport .view .title{display:none;width:100%;background-color:rgba(0,0,0,.7);color:#fff;position:absolute;left:0;top:0;padding:5px;overflow:hidden;z-index:2}:host .viewport .view .more{display:none;width:100%;background-color:rgba(0,0,0,.7);color:#fff;position:absolute;left:0;bottom:0;padding:5px;z-index:2}:host .viewport .view .more .enlarge{position:absolute;right:20px}:host .viewport .view:nth-child(1){-ms-grid-row:1;-ms-grid-column:1;grid-area:tl}:host .viewport .view:nth-child(2){-ms-grid-row:1;-ms-grid-column:3;grid-area:bl}:host .viewport .view:nth-child(3){-ms-grid-row:1;-ms-grid-row-span:3;-ms-grid-column:3;-ms-grid-column-span:3;grid-area:center}:host .viewport .view:nth-child(4){-ms-grid-row:3;-ms-grid-column:3;grid-area:tr}:host .viewport .view:nth-child(5){-ms-grid-row:3;-ms-grid-column:7;grid-area:br}:host .viewport.c1{grid-template-areas:'tl'}:host .viewport.c1 .more,:host .viewport.c1 .title{font-size:1rem}:host .viewport.c2{-ms-grid-columns:50% 0 50%;grid-template-columns:50% 50%;grid-template-areas:'tl bl'}:host .viewport.c2 .more,:host .viewport.c2 .title{font-size:1rem}:host .viewport.c3{-ms-grid-columns:32% 0 auto;grid-template-columns:32% auto;-ms-grid-rows:auto 0 auto;grid-template-areas:'tl center center' 'bl center center'}:host .viewport.c3 .more,:host .viewport.c3 .title{font-size:1rem}:host .viewport.c4{-ms-grid-columns:50% 0 50%;grid-template-columns:50% 50%;-ms-grid-rows:auto 0 auto;grid-template-areas:'tl center' 'bl tr'}:host .viewport.c4 .more,:host .viewport.c4 .title{font-size:1rem}:host .viewport.c5{-ms-grid-columns:25% 0 auto 0 25%;grid-template-columns:25% auto 25%;-ms-grid-rows:auto 0 auto;grid-template-areas:'tl center center tr' 'bl center center br'}:host .viewport.c5 .more,:host .viewport.c5 .title{font-size:.9rem}:host .viewport.rc3{-ms-grid-columns:auto 0 30%;grid-template-columns:auto 30%;-ms-grid-rows:auto 0 auto;grid-template-areas:'tl tl bl' 'tl tl center'}:host .viewport.rc3 .more,:host .viewport.rc3 .title{font-size:.9rem}:host .viewport.rc4{-ms-grid-columns:30% 0 auto 0 30%;grid-template-columns:30% auto 30%;-ms-grid-rows:auto 0 auto;grid-template-areas:'tl bl tr' 'tl center tr'}:host .viewport.rc4 .more,:host .viewport.rc4 .title{font-size:.9rem}:host .viewport.rc5{-ms-grid-columns:50% 0 50%;grid-template-columns:50% 50%;-ms-grid-rows:auto 0 auto;grid-template-areas:'tl tl' 'bl center'}:host .viewport.rc5 .more,:host .viewport.rc5 .title{font-size:.9rem}:host .viewport.rc6{-ms-grid-columns:33% 0 auto 0 33%;grid-template-columns:33% auto 33%;-ms-grid-rows:auto 0 auto;grid-template-areas:'tl tl tl' 'bl center tr'}:host .viewport.rc6 .more,:host .viewport.rc6 .title{font-size:.9rem}:host .viewport.rc7{-ms-grid-columns:25% 0 25% 0 25% 0 25%;grid-template-columns:25% 25% 25% 25%;-ms-grid-rows:auto 0 auto;grid-template-areas:'tl tl tl tl' 'bl center tr br'}:host .viewport.rc7 .more,:host .viewport.rc7 .title{font-size:.9rem}:host .viewport.mc1{-ms-grid-columns:50% 0 50%;grid-template-columns:50% 50%;-ms-grid-rows:auto 0 auto 0 auto;grid-template-areas:'tl tl' 'bl center' 'tr tr'}:host .viewport.mc1 .more,:host .viewport.mc1 .title{font-size:.9rem}:host .viewport.mc2{-ms-grid-columns:50% 0 50%;grid-template-columns:50% 50%;-ms-grid-rows:auto 0 auto 0 auto;grid-template-areas:'tl bl' 'center center' 'tr br'}:host .viewport.mc2 .more,:host .viewport.mc2 .title{font-size:.9rem}:host.mobile .lift .lifter{flex-direction:column}:host.mobile .lift .lifter .lift-view{flex:unset}:host.mobile .lift .lifter .lift-view.magnified{overflow:auto}:host.mobile .lift .lifter .lift-info{width:auto;margin:20px;flex:1;overflow-y:auto}:host.mobile .lift .right-controls .top-wrap .fa-compress,:host.mobile .lift .right-controls .top-wrap .fa-expand{display:none}:host.mobile .lift .right-controls .top-wrap .fa-compress.magnify,:host.mobile .lift .right-controls .top-wrap .fa-expand.magnify{display:inline-block}:host.mobile .lift .right-controls .top-wrap .fa-bars,:host.mobile .lift .right-controls .top-wrap .fa-columns{display:none}:host.mobile .lift.piled{position:fixed!important}@media only screen and (max-width:600px){:host .lift .lifter{flex-direction:column}:host .lift .lifter .lift-view{flex:unset}:host .lift .lifter .lift-view.magnified{overflow:auto}:host .lift .lifter .lift-info{width:auto;margin:20px;flex:1;overflow-y:auto}:host .lift .right-controls .top-wrap .fa-compress,:host .lift .right-controls .top-wrap .fa-expand{display:none}:host .lift .right-controls .top-wrap .fa-compress.magnify,:host .lift .right-controls .top-wrap .fa-expand.magnify{display:inline-block}:host .lift .right-controls .top-wrap .fa-bars,:host .lift .right-controls .top-wrap .fa-columns{display:none}:host .lift.piled{position:fixed!important}}"]
                    }] }
        ];
        /** @nocollapse */
        GalleryLiftComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.ChangeDetectorRef }
            ];
        };
        GalleryLiftComponent.propDecorators = {
            onselect: [{ type: core.Output }],
            onaction: [{ type: core.Output }],
            sideBySide: [{ type: core.Input }],
            liftOnZero: [{ type: core.Input }],
            showRemainingCount: [{ type: core.Input }],
            showTitleOnHover: [{ type: core.Input }],
            showMessageOnHover: [{ type: core.Input }],
            magnifyImageEnabled: [{ type: core.Input }],
            gallery: [{ type: core.Input }],
            template: [{ type: core.Input }],
            borderOnView: [{ type: core.Input }],
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