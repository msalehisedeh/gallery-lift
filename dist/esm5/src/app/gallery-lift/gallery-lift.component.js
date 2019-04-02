/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, ElementRef, ChangeDetectorRef, EventEmitter } from '@angular/core';
var GalleryLiftComponent = /** @class */ (function () {
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
        this.onselect = new EventEmitter();
        this.onaction = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'gallery-lift',
                    template: "\r\n<div class=\"viewport {{displayType}}\">\r\n    <div *ngFor=\"let row of layList; let i = index\"\r\n        (keyup)=\"keyup($event)\"\r\n        (click)=\"liftUpImagery(i)\"\r\n        class=\"view\"\r\n        [style.border]='borderOnView'\r\n        [style.min-height]='minHeightOf(i)'\r\n        [style.max-height]='maxHeightOf(i)'\r\n        [attr.tabindex]=\"liftup ? -1: 0\">\r\n        <span class=\"off-screen\" *ngIf=\"template && gallery[i].data\">\r\n            <ng-container \r\n                [ngTemplateOutlet]=\"template\" \r\n                [ngTemplateOutletContext]=\"{data: gallery[i].data, selected: i+1, total: gallery.length}\"></ng-container>\r\n        </span>\r\n        <div *ngIf=\"showTitleOnHover && gallery[i].data && gallery[i].data.title\" class=\"title\">{{gallery[i].data.title}}</div>\r\n        <img *ngIf=\"gallery[i].type === undefined || gallery[i].type === 'image'\" aria-hidden=\"true\" width=\"100%\" height=\"100%\" [src]=\"gallery[i].src\" />\r\n        <video width=\"100%\" \r\n            *ngIf=\"gallery[i].type === 'video'\"\r\n            [attr.poster]=\"gallery[i].poster ? gallery[i].poster : null\"\r\n            [attr.src]=\"gallery[i].src\" disabled></video>\r\n        <div *ngIf=\"showRemainingCount && layList.length > 1 && i === (layList.length - 1)\" \r\n            class=\"counter\" \r\n            [style.font-size]=\"evalFont()\"\r\n            [style.padding-top]=\"evalTop()\">\r\n            + {{gallery.length - i - 1}}\r\n            <span class=\"off-screen\">more entries</span>\r\n        </div>\r\n        <div *ngIf=\"showMessageOnHover\" class=\"more\">\r\n            {{hoverMessage}}\r\n            <span aria-hidden=\"true\" class=\"enlarge fa fa-clone\" *ngIf=\"layout === 'large-on-single'\"></span>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"lift\" [class.piled]=\"!sideBySide\" *ngIf=\"liftup\">\r\n    <div class=\"left-controls\">\r\n        <a *ngIf=\"selectedIndex>0\" \r\n            title=\"View previous\"\r\n            class=\"prev fa fa-chevron-left\" tabindex=\"0\"\r\n            (keyup)=\"keyup($event)\"\r\n            (click)=\"previous()\"></a>\r\n    </div>\r\n    <div class=\"lifter\" \r\n        [class.vertical]=\"!sideBySide\"\r\n        [class.fullscreen]=\"expanded\">\r\n        <div class=\"lift-view\" [class.magnified]=\"magnified\" #liftView\r\n            (touchmove)=\"touchHover($event)\"\r\n            (mouseover)=\"hoverOver($event)\"><img \r\n                *ngIf=\"gallery[selectedIndex].type === undefined || gallery[selectedIndex].type === 'image'\"  \r\n                aria-hidden=\"true\"\r\n                width=\"100%\" \r\n                height=\"100%\" \r\n                [src]=\"gallery[selectedIndex].src\" /><video \r\n\r\n                *ngIf=\"gallery[selectedIndex].type === 'video'\" \r\n                width=\"100%\" \r\n                [attr.src]=\"gallery[selectedIndex].src\" \r\n                [attr.poster]=\"gallery[selectedIndex].poster ? gallery[selectedIndex].poster : null\"\r\n                (play)=\"videoEvent($event)\"\r\n                (pause)=\"videoEvent($event)\"\r\n                (ended)=\"videoEvent($event)\"\r\n                (seeked)=\"videoEvent($event)\"\r\n                (error)=\"videoEvent($event)\"\r\n                (fullscreenchange)=\"videoEvent($event)\"\r\n                controls></video>\r\n        </div>\r\n        <div class=\"lift-info\" *ngIf=\"template && gallery[selectedIndex].data\">\r\n            <ng-container \r\n                [ngTemplateOutlet]=\"template\" \r\n                [ngTemplateOutletContext]=\"{data: gallery[selectedIndex].data, selected: selectedIndex+1, total: gallery.length}\"></ng-container>\r\n        </div>\r\n    </div>\r\n    <div class=\"right-controls\">\r\n        <a tabindex=\"0\"  #closeButton\r\n            class=\"close fa fa-close\" \r\n            title=\"Close viewer\"\r\n            (click)=\"liftDownImagery()\" \r\n            (keyup)=\"keyup($event)\"></a>\r\n        <span class=\"top-wrap\">\r\n            <a class=\"fa\" tabindex=\"0\"\r\n                (click)=\"fullScreen()\" \r\n                (keyup)=\"keyup($event)\"\r\n                [attr.title]=\"expanded ? 'Normal screen view' : 'Full screen view'\"\r\n                [class.fa-expand]=\"!expanded\" \r\n                [class.fa-compress]=\"expanded\"></a>\r\n            <a *ngIf=\"magnifyImageEnabled\" class=\"magnify fa\" tabindex=\"0\"\r\n                (click)=\"magnify(liftView)\" \r\n                (keyup)=\"keyup($event)\"\r\n                [attr.title]=\"magnified ? 'Normal Image' : 'Magnify Image'\"\r\n                [class.fa-expand]=\"!magnified\" \r\n                [class.fa-compress]=\"magnified\"></a>\r\n            <a *ngIf=\"template && gallery[selectedIndex].data\"\r\n                class=\"fa\" tabindex=\"0\"\r\n                (click)=\"sideBySide = !sideBySide\" \r\n                (keyup)=\"keyup($event)\"\r\n                [attr.title]=\"sideBySide ? 'Align Vertical' : 'Align Horizontal'\"\r\n                [class.fa-columns]=\"!sideBySide\" \r\n                [class.fa-bars]=\"sideBySide\"></a>\r\n            <a [href]=\"gallery[selectedIndex].src\" \r\n                tabindex=\"0\" title=\"download\" \r\n                class=\"download fa fa-download\" \r\n                (keyup)=\"keyup($event)\"\r\n                download></a>\r\n        </span>\r\n        <a *ngIf=\"showMore(closeButton)\" \r\n            title=\"View next\"\r\n            class=\"next fa fa-chevron-right\" tabindex=\"0\" \r\n            (keyup)=\"keyup($event)\"\r\n            (click)=\"next()\"></a>\r\n    </div>\r\n</div>\r\n",
                    styles: [":host{box-sizing:border-box;display:flex;padding:0;margin:5px}:host .off-screen{display:block;width:1px;height:1px;position:absolute;left:-99999px;top:-99999px}:host .lift{width:100%;height:100%;min-height:300px;position:fixed;top:0;left:0;display:flex;flex-direction:row;z-index:99;background-color:rgba(0,0,0,.95)}:host .lift .left-controls{width:30px;height:100vh;color:#fff;background-color:transparent;padding:20% 0;box-sizing:border-box;position:relative}:host .lift .left-controls .prev{top:50%;width:22px;left:8px}:host .lift .left-controls a{font-size:1.8rem;cursor:pointer;text-align:center;width:100%;position:absolute;display:flex}:host .lift .left-controls a:hover{color:#ccc}:host .lift .lifter{flex:1;display:flex;flex-direction:row}:host .lift .lifter .lift-view{flex:1;margin:20px;border:2px solid #d1e4be;position:relative;background-color:#fff}:host .lift .lifter .lift-view img{position:relative}:host .lift .lifter .lift-info{width:300px;background-color:#fff;margin:20px 15px 16px;padding:10px;border:2px solid #d1e4be}:host .lift .lifter.vertical{flex-direction:column;display:block}:host .lift .lifter.vertical .lift-info{width:auto;height:200px;margin:20px;overflow-y:auto}:host .lift .right-controls{width:30px;height:100vh;color:#fff;background-color:transparent;display:flex;flex-direction:column;padding:20% 0;box-sizing:border-box;position:relative}:host .lift .right-controls .close{position:absolute;right:0;top:5px;width:33px}:host .lift .right-controls .top-wrap{position:absolute;top:40px;right:2px}:host .lift .right-controls .top-wrap .magnify{display:none;width:33px;font-size:1.5rem;margin-bottom:8px}:host .lift .right-controls .top-wrap .fa-compress,:host .lift .right-controls .top-wrap .fa-expand{width:33px;font-size:1.5rem;margin-bottom:8px}:host .lift .right-controls .top-wrap .fa-bars,:host .lift .right-controls .top-wrap .fa-columns{width:33px;font-size:1.5rem;margin-bottom:8px}:host .lift .right-controls .top-wrap .download{font-size:1.5rem;width:33px;color:#fff;margin-bottom:8px}:host .lift .right-controls .next{top:50%;width:22px;position:absolute}:host .lift .right-controls a{font-size:1.8rem;cursor:pointer;text-align:center;width:100%}:host .lift .right-controls a:hover{color:#ccc}:host .lift.piled{position:absolute;height:inherit}:host .lift.piled .lifter.vertical .lift-info{margin:20px}:host .lift.piled .lifter.fullscreen .lift-info,:host .lift.piled .lifter.fullscreen .lift-view{margin:20;height:auto}:host .viewport{display:-ms-inline-grid;display:inline-grid;grid-gap:0;width:100%;background-color:#000;padding:0}:host .viewport .view{text-align:center;padding:0;position:relative;box-sizing:border-box;display:flex;overflow:hidden;cursor:pointer}:host .viewport .view img,:host .viewport .view video{-o-object-fit:cover;object-fit:cover}:host .viewport .view:focus,:host .viewport .view:hover{-webkit-filter:brightness(80%);-moz-filter:brightness(80%);-o-filter:brightness(80%);-ms-filter:brightness(80%);filter:brightness(80%)}:host .viewport .view:focus .more,:host .viewport .view:focus .title,:host .viewport .view:hover .more,:host .viewport .view:hover .title{display:inline}:host .viewport .view .counter{width:100%;height:100%;background-color:rgba(0,0,0,.4);color:#fff;position:absolute;top:0;overflow:hidden;box-sizing:border-box}:host .viewport .view .title{display:none;width:100%;background-color:rgba(0,0,0,.7);color:#fff;position:absolute;left:0;top:0;padding:5px;overflow:hidden;z-index:2}:host .viewport .view .more{display:none;width:100%;background-color:rgba(0,0,0,.7);color:#fff;position:absolute;left:0;bottom:0;padding:5px;z-index:2}:host .viewport .view .more .enlarge{position:absolute;right:20px}:host .viewport .view:nth-child(1){-ms-grid-row:1;-ms-grid-column:1;grid-area:tl}:host .viewport .view:nth-child(2){-ms-grid-row:1;-ms-grid-column:3;grid-area:bl}:host .viewport .view:nth-child(3){-ms-grid-row:1;-ms-grid-row-span:3;-ms-grid-column:3;-ms-grid-column-span:3;grid-area:center}:host .viewport .view:nth-child(4){-ms-grid-row:3;-ms-grid-column:3;grid-area:tr}:host .viewport .view:nth-child(5){-ms-grid-row:3;-ms-grid-column:7;grid-area:br}:host .viewport.c1{grid-template-areas:'tl'}:host .viewport.c1 .more,:host .viewport.c1 .title{font-size:1rem}:host .viewport.c2{-ms-grid-columns:50% 0 50%;grid-template-columns:50% 50%;grid-template-areas:'tl bl'}:host .viewport.c2 .more,:host .viewport.c2 .title{font-size:1rem}:host .viewport.c3{-ms-grid-columns:32% 0 auto;grid-template-columns:32% auto;-ms-grid-rows:auto 0 auto;grid-template-areas:'tl center center' 'bl center center'}:host .viewport.c3 .more,:host .viewport.c3 .title{font-size:1rem}:host .viewport.c4{-ms-grid-columns:50% 0 50%;grid-template-columns:50% 50%;-ms-grid-rows:auto 0 auto;grid-template-areas:'tl center' 'bl tr'}:host .viewport.c4 .more,:host .viewport.c4 .title{font-size:1rem}:host .viewport.c5{-ms-grid-columns:25% 0 auto 0 25%;grid-template-columns:25% auto 25%;-ms-grid-rows:auto 0 auto;grid-template-areas:'tl center center tr' 'bl center center br'}:host .viewport.c5 .more,:host .viewport.c5 .title{font-size:.9rem}:host .viewport.rc3{-ms-grid-columns:auto 0 30%;grid-template-columns:auto 30%;-ms-grid-rows:auto 0 auto;grid-template-areas:'tl tl bl' 'tl tl center'}:host .viewport.rc3 .more,:host .viewport.rc3 .title{font-size:.9rem}:host .viewport.rc4{-ms-grid-columns:30% 0 auto 0 30%;grid-template-columns:30% auto 30%;-ms-grid-rows:auto 0 auto;grid-template-areas:'tl bl tr' 'tl center tr'}:host .viewport.rc4 .more,:host .viewport.rc4 .title{font-size:.9rem}:host .viewport.rc5{-ms-grid-columns:50% 0 50%;grid-template-columns:50% 50%;-ms-grid-rows:auto 0 auto;grid-template-areas:'tl tl' 'bl center'}:host .viewport.rc5 .more,:host .viewport.rc5 .title{font-size:.9rem}:host .viewport.rc6{-ms-grid-columns:33% 0 auto 0 33%;grid-template-columns:33% auto 33%;-ms-grid-rows:auto 0 auto;grid-template-areas:'tl tl tl' 'bl center tr'}:host .viewport.rc6 .more,:host .viewport.rc6 .title{font-size:.9rem}:host .viewport.rc7{-ms-grid-columns:25% 0 25% 0 25% 0 25%;grid-template-columns:25% 25% 25% 25%;-ms-grid-rows:auto 0 auto;grid-template-areas:'tl tl tl tl' 'bl center tr br'}:host .viewport.rc7 .more,:host .viewport.rc7 .title{font-size:.9rem}:host .viewport.mc1{-ms-grid-columns:50% 0 50%;grid-template-columns:50% 50%;-ms-grid-rows:auto 0 auto 0 auto;grid-template-areas:'tl tl' 'bl center' 'tr tr'}:host .viewport.mc1 .more,:host .viewport.mc1 .title{font-size:.9rem}:host .viewport.mc2{-ms-grid-columns:50% 0 50%;grid-template-columns:50% 50%;-ms-grid-rows:auto 0 auto 0 auto;grid-template-areas:'tl bl' 'center center' 'tr br'}:host .viewport.mc2 .more,:host .viewport.mc2 .title{font-size:.9rem}:host.mobile .lift .lifter{flex-direction:column}:host.mobile .lift .lifter .lift-view{flex:unset}:host.mobile .lift .lifter .lift-view.magnified{overflow:auto}:host.mobile .lift .lifter .lift-info{width:auto;margin:20px;flex:1;overflow-y:auto}:host.mobile .lift .right-controls .top-wrap .fa-compress,:host.mobile .lift .right-controls .top-wrap .fa-expand{display:none}:host.mobile .lift .right-controls .top-wrap .fa-compress.magnify,:host.mobile .lift .right-controls .top-wrap .fa-expand.magnify{display:inline-block}:host.mobile .lift .right-controls .top-wrap .fa-bars,:host.mobile .lift .right-controls .top-wrap .fa-columns{display:none}:host.mobile .lift.piled{position:fixed!important}@media only screen and (max-width:600px){:host .lift .lifter{flex-direction:column}:host .lift .lifter .lift-view{flex:unset}:host .lift .lifter .lift-view.magnified{overflow:auto}:host .lift .lifter .lift-info{width:auto;margin:20px;flex:1;overflow-y:auto}:host .lift .right-controls .top-wrap .fa-compress,:host .lift .right-controls .top-wrap .fa-expand{display:none}:host .lift .right-controls .top-wrap .fa-compress.magnify,:host .lift .right-controls .top-wrap .fa-expand.magnify{display:inline-block}:host .lift .right-controls .top-wrap .fa-bars,:host .lift .right-controls .top-wrap .fa-columns{display:none}:host .lift.piled{position:fixed!important}}"]
                }] }
    ];
    /** @nocollapse */
    GalleryLiftComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
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
        borderOnView: [{ type: Input }],
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
    GalleryLiftComponent.prototype.host;
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
    GalleryLiftComponent.prototype.borderOnView;
    /** @type {?} */
    GalleryLiftComponent.prototype.maxHeight;
    /** @type {?} */
    GalleryLiftComponent.prototype.hoverMessage;
    /** @type {?} */
    GalleryLiftComponent.prototype.layout;
    /** @type {?} */
    GalleryLiftComponent.prototype.cdr;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1saWZ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZWRlaC9nYWxsZXJ5LWxpZnQvIiwic291cmNlcyI6WyJzcmMvYXBwL2dhbGxlcnktbGlmdC9nYWxsZXJ5LWxpZnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFDTCxNQUFNLEVBQ04sVUFBVSxFQUNWLGlCQUFpQixFQUNqQixZQUFZLEVBRWIsTUFBTSxlQUFlLENBQUM7O0lBaUNyQiw4QkFBWSxFQUFjLEVBQVUsR0FBc0I7UUFBMUQsaUJBMEJDO1FBMUJtQyxRQUFHLEdBQUgsR0FBRyxDQUFtQjt1QkF6QmhELENBQUMsQ0FBQyxDQUFDOzJCQUNDLElBQUk7NkJBQ0YsQ0FBQztvQkFDVixTQUFTO3lCQUNKLEtBQUs7c0JBQ1IsS0FBSzt1QkFDSixLQUFLO3dCQUNKLEtBQUs7d0JBRUksSUFBSSxZQUFZLEVBQUU7d0JBQ2xCLElBQUksWUFBWSxFQUFFOzBCQUVoQixJQUFJOzBCQUNKLEtBQUs7a0NBQ0csS0FBSztnQ0FDUCxLQUFLO2tDQUNILElBQUk7bUNBQ0gsS0FBSzs0QkFHWixJQUFJO3lCQUNQLEdBQUc7NEJBQ0EsYUFBYTtzQkFDbkIsaUJBQWlCO1FBR2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDMUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0RCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsd0JBQXdCLEVBQUUsVUFBQyxLQUFZO2dCQUMvRCxFQUFFLENBQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLElB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QUk7WUFDbEIsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ3pCLElBQUksRUFBRSxJQUFJLElBQUksRUFBRTtTQUNqQixDQUFDLENBQUM7S0FDTDs7Ozs7SUFFQSx1Q0FBUTs7OztJQUFSLFVBQVMsV0FBVztRQUNsQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNyQjtRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztLQUNyRDs7Ozs7SUFDRCxvQ0FBSzs7OztJQUFMLFVBQU0sS0FBVTs7UUFDaEIsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN6QixFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNkLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDdEI7S0FDRjs7OztJQUNPLHVDQUFROzs7O1FBQ2QsTUFBTSxDQUFDLEtBQUssQ0FBQzs7O2dCQWpXaEIsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4Qiw2a0xBQTRDOztpQkFFN0M7Ozs7Z0JBVkMsVUFBVTtnQkFDVixpQkFBaUI7OzsyQkFvQmhCLE1BQU07MkJBQ04sTUFBTTs2QkFFTixLQUFLOzZCQUNMLEtBQUs7cUNBQ0wsS0FBSzttQ0FDTCxLQUFLO3FDQUNMLEtBQUs7c0NBQ0wsS0FBSzswQkFDTCxLQUFLOzJCQUNMLEtBQUs7K0JBQ0wsS0FBSzs0QkFDTCxLQUFLOytCQUNMLEtBQUs7eUJBQ0wsS0FBSzs7K0JBekNSOztTQWlCYSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBFbGVtZW50UmVmLFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBNaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnYWxsZXJ5LWxpZnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nYWxsZXJ5LWxpZnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2dhbGxlcnktbGlmdC5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2FsbGVyeUxpZnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIGxheUxpc3QgPSBbMV07XHJcbiAgZGlzcGxheVR5cGUgPSAnYzEnO1xyXG4gIHNlbGVjdGVkSW5kZXggPSAwO1xyXG4gIGhvc3QgPSB1bmRlZmluZWQ7XHJcbiAgbWFnbmlmaWVkID0gZmFsc2U7XHJcbiAgbGlmdHVwID0gZmFsc2U7XHJcbiAgZm9jdXNlZCA9IGZhbHNlO1xyXG4gIGV4cGFuZGVkID0gZmFsc2U7XHJcbiAgXHJcbiAgQE91dHB1dCgpIG9uc2VsZWN0PSBuZXcgRXZlbnRFbWl0dGVyKClcclxuICBAT3V0cHV0KCkgb25hY3Rpb249IG5ldyBFdmVudEVtaXR0ZXIoKVxyXG5cclxuICBASW5wdXQoKSBzaWRlQnlTaWRlID0gdHJ1ZTtcclxuICBASW5wdXQoKSBsaWZ0T25aZXJvID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2hvd1JlbWFpbmluZ0NvdW50ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2hvd1RpdGxlT25Ib3ZlciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNob3dNZXNzYWdlT25Ib3ZlciA9IHRydWU7XHJcbiAgQElucHV0KCkgbWFnbmlmeUltYWdlRW5hYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGdhbGxlcnk6IGFueVtdO1xyXG4gIEBJbnB1dCgpIHRlbXBsYXRlOiBhbnk7XHJcbiAgQElucHV0KCkgYm9yZGVyT25WaWV3ID0gbnVsbDtcclxuICBASW5wdXQoKSBtYXhIZWlnaHQgPSA0MDA7XHJcbiAgQElucHV0KCkgaG92ZXJNZXNzYWdlID0gJ1NlZSBtb3JlLi4uJztcclxuICBASW5wdXQoKSBsYXlvdXQgPSAnbGFyZ2Utb24tc2luZ2xlJztcclxuICBcclxuICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICB0aGlzLmhvc3QgPSBlbC5uYXRpdmVFbGVtZW50O1xyXG4gICAgdGhpcy5ob3N0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibW9iaWxlXCIpO1xyXG4gICAgaWYgKG5hdmlnYXRvci5wbGF0Zm9ybS50b1VwcGVyQ2FzZSgpLmluZGV4T2YoJ01BQycpPDApIHtcclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIndlYmtpdGZ1bGxzY3JlZW5jaGFuZ2VcIiwgKGV2ZW50OiBFdmVudCkgPT4ge1xyXG4gICAgICAgIGlmKCF3aW5kb3cuc2NyZWVuVG9wICYmICF3aW5kb3cuc2NyZWVuWSkge1xyXG4gICAgICAgICAgdGhpcy5mdWxsU2NyZWVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vemZ1bGxzY3JlZW5jaGFuZ2VcIiwgKGV2ZW50OiBFdmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdpbjogYW55ID0gd2luZG93O1xyXG4gICAgICAgIGNvbnN0IGlzRnVsbFNjcmVlbiA9IHdpbi5mdWxsU2NyZWVuIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAod2luLmlubmVyV2lkdGggPT0gc2NyZWVuLndpZHRoICYmIHdpbi5pbm5lckhlaWdodCA9PSBzY3JlZW4uaGVpZ2h0KVxyXG4gICAgICAgIGlmKCFpc0Z1bGxTY3JlZW4pIHtcclxuICAgICAgICAgIHRoaXMuZnVsbFNjcmVlbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJNU0Z1bGxzY3JlZW5DaGFuZ2VcIiwgKGV2ZW50OiBFdmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdpbjogYW55ID0gd2luZG93O1xyXG4gICAgICAgIGNvbnN0IGlzRnVsbFNjcmVlbiA9IHdpbi5mdWxsU2NyZWVuIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAod2luLmlubmVyV2lkdGggPT0gc2NyZWVuLndpZHRoICYmIHdpbi5pbm5lckhlaWdodCA9PSBzY3JlZW4uaGVpZ2h0KVxyXG4gICAgICAgIGlmKCFpc0Z1bGxTY3JlZW4pIHtcclxuICAgICAgICAgIHRoaXMuZnVsbFNjcmVlbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSkge1xyXG4gICAgaWYgKGNoYW5nZXMuZ2FsbGVyeSAmJiB0aGlzLmxheW91dCA9PT0gJ3JhbmRvbScpIHtcclxuICAgICAgdGhpcy5waWNrUmFuZG9tTGF5b3V0KCk7XHJcbiAgICB9IGVsc2UgaWYgKGNoYW5nZXMubGF5b3V0KSB7XHJcbiAgICAgIHN3aXRjaCh0aGlzLmxheW91dCkge1xyXG4gICAgICAgIGNhc2UgJ2xhcmdlLW9uLXNpbmdsZSc6IHRoaXMuZGlzcGxheVR5cGUgPSAnYzEnO3RoaXMubGF5TGlzdCA9IFsxXTsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnc3BsaXQtb24tZHVhbCc6IHRoaXMuZGlzcGxheVR5cGUgPSAnYzInO3RoaXMubGF5TGlzdCA9IFsxLDJdOyBicmVhaztcclxuICAgICAgICBjYXNlICdsYXJnZS1vbi1yaWdodCc6IHRoaXMuZGlzcGxheVR5cGUgPSAnYzMnO3RoaXMubGF5TGlzdCA9IFsxLDIsM107IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3NwbGl0LW9uLXF1YWRydXBsZSc6IHRoaXMuZGlzcGxheVR5cGUgPSAnYzQnO3RoaXMubGF5TGlzdCA9IFsxLDIsMyw0XTsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbGFyZ2Utb24tbWlkZGxlJzogdGhpcy5kaXNwbGF5VHlwZSA9ICdjNSc7dGhpcy5sYXlMaXN0ID0gWzEsMiwzLDQsNV07IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2xhcmdlLW9uLWxlZnQnOiB0aGlzLmRpc3BsYXlUeXBlID0gJ3JjMyc7dGhpcy5sYXlMaXN0ID0gWzEsMiwzXTsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbGFyZ2Utb24tc2lkZXMnOiB0aGlzLmRpc3BsYXlUeXBlID0gJ3JjNCc7dGhpcy5sYXlMaXN0ID0gWzEsMiwzLDRdOyBicmVhaztcclxuICAgICAgICBjYXNlICdsYXJnZS1vbi10b3AnOiB0aGlzLmRpc3BsYXlUeXBlID0gJ3JjNSc7dGhpcy5sYXlMaXN0ID0gWzEsMiwzXTsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbGFyZ2Utb24tdG9wLXRyaXBsZSc6IHRoaXMuZGlzcGxheVR5cGUgPSAncmM2Jzt0aGlzLmxheUxpc3QgPSBbMSwyLDMsNF07IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2xhcmdlLW9uLXRvcC1xdWFkcnVwbGUnOiB0aGlzLmRpc3BsYXlUeXBlID0gJ3JjNyc7dGhpcy5sYXlMaXN0ID0gWzEsMiwzLDQsNV07IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2xheWVyZWQtb24tbWlkZGxlJzogdGhpcy5kaXNwbGF5VHlwZSA9ICdtYzEnO3RoaXMubGF5TGlzdCA9IFsxLDIsMyw0XTsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbGF5ZXJlZC1vbi1jb3JuZXJzJzogdGhpcy5kaXNwbGF5VHlwZSA9ICdtYzInO3RoaXMubGF5TGlzdCA9IFsxLDIsMyw0LDVdOyBicmVhaztcclxuICAgICAgICBjYXNlICdyYW5kb20nOiBcclxuICAgICAgICAgIGlmICh0aGlzLmdhbGxlcnkpIHtcclxuICAgICAgICAgICAgdGhpcy5waWNrUmFuZG9tTGF5b3V0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChjaGFuZ2VzLm1heEhlaWdodCkge1xyXG4gICAgICBpZiAodGhpcy5tYXhIZWlnaHQgPCAxMDApIHtcclxuICAgICAgICB0aGlzLm1heEhlaWdodCA9IDEwMDtcclxuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5ob3N0LmNsaWVudEhlaWdodCA+IDEwMCAmJiB0aGlzLmhvc3QuY2xpZW50SGVpZ2h0IDwgdGhpcy5tYXhIZWlnaHQpIHtcclxuICAgICAgICB0aGlzLm1heEhlaWdodCA9IHRoaXMuaG9zdC5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHByaXZhdGUgcmFuZ2UobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG4gIH1cclxuICBwcml2YXRlIHBpY2tSYW5kb21MYXlvdXQoKSB7XHJcbiAgICBpZiAodGhpcy5nYWxsZXJ5Lmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICB0aGlzLmRpc3BsYXlUeXBlID0gJ2MxJzt0aGlzLmxheUxpc3QgPSBbMV07XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZ2FsbGVyeS5sZW5ndGggPT09IDIpIHtcclxuICAgICAgc3dpdGNoKHRoaXMucmFuZ2UoMSwyKSkge1xyXG4gICAgICAgIGNhc2UgMTogdGhpcy5kaXNwbGF5VHlwZSA9ICdjMSc7dGhpcy5sYXlMaXN0ID0gWzFdO2JyZWFrO1xyXG4gICAgICAgIGNhc2UgMjogdGhpcy5kaXNwbGF5VHlwZSA9ICdjMic7dGhpcy5sYXlMaXN0ID0gWzEsIDJdO2JyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZ2FsbGVyeS5sZW5ndGggPT09IDMpIHtcclxuICAgICAgc3dpdGNoKHRoaXMucmFuZ2UoMSw1KSkge1xyXG4gICAgICAgIGNhc2UgMTogdGhpcy5kaXNwbGF5VHlwZSA9ICdjMSc7dGhpcy5sYXlMaXN0ID0gWzFdO2JyZWFrO1xyXG4gICAgICAgIGNhc2UgMjogdGhpcy5kaXNwbGF5VHlwZSA9ICdjMic7dGhpcy5sYXlMaXN0ID0gWzEsIDJdO2JyZWFrO1xyXG4gICAgICAgIGNhc2UgMzogdGhpcy5kaXNwbGF5VHlwZSA9ICdjMyc7dGhpcy5sYXlMaXN0ID0gWzEsIDIsIDNdO2JyZWFrO1xyXG4gICAgICAgIGNhc2UgNDogdGhpcy5kaXNwbGF5VHlwZSA9ICdyYzMnO3RoaXMubGF5TGlzdCA9IFsxLCAyLCAzXTticmVhaztcclxuICAgICAgICBjYXNlIDU6IHRoaXMuZGlzcGxheVR5cGUgPSAncmM1Jzt0aGlzLmxheUxpc3QgPSBbMSwgMiwgM107YnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodGhpcy5nYWxsZXJ5Lmxlbmd0aCA9PT0gNCkge1xyXG4gICAgICBzd2l0Y2godGhpcy5yYW5nZSgxLDkpKSB7XHJcbiAgICAgICAgY2FzZSAxOiB0aGlzLmRpc3BsYXlUeXBlID0gJ2MxJzt0aGlzLmxheUxpc3QgPSBbMV07YnJlYWs7XHJcbiAgICAgICAgY2FzZSAyOiB0aGlzLmRpc3BsYXlUeXBlID0gJ2MyJzt0aGlzLmxheUxpc3QgPSBbMSwgMl07YnJlYWs7XHJcbiAgICAgICAgY2FzZSAzOiB0aGlzLmRpc3BsYXlUeXBlID0gJ2MzJzt0aGlzLmxheUxpc3QgPSBbMSwgMiwgM107YnJlYWs7XHJcbiAgICAgICAgY2FzZSA0OiB0aGlzLmRpc3BsYXlUeXBlID0gJ3JjMyc7dGhpcy5sYXlMaXN0ID0gWzEsIDIsIDNdO2JyZWFrO1xyXG4gICAgICAgIGNhc2UgNTogdGhpcy5kaXNwbGF5VHlwZSA9ICdyYzUnO3RoaXMubGF5TGlzdCA9IFsxLCAyLCAzXTticmVhaztcclxuICAgICAgICBjYXNlIDY6IHRoaXMuZGlzcGxheVR5cGUgPSAnYzQnO3RoaXMubGF5TGlzdCA9IFsxLCAyLCAzLCA0XTticmVhaztcclxuICAgICAgICBjYXNlIDc6IHRoaXMuZGlzcGxheVR5cGUgPSAncmM0Jzt0aGlzLmxheUxpc3QgPSBbMSwgMiwgMywgNF07YnJlYWs7XHJcbiAgICAgICAgY2FzZSA4OiB0aGlzLmRpc3BsYXlUeXBlID0gJ3JjNic7dGhpcy5sYXlMaXN0ID0gWzEsIDIsIDMsIDRdO2JyZWFrO1xyXG4gICAgICAgIGNhc2UgOTogdGhpcy5kaXNwbGF5VHlwZSA9ICdtYzEnO3RoaXMubGF5TGlzdCA9IFsxLCAyLCAzLCA0XTticmVhaztcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLmdhbGxlcnkubGVuZ3RoID49IDUpIHtcclxuICAgICAgc3dpdGNoKHRoaXMucmFuZ2UoMSwxMikpIHtcclxuICAgICAgICBjYXNlIDE6IHRoaXMuZGlzcGxheVR5cGUgPSAnYzEnO3RoaXMubGF5TGlzdCA9IFsxXTticmVhaztcclxuICAgICAgICBjYXNlIDI6IHRoaXMuZGlzcGxheVR5cGUgPSAnYzInO3RoaXMubGF5TGlzdCA9IFsxLCAyXTticmVhaztcclxuICAgICAgICBjYXNlIDM6IHRoaXMuZGlzcGxheVR5cGUgPSAnYzMnO3RoaXMubGF5TGlzdCA9IFsxLCAyLCAzXTticmVhaztcclxuICAgICAgICBjYXNlIDQ6IHRoaXMuZGlzcGxheVR5cGUgPSAncmMzJzt0aGlzLmxheUxpc3QgPSBbMSwgMiwgM107YnJlYWs7XHJcbiAgICAgICAgY2FzZSA1OiB0aGlzLmRpc3BsYXlUeXBlID0gJ3JjNSc7dGhpcy5sYXlMaXN0ID0gWzEsIDIsIDNdO2JyZWFrO1xyXG4gICAgICAgIGNhc2UgNjogdGhpcy5kaXNwbGF5VHlwZSA9ICdjNCc7dGhpcy5sYXlMaXN0ID0gWzEsIDIsIDMsIDRdO2JyZWFrO1xyXG4gICAgICAgIGNhc2UgNzogdGhpcy5kaXNwbGF5VHlwZSA9ICdyYzQnO3RoaXMubGF5TGlzdCA9IFsxLCAyLCAzLCA0XTticmVhaztcclxuICAgICAgICBjYXNlIDg6IHRoaXMuZGlzcGxheVR5cGUgPSAncmM2Jzt0aGlzLmxheUxpc3QgPSBbMSwgMiwgMywgNF07YnJlYWs7XHJcbiAgICAgICAgY2FzZSA5OiB0aGlzLmRpc3BsYXlUeXBlID0gJ21jMSc7dGhpcy5sYXlMaXN0ID0gWzEsIDIsIDMsIDRdO2JyZWFrO1xyXG4gICAgICAgIGNhc2UgMTA6IHRoaXMuZGlzcGxheVR5cGUgPSAnYzUnO3RoaXMubGF5TGlzdCA9IFsxLCAyLCAzLCA0LCA1XTticmVhaztcclxuICAgICAgICBjYXNlIDExOiB0aGlzLmRpc3BsYXlUeXBlID0gJ3JjNyc7dGhpcy5sYXlMaXN0ID0gWzEsIDIsIDMsIDQsIDVdO2JyZWFrO1xyXG4gICAgICAgIGNhc2UgMTI6IHRoaXMuZGlzcGxheVR5cGUgPSAnbWMyJzt0aGlzLmxheUxpc3QgPSBbMSwgMiwgMywgNCwgNV07YnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgbWluSGVpZ2h0T2YoaW5kZXg6IG51bWJlcikge1xyXG4gICAgbGV0IG1pbiA9IG51bGw7XHJcbiAgICBzd2l0Y2godGhpcy5kaXNwbGF5VHlwZSkge1xyXG4gICAgICBjYXNlICdjMSc6ICBtaW4gPSB0aGlzLm1heEhlaWdodDsgYnJlYWs7IC8vIGxhcmdlLW9uLXNpbmdsZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1pbiAgPyBtaW4gKyAncHgnIDogbnVsbDtcclxuICB9XHJcbiAgbWF4SGVpZ2h0T2YoaW5kZXg6IG51bWJlcikge1xyXG4gICAgbGV0IG1heCA9IHRoaXMubWF4SGVpZ2h0O1xyXG4gICAgc3dpdGNoKHRoaXMuZGlzcGxheVR5cGUpIHtcclxuICAgICAgY2FzZSAnbWMxJzogLy8gbGF5ZXJlZC1vbi1taWRkbGVcclxuICAgICAgY2FzZSAnbWMyJzogLy8gbGF5ZXJlZC1vbi1jb3JuZXJzXHJcbiAgICAgICAgbWF4ID0gdGhpcy5tYXhIZWlnaHQgLyAzO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdyYzUnOiAvLyBsYXJnZS1vbi10b3BcclxuICAgICAgY2FzZSAncmM2JzogLy8gbGFyZ2Utb24tdG9wLXRyaXBsZVxyXG4gICAgICBjYXNlICdyYzcnOiAvLyBsYXJnZS1vbi10b3AtcXVhZHJ1cGxlXHJcbiAgICAgICAgbWF4ID0gdGhpcy5tYXhIZWlnaHQgLyAyO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdjMSc6IGJyZWFrOyAvLyBsYXJnZS1vbi1zaW5nbGVcclxuICAgICAgY2FzZSAnYzInOiBicmVhazsgLy8gc3BsaXQtb24tZHVhbFxyXG4gICAgICBjYXNlICdjMyc6IC8vIHNwbGl0LW9uLXJpZ2h0XHJcbiAgICAgICAgbWF4ID0gaW5kZXggPCAyID8gKHRoaXMubWF4SGVpZ2h0IC8gMik6IG1heDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnYzQnOiAvLyBzcGxpdC1vbi1xdWFkcnVwbGVcclxuICAgICAgICBtYXggPSB0aGlzLm1heEhlaWdodCAvIDI7IGJyZWFrOyBcclxuICAgICAgY2FzZSAnYzUnOiAvLyBsYXJnZS1vbi1taWRkbGVcclxuICAgICAgICBtYXggPSBpbmRleCA9PT0gMiA/IG1heCA6ICh0aGlzLm1heEhlaWdodCAvIDIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdyYzMnOiAvLyBsYXJnZS1vbi1sZWZ0XHJcbiAgICAgICAgbWF4ID0gaW5kZXggPT09IDAgPyBtYXggOiAodGhpcy5tYXhIZWlnaHQgLyAyKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAncmM0JzogLy8gbGFyZ2Utb24tc2lkZXNcclxuICAgICAgICBtYXggPSAoaW5kZXggPT09IDAgfHwgaW5kZXggPT09IDMpID8gbWF4IDogKHRoaXMubWF4SGVpZ2h0IC8gMik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWF4ICsgJ3B4JztcclxuICB9XHJcbiAgbGlmdFVwSW1hZ2VyeShpbmRleDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB0aGlzLmxpZnRPblplcm8gPyAwIDogaW5kZXg7XHJcbiAgICB0aGlzLmxpZnR1cCA9IHRydWU7XHJcbiAgICB0aGlzLm9uc2VsZWN0LmVtaXQoe1xyXG4gICAgICBpbmRleDogdGhpcy5zZWxlY3RlZEluZGV4LFxyXG4gICAgICBhY3Rpb246ICdsaWZ0IHVwJ1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGxpZnREb3duSW1hZ2VyeSgpIHtcclxuICAgIGlmICh0aGlzLmV4cGFuZGVkKSB7XHJcbiAgICAgIHRoaXMuZnVsbFNjcmVlbigpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5saWZ0dXAgPSBmYWxzZTtcclxuICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlXHJcbiAgICB0aGlzLm9uc2VsZWN0LmVtaXQoe1xyXG4gICAgICBpbmRleDogdGhpcy5zZWxlY3RlZEluZGV4LFxyXG4gICAgICBhY3Rpb246ICdsaWZ0IGRvd24nXHJcbiAgICB9KTtcclxuICB9XHJcbiAgbWFnbmlmeShsaWZ0VmlldzogYW55KSB7XHJcbiAgICB0aGlzLm1hZ25pZmllZCA9ICF0aGlzLm1hZ25pZmllZDtcclxuICAgIGlmICh0aGlzLm1hZ25pZmllZCkge1xyXG4gICAgICBsaWZ0Vmlldy5zdHlsZS53aWR0aCA9IGxpZnRWaWV3LmNsaWVudFdpZHRoICsgXCJweFwiO1xyXG4gICAgICBsaWZ0Vmlldy5zdHlsZS5oZWlnaHQgPSBsaWZ0Vmlldy5jbGllbnRIZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgIGxpZnRWaWV3LmNoaWxkcmVuWzBdLnN0eWxlLndpZHRoID0gXCIzMDAlXCI7XHJcbiAgICAgIGxpZnRWaWV3LmNoaWxkcmVuWzBdLnN0eWxlLmhlaWdodCA9IFwiMzAwJVwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGlmdFZpZXcuY2hpbGRyZW5bMF0uc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgbGlmdFZpZXcuY2hpbGRyZW5bMF0uc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XHJcbiAgICAgIGxpZnRWaWV3LmNoaWxkcmVuWzBdLnN0eWxlLnRvcCA9IFwiMHB4XCI7XHJcbiAgICAgIGxpZnRWaWV3LmNoaWxkcmVuWzBdLnN0eWxlLmxlZnQgPSBcIjBweFwiO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdWxsU2NyZWVuKCkge1xyXG4gICAgY29uc3QgZG9jOiBhbnkgPSBkb2N1bWVudDtcclxuICAgIHRoaXMuZXhwYW5kZWQgPSAhdGhpcy5leHBhbmRlZDtcclxuICAgIGlmICh0aGlzLmV4cGFuZGVkKSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQ6IGFueSA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgICAgIGlmKGVsZW1lbnQucmVxdWVzdEZ1bGxzY3JlZW4pIHtcclxuICAgICAgICBlbGVtZW50LnJlcXVlc3RGdWxsc2NyZWVuKCk7XHJcbiAgICAgIH0gZWxzZSBpZihlbGVtZW50Lm1velJlcXVlc3RGdWxsU2NyZWVuKSB7XHJcbiAgICAgICAgZWxlbWVudC5tb3pSZXF1ZXN0RnVsbFNjcmVlbigpO1xyXG4gICAgICB9IGVsc2UgaWYoZWxlbWVudC53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbikge1xyXG4gICAgICAgIGVsZW1lbnQud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4oKTtcclxuICAgICAgfSBlbHNlIGlmKGVsZW1lbnQubXNSZXF1ZXN0RnVsbHNjcmVlbikge1xyXG4gICAgICAgIGVsZW1lbnQubXNSZXF1ZXN0RnVsbHNjcmVlbigpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZihkb2MuZXhpdEZ1bGxzY3JlZW4pIHtcclxuICAgICAgICBkb2MuZXhpdEZ1bGxzY3JlZW4oKTtcclxuICAgICAgfSBlbHNlIGlmKGRvYy5tb3pDYW5jZWxGdWxsU2NyZWVuKSB7XHJcbiAgICAgICAgZG9jLm1vekNhbmNlbEZ1bGxTY3JlZW4oKTtcclxuICAgICAgfSBlbHNlIGlmKGRvYy53ZWJraXRFeGl0RnVsbHNjcmVlbikge1xyXG4gICAgICAgIGRvYy53ZWJraXRFeGl0RnVsbHNjcmVlbigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGV2YWxUb3AoKSB7XHJcbiAgICBsZXQgbWF4ID0gdGhpcy5tYXhIZWlnaHQ7XHJcbiAgICBzd2l0Y2godGhpcy5kaXNwbGF5VHlwZSkge1xyXG4gICAgICBjYXNlICdtYzEnOiAvLyBsYXllcmVkLW9uLW1pZGRsZVxyXG4gICAgICBjYXNlICdtYzInOiAvLyBsYXllcmVkLW9uLWNvcm5lcnNcclxuICAgICAgICBtYXggPSAwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdjMic6IC8vIHNwbGl0LW9uLWR1YWxcclxuICAgICAgY2FzZSAnYzEnOiAvLyBsYXJnZS1vbi1zaW5nbGVcclxuICAgICAgY2FzZSAnYzMnOiAvLyBzcGxpdC1vbi1yaWdodFxyXG4gICAgICBjYXNlICdyYzQnOiAvLyBsYXJnZS1vbi1zaWRlc1xyXG4gICAgICAgIG1heCA9ICgobWF4IC0gMzApLzMpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdjNCc6IC8vIHNwbGl0LW9uLXF1YWRydXBsZVxyXG4gICAgICBjYXNlICdjNSc6IC8vIGxhcmdlLW9uLW1pZGRsZVxyXG4gICAgICBjYXNlICdyYzMnOiAvLyBsYXJnZS1vbi1sZWZ0XHJcbiAgICAgIGNhc2UgJ3JjNSc6IC8vIGxhcmdlLW9uLXRvcFxyXG4gICAgICBjYXNlICdyYzYnOiAgLy8gbGFyZ2Utb24tdG9wLXRyaXBsZVxyXG4gICAgICBjYXNlICdyYzcnOiAgLy8gbGFyZ2Utb24tdG9wLXF1YWRydXBsZVxyXG4gICAgICAgIG1heCA9ICgobWF4IC0gMzApLzYpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1heCArICdweCc7XHJcbiAgfVxyXG4gIGV2YWxGb250KCkge1xyXG4gICAgbGV0IG1heCA9IHRoaXMubWF4SGVpZ2h0O1xyXG4gICAgc3dpdGNoKHRoaXMuZGlzcGxheVR5cGUpIHtcclxuICAgICAgY2FzZSAnbWMxJzogLy8gbGF5ZXJlZC1vbi1taWRkbGVcclxuICAgICAgY2FzZSAnbWMyJzogLy8gbGF5ZXJlZC1vbi1jb3JuZXJzXHJcbiAgICAgICAgbWF4ID0gbWF4IC8gNjA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2MyJzogLy8gc3BsaXQtb24tZHVhbFxyXG4gICAgICBjYXNlICdjMSc6IC8vIGxhcmdlLW9uLXNpbmdsZVxyXG4gICAgICBjYXNlICdjMyc6IC8vIHNwbGl0LW9uLXJpZ2h0XHJcbiAgICAgIGNhc2UgJ3JjNCc6IC8vIGxhcmdlLW9uLXNpZGVzXHJcbiAgICAgICAgbWF4ID0gKG1heC81MCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2M0JzogLy8gc3BsaXQtb24tcXVhZHJ1cGxlXHJcbiAgICAgIGNhc2UgJ2M1JzogLy8gbGFyZ2Utb24tbWlkZGxlXHJcbiAgICAgIGNhc2UgJ3JjMyc6IC8vIGxhcmdlLW9uLWxlZnRcclxuICAgICAgY2FzZSAncmM1JzogLy8gbGFyZ2Utb24tdG9wXHJcbiAgICAgIGNhc2UgJ3JjNic6IC8vIGxhcmdlLW9uLXRvcC10cmlwbGVcclxuICAgICAgY2FzZSAncmM3JzogLy8gbGFyZ2Utb24tdG9wLXF1YWRydXBsZVxyXG4gICAgICAgIG1heCA9IChtYXgvMTAwKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIG1heCA9IG1heCA+IDYgPyA2IDogbWF4O1xyXG4gICAgcmV0dXJuIG1heCArICdyZW0nO1xyXG4gIH1cclxuICBwcmV2aW91cygpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHRoaXMuc2VsZWN0ZWRJbmRleCAtIDE7XHJcbiAgICB0aGlzLm9uYWN0aW9uLmVtaXQoe1xyXG4gICAgICBhY3Rpb246IFwidmlldyBwcmV2aW91c1wiLFxyXG4gICAgICBpbmRleDogdGhpcy5zZWxlY3RlZEluZGV4LFxyXG5cdFx0XHR0aW1lOiBuZXcgRGF0ZSgpXHJcblx0XHR9KTtcclxuICB9XHJcbiAgbmV4dCgpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHRoaXMuc2VsZWN0ZWRJbmRleCArIDE7XHJcbiAgICB0aGlzLm9uYWN0aW9uLmVtaXQoe1xyXG4gICAgICBhY3Rpb246IFwidmlldyBuZXh0XCIsXHJcbiAgICAgIGluZGV4OiB0aGlzLnNlbGVjdGVkSW5kZXgsXHJcblx0XHRcdHRpbWU6IG5ldyBEYXRlKClcclxuXHRcdH0pO1xyXG4gIH1cclxuICB2aWRlb0V2ZW50KGV2ZW50OiBhbnkpIHtcclxuICAgIHRoaXMub25hY3Rpb24uZW1pdCh7XHJcbiAgICAgIGFjdGlvbjogZXZlbnQudHlwZSxcclxuICAgICAgaW5kZXg6IHRoaXMuc2VsZWN0ZWRJbmRleCxcclxuICAgICAgdGltZTogbmV3IERhdGUoKSxcclxuICAgICAgaXRlbToge1xyXG4gICAgICAgIGF1dG9wbGF5OiBldmVudC50YXJnZXQuYXV0b3BsYXksXHJcbiAgICAgICAgY29udHJvbHM6IGV2ZW50LnRhcmdldC5jb250cm9scyxcclxuICAgICAgICBkdXJhdGlvbjogZXZlbnQudGFyZ2V0LmR1cmF0aW9uLFxyXG4gICAgICAgIGVuZGVkOiBldmVudC50YXJnZXQuZW5kZWQsXHJcbiAgICAgICAgZXJyb3I6IGV2ZW50LnRhcmdldC5lcnJvcixcclxuICAgICAgICBwYXVzZWQ6IGV2ZW50LnRhcmdldC5wYXVzZWQsXHJcbiAgICAgICAgbXV0ZWQ6IGV2ZW50LnRhcmdldC5tdXRlZCxcclxuICAgICAgICBjdXJyZW50VGltZTogZXZlbnQudGFyZ2V0LmN1cnJlbnRUaW1lLFxyXG4gICAgICAgIHZvbHVtZTogZXZlbnQudGFyZ2V0LnZvbHVtZVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgdG91Y2hIb3ZlcihldmVudDogYW55KSB7XHJcblx0XHR0aGlzLm9uYWN0aW9uLmVtaXQoe1xyXG4gICAgICBhY3Rpb246IGV2ZW50LnR5cGUsXHJcbiAgICAgIGluZGV4OiB0aGlzLnNlbGVjdGVkSW5kZXgsXHJcblx0XHRcdHRpbWU6IG5ldyBEYXRlKClcclxuXHRcdH0pO1xyXG5cdH1cclxuICBob3Zlck92ZXIoZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5vbmFjdGlvbi5lbWl0KHtcclxuICAgICAgYWN0aW9uOiBldmVudC50eXBlLFxyXG4gICAgICBpbmRleDogdGhpcy5zZWxlY3RlZEluZGV4LFxyXG5cdFx0XHR0aW1lOiBuZXcgRGF0ZSgpXHJcblx0XHR9KTtcclxuXHR9XHJcblx0aG92ZXJPdXQoZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5vbmFjdGlvbi5lbWl0KHtcclxuICAgICAgYWN0aW9uOiBldmVudC50eXBlLFxyXG4gICAgICBpbmRleDogdGhpcy5zZWxlY3RlZEluZGV4LFxyXG4gICAgICB0aW1lOiBuZXcgRGF0ZSgpXHJcbiAgICB9KTtcclxuXHR9XHJcblxyXG4gIHNob3dNb3JlKGNsb3NlQnV0dG9uKSB7XHJcbiAgICBpZiAoIXRoaXMuZm9jdXNlZCkge1xyXG4gICAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xyXG4gICAgICBjbG9zZUJ1dHRvbi5mb2N1cygpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJbmRleCA8IHRoaXMuZ2FsbGVyeS5sZW5ndGggLSAxO1xyXG4gIH1cclxuICBrZXl1cChldmVudDogYW55KSB7XHJcblx0XHRjb25zdCBjb2RlID0gZXZlbnQud2hpY2g7XHJcblx0XHRpZiAoY29kZSA9PT0gMTMpIHtcclxuICAgICAgZXZlbnQudGFyZ2V0LmNsaWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHByaXZhdGUgaXNNb2JpbGUoKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiJdfQ==