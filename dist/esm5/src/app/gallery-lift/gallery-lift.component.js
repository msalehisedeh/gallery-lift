import * as tslib_1 from "tslib";
import { Component, OnChanges, OnInit, ElementRef, Input, Injector, Output, ComponentFactoryResolver, ChangeDetectorRef, ApplicationRef, EmbeddedViewRef, EventEmitter } from '@angular/core';
import { GalleryViewComponent } from './gallery-view.component';
var GalleryLiftComponent = /** @class */ (function () {
    function GalleryLiftComponent(el, appRef, injector, componentFactoryResolver, cdr) {
        this.appRef = appRef;
        this.injector = injector;
        this.componentFactoryResolver = componentFactoryResolver;
        this.cdr = cdr;
        this.layList = [1];
        this.displayType = 'c1';
        this.host = undefined;
        this.root = undefined;
        this.focused = false;
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
        this.dimOnHover = true;
        this.slideEnabled = true;
        this.animationType = 'none';
        this.hoverMessage = 'See more...';
        this.layout = 'large-on-single';
        this.appRootName = 'app-root';
        this.host = el.nativeElement;
    }
    GalleryLiftComponent.prototype.ngOnInit = function () {
        this.root = this.host;
        while (this.root && this.root.tagName !== 'BODY') {
            this.root = this.root.parentNode;
        }
    };
    GalleryLiftComponent.prototype.ngOnChanges = function (changes) {
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
    GalleryLiftComponent.prototype.range = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    GalleryLiftComponent.prototype.pickRandomLayout = function () {
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
    GalleryLiftComponent.prototype.minHeightOf = function (index) {
        var min = null;
        switch (this.displayType) {
            case 'c1':
                min = this.maxHeight;
                break; // large-on-single
        }
        return min ? min + 'px' : null;
    };
    GalleryLiftComponent.prototype.maxHeightOf = function (index) {
        var max = this.maxHeight;
        switch (this.displayType) {
            case 'mc1': // layered-on-middle
            case 'mc2': // layered-on-corners
                max = this.maxHeight / 3;
                break;
            case 'rc5': // large-on-top
            case 'rc6': // large-on-top-triple
            case 'rc7': // large-on-top-quadruple
                max = this.maxHeight / 2;
                break;
            case 'c1': break; // large-on-single
            case 'c2': break; // split-on-dual
            case 'c3': // split-on-right
                max = index < 2 ? (this.maxHeight / 2) : max;
                break;
            case 'c4': // split-on-quadruple
                max = this.maxHeight / 2;
                break;
            case 'c5': // large-on-middle
                max = index === 2 ? max : (this.maxHeight / 2);
                break;
            case 'rc3': // large-on-left
                max = index === 0 ? max : (this.maxHeight / 2);
                break;
            case 'rc4': // large-on-sides
                max = (index === 0 || index === 3) ? max : (this.maxHeight / 2);
                break;
        }
        return max + 'px';
    };
    GalleryLiftComponent.prototype.checkFocused = function (button) {
        if (this.focused) {
            button.focus();
            this.focused = false;
        }
        return false;
    };
    GalleryLiftComponent.prototype.liftUpImagery = function (index) {
        if (!this.galleryView) {
            this.galleryView = this.componentFactoryResolver
                .resolveComponentFactory(GalleryViewComponent)
                .create(this.injector);
            this.appRef.attachView(this.galleryView.hostView);
            this.root.appendChild(this.galleryView.hostView.rootNodes[0]);
        }
        var instance = this.galleryView.instance;
        instance.sideBySide = this.sideBySide;
        instance.liftOnZero = this.liftOnZero;
        instance.magnifyImageEnabled = this.magnifyImageEnabled;
        instance.gallery = this.gallery;
        instance.template = this.template;
        instance.slideEnabled = this.slideEnabled;
        instance.animationType = this.animationType;
        instance.liftUpImagery(this.root.getElementsByTagName(this.appRootName)[0], this.liftOnZero ? 0 : index);
    };
    GalleryLiftComponent.prototype.evalTop = function () {
        var max = this.maxHeight;
        switch (this.displayType) {
            case 'mc1': // layered-on-middle
            case 'mc2': // layered-on-corners
                max = (max / 6) - 15;
                break;
            case 'c2': // split-on-dual
            case 'c1': // large-on-single
            case 'c3': // split-on-right
            case 'rc4': // large-on-sides
                max = (max / 2) - 15;
                break;
            case 'c4': // split-on-quadruple
            case 'c5': // large-on-middle
            case 'rc3': // large-on-left
            case 'rc5': // large-on-top
            case 'rc6': // large-on-top-triple
            case 'rc7': // large-on-top-quadruple
                max = (max / 4) - 15;
                break;
        }
        return max + 'px';
    };
    GalleryLiftComponent.prototype.keyup = function (event) {
        var code = event.which;
        if (code === 13) {
            event.target.click();
        }
    };
    GalleryLiftComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ApplicationRef },
        { type: Injector },
        { type: ComponentFactoryResolver },
        { type: ChangeDetectorRef }
    ]; };
    tslib_1.__decorate([
        Output()
    ], GalleryLiftComponent.prototype, "onselect", void 0);
    tslib_1.__decorate([
        Output()
    ], GalleryLiftComponent.prototype, "onaction", void 0);
    tslib_1.__decorate([
        Input()
    ], GalleryLiftComponent.prototype, "sideBySide", void 0);
    tslib_1.__decorate([
        Input()
    ], GalleryLiftComponent.prototype, "liftOnZero", void 0);
    tslib_1.__decorate([
        Input()
    ], GalleryLiftComponent.prototype, "showRemainingCount", void 0);
    tslib_1.__decorate([
        Input()
    ], GalleryLiftComponent.prototype, "showTitleOnHover", void 0);
    tslib_1.__decorate([
        Input()
    ], GalleryLiftComponent.prototype, "showMessageOnHover", void 0);
    tslib_1.__decorate([
        Input()
    ], GalleryLiftComponent.prototype, "magnifyImageEnabled", void 0);
    tslib_1.__decorate([
        Input()
    ], GalleryLiftComponent.prototype, "gallery", void 0);
    tslib_1.__decorate([
        Input()
    ], GalleryLiftComponent.prototype, "template", void 0);
    tslib_1.__decorate([
        Input()
    ], GalleryLiftComponent.prototype, "borderOnView", void 0);
    tslib_1.__decorate([
        Input()
    ], GalleryLiftComponent.prototype, "maxHeight", void 0);
    tslib_1.__decorate([
        Input()
    ], GalleryLiftComponent.prototype, "dimOnHover", void 0);
    tslib_1.__decorate([
        Input()
    ], GalleryLiftComponent.prototype, "slideEnabled", void 0);
    tslib_1.__decorate([
        Input()
    ], GalleryLiftComponent.prototype, "animationType", void 0);
    tslib_1.__decorate([
        Input()
    ], GalleryLiftComponent.prototype, "hoverMessage", void 0);
    tslib_1.__decorate([
        Input()
    ], GalleryLiftComponent.prototype, "layout", void 0);
    tslib_1.__decorate([
        Input()
    ], GalleryLiftComponent.prototype, "appRootName", void 0);
    GalleryLiftComponent = tslib_1.__decorate([
        Component({
            selector: 'gallery-lift',
            template: "\r\n<div class=\"viewport {{displayType}}\">\r\n    <div *ngFor=\"let row of layList; let i = index\"\r\n        (keyup)=\"keyup($event)\"\r\n        (click)=\"liftUpImagery(i)\"\r\n        class=\"view\"\r\n        attr.tabindex=\"0\"\r\n        [class.dim-on-hover]=\"dimOnHover\"\r\n        [style.border]='borderOnView'\r\n        [style.min-height]='maxHeightOf(i)'\r\n        [style.max-height]='maxHeightOf(i)'>\r\n        <span class=\"off-screen\" *ngIf=\"template && gallery[i].data\">\r\n            <ng-container \r\n                [ngTemplateOutlet]=\"template\" \r\n                [ngTemplateOutletContext]=\"{data: gallery[i].data, selected: i+1, total: gallery.length}\"></ng-container>\r\n        </span>\r\n        <div \r\n            *ngIf=\"((showTitleOnHover && i !== (layList.length - 1)) || (!showRemainingCount && i === (layList.length - 1))) && gallery[i].data && gallery[i].data.title\" \r\n            class=\"title\">{{gallery[i].data.title}}</div>\r\n        <img *ngIf=\"gallery[i].type === undefined || gallery[i].type === 'image'\" aria-hidden=\"true\" width=\"100%\"  [src]=\"gallery[i].src\" />\r\n        <video width=\"100%\" \r\n            *ngIf=\"gallery[i].type === 'video'\"\r\n            [attr.poster]=\"gallery[i].poster ? gallery[i].poster : null\"\r\n            [attr.src]=\"gallery[i].src\" disabled></video>\r\n        <div *ngIf=\"showRemainingCount  && i === (layList.length - 1)\" \r\n            class=\"counter\"\r\n            [style.min-height]='maxHeightOf(i)'\r\n            [style.max-height]='maxHeightOf(i)'\r\n            [style.padding-top]=\"evalTop()\">\r\n            + {{gallery.length - i - 1}}\r\n            <span class=\"off-screen\">more entries</span>\r\n        </div>\r\n        <div \r\n            *ngIf=\"(showMessageOnHover && i !== (layList.length - 1)) || (!showRemainingCount && i === (layList.length - 1))\" \r\n            class=\"more\"> \r\n            {{hoverMessage}}\r\n            <span aria-hidden=\"true\" class=\"enlarge fa fa-clone\" *ngIf=\"layout === 'large-on-single'\"></span>\r\n        </div>\r\n    </div>\r\n</div>\r\n",
            styles: [":host{box-sizing:border-box;display:flex;padding:0;margin:5px}:host .off-screen{display:block;width:1px;height:1px;position:absolute;left:-99999px;top:-99999px}:host .viewport{display:-ms-inline-grid;display:inline-grid;grid-gap:0;width:100%;background-color:#000;padding:0}:host .viewport .view{text-align:center;padding:0;position:relative;box-sizing:border-box;display:flex;overflow:hidden;cursor:pointer}:host .viewport .view img,:host .viewport .view video{-o-object-fit:cover;object-fit:cover}:host .viewport .view:focus.dim-on-hover,:host .viewport .view:hover.dim-on-hover{-webkit-filter:brightness(80%);-moz-filter:brightness(80%);-o-filter:brightness(80%);-ms-filter:brightness(80%);filter:brightness(80%)}:host .viewport .view:focus .more,:host .viewport .view:focus .title,:host .viewport .view:hover .more,:host .viewport .view:hover .title{opacity:1}:host .viewport .view .counter{width:100%;height:100%;background-color:rgba(0,0,0,.4);color:#fff;font-size:2.2rem;position:absolute;top:0;overflow:hidden;box-sizing:border-box}:host .viewport .view .title{opacity:0;width:100%;background-color:rgba(0,0,0,.7);transition:.3s ease-out;color:#fff;position:absolute;left:0;top:0;padding:5px;overflow:hidden;z-index:2}:host .viewport .view .more{opacity:0;width:100%;background-color:rgba(0,0,0,.7);transition:.3s ease-out;color:#fff;position:absolute;left:0;bottom:0;padding:5px;z-index:2}:host .viewport .view .more .enlarge{position:absolute;right:20px}:host .viewport .view:nth-child(1){-ms-grid-row:1;-ms-grid-column:1;grid-area:tl}:host .viewport .view:nth-child(2){-ms-grid-row:1;-ms-grid-column:3;grid-area:bl}:host .viewport .view:nth-child(3){-ms-grid-row:1;-ms-grid-row-span:3;-ms-grid-column:3;-ms-grid-column-span:3;grid-area:center}:host .viewport .view:nth-child(4){-ms-grid-row:3;-ms-grid-column:3;grid-area:tr}:host .viewport .view:nth-child(5){-ms-grid-row:3;-ms-grid-column:7;grid-area:br}:host .viewport.c1{grid-template-areas:\"tl\"}:host .viewport.c1 .more,:host .viewport.c1 .title{font-size:1rem}:host .viewport.c2{-ms-grid-columns:50% 0 50%;grid-template-columns:50% 50%;grid-template-areas:\"tl bl\"}:host .viewport.c2 .more,:host .viewport.c2 .title{font-size:1rem}:host .viewport.c3{-ms-grid-columns:32% 0 auto;grid-template-columns:32% auto;-ms-grid-rows:auto 0 auto;grid-template-areas:\"tl center center\" \"bl center center\"}:host .viewport.c3 .more,:host .viewport.c3 .title{font-size:1rem}:host .viewport.c4{-ms-grid-columns:50% 0 50%;grid-template-columns:50% 50%;-ms-grid-rows:auto 0 auto;grid-template-areas:\"tl center\" \"bl tr\"}:host .viewport.c4 .more,:host .viewport.c4 .title{font-size:1rem}:host .viewport.c5{-ms-grid-columns:25% 0 auto 0 25%;grid-template-columns:25% auto 25%;-ms-grid-rows:auto 0 auto;grid-template-areas:\"tl center center tr\" \"bl center center br\"}:host .viewport.c5 .more,:host .viewport.c5 .title{font-size:.9rem}:host .viewport.rc3{-ms-grid-columns:auto 0 30%;grid-template-columns:auto 30%;-ms-grid-rows:auto 0 auto;grid-template-areas:\"tl tl bl\" \"tl tl center\"}:host .viewport.rc3 .more,:host .viewport.rc3 .title{font-size:.9rem}:host .viewport.rc4{-ms-grid-columns:30% 0 auto 0 30%;grid-template-columns:30% auto 30%;-ms-grid-rows:auto 0 auto;grid-template-areas:\"tl bl tr\" \"tl center tr\"}:host .viewport.rc4 .more,:host .viewport.rc4 .title{font-size:.9rem}:host .viewport.rc5{-ms-grid-columns:50% 0 50%;grid-template-columns:50% 50%;-ms-grid-rows:auto 0 auto;grid-template-areas:\"tl tl\" \"bl center\"}:host .viewport.rc5 .more,:host .viewport.rc5 .title{font-size:.9rem}:host .viewport.rc6{-ms-grid-columns:33% 0 auto 0 33%;grid-template-columns:33% auto 33%;-ms-grid-rows:auto 0 auto;grid-template-areas:\"tl tl tl\" \"bl center tr\"}:host .viewport.rc6 .more,:host .viewport.rc6 .title{font-size:.9rem}:host .viewport.rc7{-ms-grid-columns:25% 0 25% 0 25% 0 25%;grid-template-columns:25% 25% 25% 25%;-ms-grid-rows:auto 0 auto;grid-template-areas:\"tl tl tl tl\" \"bl center tr br\"}:host .viewport.rc7 .more,:host .viewport.rc7 .title{font-size:.9rem}:host .viewport.mc1{-ms-grid-columns:50% 0 50%;grid-template-columns:50% 50%;-ms-grid-rows:auto 0 auto 0 auto;grid-template-areas:\"tl tl\" \"bl center\" \"tr tr\"}:host .viewport.mc1 .more,:host .viewport.mc1 .title{font-size:.9rem}:host .viewport.mc2{-ms-grid-columns:50% 0 50%;grid-template-columns:50% 50%;-ms-grid-rows:auto 0 auto 0 auto;grid-template-areas:\"tl bl\" \"center center\" \"tr br\"}:host .viewport.mc2 .more,:host .viewport.mc2 .title{font-size:.9rem}"]
        })
    ], GalleryLiftComponent);
    return GalleryLiftComponent;
}());
export { GalleryLiftComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1saWZ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZWRlaC9nYWxsZXJ5LWxpZnQvIiwic291cmNlcyI6WyJzcmMvYXBwL2dhbGxlcnktbGlmdC9nYWxsZXJ5LWxpZnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFDVCxNQUFNLEVBQ04sVUFBVSxFQUNWLEtBQUssRUFDTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLHdCQUF3QixFQUN4QixpQkFBaUIsRUFDakIsY0FBYyxFQUNkLGVBQWUsRUFDZixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFPaEU7SUE0QkUsOEJBQ0UsRUFBYyxFQUNSLE1BQXNCLEVBQ3RCLFFBQWtCLEVBQ2hCLHdCQUFrRCxFQUNsRCxHQUFzQjtRQUh4QixXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2hCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUEvQmhDLFlBQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2QsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsU0FBSSxHQUFHLFNBQVMsQ0FBQztRQUNqQixTQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ2pCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFTixhQUFRLEdBQUUsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUM1QixhQUFRLEdBQUUsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUU3QixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQzNCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN6Qix1QkFBa0IsR0FBRyxJQUFJ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QUssRUFBRTs0REFBbUI7SUFDbEI7UUFBUixLQUFLLEVBQUU7NERBQW9CO0lBQ25CO1FBQVIsS0FBSyxFQUFFO29FQUE0QjtJQUMzQjtRQUFSLEtBQUssRUFBRTtrRUFBMEI7SUFDekI7UUFBUixLQUFLLEVBQUU7b0VBQTJCO0lBQzFCO1FBQVIsS0FBSyxFQUFFO3FFQUE2QjtJQUM1QjtRQUFSLEtBQUssRUFBRTt5REFBZ0I7SUFDZjtRQUFSLEtBQUssRUFBRTswREFBZTtJQUNkO1FBQVIsS0FBSyxFQUFFOzhEQUFxQjtJQUNwQjtRQUFSLEtBQUssRUFBRTsyREFBaUI7SUFDaEI7UUFBUixLQUFLLEVBQUU7NERBQW1CO0lBQ2xCO1FBQVIsS0FBSyxFQUFFOzhEQUFxQjtJQUNwQjtRQUFSLEtBQUssRUFBRTsrREFBd0I7SUFDdkI7UUFBUixLQUFLLEVBQUU7OERBQThCO0lBQzdCO1FBQVIsS0FBSyxFQUFFO3dEQUE0QjtJQUMzQjtRQUFSLEtBQUssRUFBRTs2REFBMEI7SUExQnZCLG9CQUFvQjtRQUxoQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztZQUN4Qix1bEVBQTRDOztTQUU3QyxDQUFDO09BQ1csb0JBQW9CLENBd05oQztJQUFELDJCQUFDO0NBQUEsQUF4TkQsSUF3TkM7U0F4Tlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBJbmplY3RvcixcclxuICBPdXRwdXQsXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIEFwcGxpY2F0aW9uUmVmLFxyXG4gIEVtYmVkZGVkVmlld1JlZixcclxuICBFdmVudEVtaXR0ZXJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEdhbGxlcnlWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9nYWxsZXJ5LXZpZXcuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2FsbGVyeS1saWZ0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZ2FsbGVyeS1saWZ0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9nYWxsZXJ5LWxpZnQuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEdhbGxlcnlMaWZ0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xyXG4gIGdhbGxlcnlWaWV3OiBhbnk7XHJcbiAgbGF5TGlzdCA9IFsxXTtcclxuICBkaXNwbGF5VHlwZSA9ICdjMSc7XHJcbiAgaG9zdCA9IHVuZGVmaW5lZDtcclxuICByb290ID0gdW5kZWZpbmVkO1xyXG4gIGZvY3VzZWQgPSBmYWxzZTtcclxuICBcclxuICBAT3V0cHV0KCkgb25zZWxlY3Q9IG5ldyBFdmVudEVtaXR0ZXIoKVxyXG4gIEBPdXRwdXQoKSBvbmFjdGlvbj0gbmV3IEV2ZW50RW1pdHRlcigpXHJcblxyXG4gIEBJbnB1dCgpIHNpZGVCeVNpZGUgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGxpZnRPblplcm8gPSBmYWxzZTtcclxuICBASW5wdXQoKSBzaG93UmVtYWluaW5nQ291bnQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBzaG93VGl0bGVPbkhvdmVyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2hvd01lc3NhZ2VPbkhvdmVyID0gdHJ1ZTtcclxuICBASW5wdXQoKSBtYWduaWZ5SW1hZ2VFbmFibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZ2FsbGVyeTogYW55W107XHJcbiAgQElucHV0KCkgdGVtcGxhdGU6IGFueTtcclxuICBASW5wdXQoKSBib3JkZXJPblZpZXcgPSBudWxsO1xyXG4gIEBJbnB1dCgpIG1heEhlaWdodCA9IDQwMDtcclxuICBASW5wdXQoKSBkaW1PbkhvdmVyID0gdHJ1ZTtcclxuICBASW5wdXQoKSBzbGlkZUVuYWJsZWQgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGFuaW1hdGlvblR5cGUgPSAnbm9uZSc7XHJcbiAgQElucHV0KCkgaG92ZXJNZXNzYWdlID0gJ1NlZSBtb3JlLi4uJztcclxuICBASW5wdXQoKSBsYXlvdXQgPSAnbGFyZ2Utb24tc2luZ2xlJztcclxuICBASW5wdXQoKSBhcHBSb290TmFtZSA9ICdhcHAtcm9vdCc7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBlbDogRWxlbWVudFJlZixcclxuXHRcdHByaXZhdGUgYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcclxuXHRcdHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxyXG4gICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgdGhpcy5ob3N0ID0gZWwubmF0aXZlRWxlbWVudDtcclxuICB9XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnJvb3QgPSB0aGlzLmhvc3Q7XHJcbiAgICB3aGlsZSAodGhpcy5yb290ICYmIHRoaXMucm9vdC50YWdOYW1lICE9PSAnQk9EWScpIHtcclxuICAgICAgdGhpcy5yb290ID0gdGhpcy5yb290LnBhcmVudE5vZGU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSkge1xyXG4gICAgaWYgKGNoYW5nZXMuZ2FsbGVyeSAmJiB0aGlzLmxheW91dCA9PT0gJ3JhbmRvbScpIHtcclxuICAgICAgdGhpcy5waWNrUmFuZG9tTGF5b3V0KCk7XHJcbiAgICB9IGVsc2UgaWYgKGNoYW5nZXMubGF5b3V0KSB7XHJcbiAgICAgIHN3aXRjaCh0aGlzLmxheW91dCkge1xyXG4gICAgICAgIGNhc2UgJ2xhcmdlLW9uLXNpbmdsZSc6IHRoaXMuZGlzcGxheVR5cGUgPSAnYzEnO3RoaXMubGF5TGlzdCA9IFsxXTsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnc3BsaXQtb24tZHVhbCc6IHRoaXMuZGlzcGxheVR5cGUgPSAnYzInO3RoaXMubGF5TGlzdCA9IFsxLDJdOyBicmVhaztcclxuICAgICAgICBjYXNlICdsYXJnZS1vbi1yaWdodCc6IHRoaXMuZGlzcGxheVR5cGUgPSAnYzMnO3RoaXMubGF5TGlzdCA9IFsxLDIsM107IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3NwbGl0LW9uLXF1YWRydXBsZSc6IHRoaXMuZGlzcGxheVR5cGUgPSAnYzQnO3RoaXMubGF5TGlzdCA9IFsxLDIsMyw0XTsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbGFyZ2Utb24tbWlkZGxlJzogdGhpcy5kaXNwbGF5VHlwZSA9ICdjNSc7dGhpcy5sYXlMaXN0ID0gWzEsMiwzLDQsNV07IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2xhcmdlLW9uLWxlZnQnOiB0aGlzLmRpc3BsYXlUeXBlID0gJ3JjMyc7dGhpcy5sYXlMaXN0ID0gWzEsMiwzXTsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbGFyZ2Utb24tc2lkZXMnOiB0aGlzLmRpc3BsYXlUeXBlID0gJ3JjNCc7dGhpcy5sYXlMaXN0ID0gWzEsMiwzLDRdOyBicmVhaztcclxuICAgICAgICBjYXNlICdsYXJnZS1vbi10b3AnOiB0aGlzLmRpc3BsYXlUeXBlID0gJ3JjNSc7dGhpcy5sYXlMaXN0ID0gWzEsMiwzXTsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbGFyZ2Utb24tdG9wLXRyaXBsZSc6IHRoaXMuZGlzcGxheVR5cGUgPSAncmM2Jzt0aGlzLmxheUxpc3QgPSBbMSwyLDMsNF07IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2xhcmdlLW9uLXRvcC1xdWFkcnVwbGUnOiB0aGlzLmRpc3BsYXlUeXBlID0gJ3JjNyc7dGhpcy5sYXlMaXN0ID0gWzEsMiwzLDQsNV07IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2xheWVyZWQtb24tbWlkZGxlJzogdGhpcy5kaXNwbGF5VHlwZSA9ICdtYzEnO3RoaXMubGF5TGlzdCA9IFsxLDIsMyw0XTsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbGF5ZXJlZC1vbi1jb3JuZXJzJzogdGhpcy5kaXNwbGF5VHlwZSA9ICdtYzInO3RoaXMubGF5TGlzdCA9IFsxLDIsMyw0LDVdOyBicmVhaztcclxuICAgICAgICBjYXNlICdyYW5kb20nOiBcclxuICAgICAgICAgIGlmICh0aGlzLmdhbGxlcnkpIHtcclxuICAgICAgICAgICAgdGhpcy5waWNrUmFuZG9tTGF5b3V0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChjaGFuZ2VzLm1heEhlaWdodCkge1xyXG4gICAgICBpZiAodGhpcy5tYXhIZWlnaHQgPCAxMDApIHtcclxuICAgICAgICB0aGlzLm1heEhlaWdodCA9IDEwMDtcclxuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5ob3N0LmNsaWVudEhlaWdodCA+IDEwMCAmJiB0aGlzLmhvc3QuY2xpZW50SGVpZ2h0IDwgdGhpcy5tYXhIZWlnaHQpIHtcclxuICAgICAgICB0aGlzLm1heEhlaWdodCA9IHRoaXMuaG9zdC5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHByaXZhdGUgcmFuZ2UobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG4gIH1cclxuICBwcml2YXRlIHBpY2tSYW5kb21MYXlvdXQoKSB7XHJcbiAgICBpZiAodGhpcy5nYWxsZXJ5Lmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICB0aGlzLmRpc3BsYXlUeXBlID0gJ2MxJzt0aGlzLmxheUxpc3QgPSBbMV07XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZ2FsbGVyeS5sZW5ndGggPT09IDIpIHtcclxuICAgICAgc3dpdGNoKHRoaXMucmFuZ2UoMSwyKSkge1xyXG4gICAgICAgIGNhc2UgMTogdGhpcy5kaXNwbGF5VHlwZSA9ICdjMSc7dGhpcy5sYXlMaXN0ID0gWzFdO2JyZWFrO1xyXG4gICAgICAgIGNhc2UgMjogdGhpcy5kaXNwbGF5VHlwZSA9ICdjMic7dGhpcy5sYXlMaXN0ID0gWzEsIDJdO2JyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZ2FsbGVyeS5sZW5ndGggPT09IDMpIHtcclxuICAgICAgc3dpdGNoKHRoaXMucmFuZ2UoMSw1KSkge1xyXG4gICAgICAgIGNhc2UgMTogdGhpcy5kaXNwbGF5VHlwZSA9ICdjMSc7dGhpcy5sYXlMaXN0ID0gWzFdO2JyZWFrO1xyXG4gICAgICAgIGNhc2UgMjogdGhpcy5kaXNwbGF5VHlwZSA9ICdjMic7dGhpcy5sYXlMaXN0ID0gWzEsIDJdO2JyZWFrO1xyXG4gICAgICAgIGNhc2UgMzogdGhpcy5kaXNwbGF5VHlwZSA9ICdjMyc7dGhpcy5sYXlMaXN0ID0gWzEsIDIsIDNdO2JyZWFrO1xyXG4gICAgICAgIGNhc2UgNDogdGhpcy5kaXNwbGF5VHlwZSA9ICdyYzMnO3RoaXMubGF5TGlzdCA9IFsxLCAyLCAzXTticmVhaztcclxuICAgICAgICBjYXNlIDU6IHRoaXMuZGlzcGxheVR5cGUgPSAncmM1Jzt0aGlzLmxheUxpc3QgPSBbMSwgMiwgM107YnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodGhpcy5nYWxsZXJ5Lmxlbmd0aCA9PT0gNCkge1xyXG4gICAgICBzd2l0Y2godGhpcy5yYW5nZSgxLDkpKSB7XHJcbiAgICAgICAgY2FzZSAxOiB0aGlzLmRpc3BsYXlUeXBlID0gJ2MxJzt0aGlzLmxheUxpc3QgPSBbMV07YnJlYWs7XHJcbiAgICAgICAgY2FzZSAyOiB0aGlzLmRpc3BsYXlUeXBlID0gJ2MyJzt0aGlzLmxheUxpc3QgPSBbMSwgMl07YnJlYWs7XHJcbiAgICAgICAgY2FzZSAzOiB0aGlzLmRpc3BsYXlUeXBlID0gJ2MzJzt0aGlzLmxheUxpc3QgPSBbMSwgMiwgM107YnJlYWs7XHJcbiAgICAgICAgY2FzZSA0OiB0aGlzLmRpc3BsYXlUeXBlID0gJ3JjMyc7dGhpcy5sYXlMaXN0ID0gWzEsIDIsIDNdO2JyZWFrO1xyXG4gICAgICAgIGNhc2UgNTogdGhpcy5kaXNwbGF5VHlwZSA9ICdyYzUnO3RoaXMubGF5TGlzdCA9IFsxLCAyLCAzXTticmVhaztcclxuICAgICAgICBjYXNlIDY6IHRoaXMuZGlzcGxheVR5cGUgPSAnYzQnO3RoaXMubGF5TGlzdCA9IFsxLCAyLCAzLCA0XTticmVhaztcclxuICAgICAgICBjYXNlIDc6IHRoaXMuZGlzcGxheVR5cGUgPSAncmM0Jzt0aGlzLmxheUxpc3QgPSBbMSwgMiwgMywgNF07YnJlYWs7XHJcbiAgICAgICAgY2FzZSA4OiB0aGlzLmRpc3BsYXlUeXBlID0gJ3JjNic7dGhpcy5sYXlMaXN0ID0gWzEsIDIsIDMsIDRdO2JyZWFrO1xyXG4gICAgICAgIGNhc2UgOTogdGhpcy5kaXNwbGF5VHlwZSA9ICdtYzEnO3RoaXMubGF5TGlzdCA9IFsxLCAyLCAzLCA0XTticmVhaztcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLmdhbGxlcnkubGVuZ3RoID49IDUpIHtcclxuICAgICAgc3dpdGNoKHRoaXMucmFuZ2UoMSwxMikpIHtcclxuICAgICAgICBjYXNlIDE6IHRoaXMuZGlzcGxheVR5cGUgPSAnYzEnO3RoaXMubGF5TGlzdCA9IFsxXTticmVhaztcclxuICAgICAgICBjYXNlIDI6IHRoaXMuZGlzcGxheVR5cGUgPSAnYzInO3RoaXMubGF5TGlzdCA9IFsxLCAyXTticmVhaztcclxuICAgICAgICBjYXNlIDM6IHRoaXMuZGlzcGxheVR5cGUgPSAnYzMnO3RoaXMubGF5TGlzdCA9IFsxLCAyLCAzXTticmVhaztcclxuICAgICAgICBjYXNlIDQ6IHRoaXMuZGlzcGxheVR5cGUgPSAncmMzJzt0aGlzLmxheUxpc3QgPSBbMSwgMiwgM107YnJlYWs7XHJcbiAgICAgICAgY2FzZSA1OiB0aGlzLmRpc3BsYXlUeXBlID0gJ3JjNSc7dGhpcy5sYXlMaXN0ID0gWzEsIDIsIDNdO2JyZWFrO1xyXG4gICAgICAgIGNhc2UgNjogdGhpcy5kaXNwbGF5VHlwZSA9ICdjNCc7dGhpcy5sYXlMaXN0ID0gWzEsIDIsIDMsIDRdO2JyZWFrO1xyXG4gICAgICAgIGNhc2UgNzogdGhpcy5kaXNwbGF5VHlwZSA9ICdyYzQnO3RoaXMubGF5TGlzdCA9IFsxLCAyLCAzLCA0XTticmVhaztcclxuICAgICAgICBjYXNlIDg6IHRoaXMuZGlzcGxheVR5cGUgPSAncmM2Jzt0aGlzLmxheUxpc3QgPSBbMSwgMiwgMywgNF07YnJlYWs7XHJcbiAgICAgICAgY2FzZSA5OiB0aGlzLmRpc3BsYXlUeXBlID0gJ21jMSc7dGhpcy5sYXlMaXN0ID0gWzEsIDIsIDMsIDRdO2JyZWFrO1xyXG4gICAgICAgIGNhc2UgMTA6IHRoaXMuZGlzcGxheVR5cGUgPSAnYzUnO3RoaXMubGF5TGlzdCA9IFsxLCAyLCAzLCA0LCA1XTticmVhaztcclxuICAgICAgICBjYXNlIDExOiB0aGlzLmRpc3BsYXlUeXBlID0gJ3JjNyc7dGhpcy5sYXlMaXN0ID0gWzEsIDIsIDMsIDQsIDVdO2JyZWFrO1xyXG4gICAgICAgIGNhc2UgMTI6IHRoaXMuZGlzcGxheVR5cGUgPSAnbWMyJzt0aGlzLmxheUxpc3QgPSBbMSwgMiwgMywgNCwgNV07YnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgbWluSGVpZ2h0T2YoaW5kZXg6IG51bWJlcikge1xyXG4gICAgbGV0IG1pbiA9IG51bGw7XHJcbiAgICBzd2l0Y2godGhpcy5kaXNwbGF5VHlwZSkge1xyXG4gICAgICBjYXNlICdjMSc6ICBtaW4gPSB0aGlzLm1heEhlaWdodDsgYnJlYWs7IC8vIGxhcmdlLW9uLXNpbmdsZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1pbiAgPyBtaW4gKyAncHgnIDogbnVsbDtcclxuICB9XHJcbiAgbWF4SGVpZ2h0T2YoaW5kZXg6IG51bWJlcikge1xyXG4gICAgbGV0IG1heCA9IHRoaXMubWF4SGVpZ2h0O1xyXG4gICAgc3dpdGNoKHRoaXMuZGlzcGxheVR5cGUpIHtcclxuICAgICAgY2FzZSAnbWMxJzogLy8gbGF5ZXJlZC1vbi1taWRkbGVcclxuICAgICAgY2FzZSAnbWMyJzogLy8gbGF5ZXJlZC1vbi1jb3JuZXJzXHJcbiAgICAgICAgbWF4ID0gdGhpcy5tYXhIZWlnaHQgLyAzO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdyYzUnOiAvLyBsYXJnZS1vbi10b3BcclxuICAgICAgY2FzZSAncmM2JzogLy8gbGFyZ2Utb24tdG9wLXRyaXBsZVxyXG4gICAgICBjYXNlICdyYzcnOiAvLyBsYXJnZS1vbi10b3AtcXVhZHJ1cGxlXHJcbiAgICAgICAgbWF4ID0gdGhpcy5tYXhIZWlnaHQgLyAyO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdjMSc6IGJyZWFrOyAvLyBsYXJnZS1vbi1zaW5nbGVcclxuICAgICAgY2FzZSAnYzInOiBicmVhazsgLy8gc3BsaXQtb24tZHVhbFxyXG4gICAgICBjYXNlICdjMyc6IC8vIHNwbGl0LW9uLXJpZ2h0XHJcbiAgICAgICAgbWF4ID0gaW5kZXggPCAyID8gKHRoaXMubWF4SGVpZ2h0IC8gMik6IG1heDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnYzQnOiAvLyBzcGxpdC1vbi1xdWFkcnVwbGVcclxuICAgICAgICBtYXggPSB0aGlzLm1heEhlaWdodCAvIDI7IGJyZWFrOyBcclxuICAgICAgY2FzZSAnYzUnOiAvLyBsYXJnZS1vbi1taWRkbGVcclxuICAgICAgICBtYXggPSBpbmRleCA9PT0gMiA/IG1heCA6ICh0aGlzLm1heEhlaWdodCAvIDIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdyYzMnOiAvLyBsYXJnZS1vbi1sZWZ0XHJcbiAgICAgICAgbWF4ID0gaW5kZXggPT09IDAgPyBtYXggOiAodGhpcy5tYXhIZWlnaHQgLyAyKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAncmM0JzogLy8gbGFyZ2Utb24tc2lkZXNcclxuICAgICAgICBtYXggPSAoaW5kZXggPT09IDAgfHwgaW5kZXggPT09IDMpID8gbWF4IDogKHRoaXMubWF4SGVpZ2h0IC8gMik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWF4ICsgJ3B4JztcclxuICB9XHJcbiAgY2hlY2tGb2N1c2VkKGJ1dHRvbjogSFRNTEVsZW1lbnQpIHtcclxuICAgIGlmICh0aGlzLmZvY3VzZWQpIHtcclxuICAgICAgYnV0dG9uLmZvY3VzKCk7XHJcbiAgICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBsaWZ0VXBJbWFnZXJ5KGluZGV4OiBudW1iZXIpIHtcclxuICAgIGlmICghdGhpcy5nYWxsZXJ5Vmlldykge1xyXG4gICAgICB0aGlzLmdhbGxlcnlWaWV3ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcclxuICAgICAgICAucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoR2FsbGVyeVZpZXdDb21wb25lbnQpXHJcbiAgICAgICAgLmNyZWF0ZSh0aGlzLmluamVjdG9yKTtcclxuICAgICAgdGhpcy5hcHBSZWYuYXR0YWNoVmlldyh0aGlzLmdhbGxlcnlWaWV3Lmhvc3RWaWV3KTtcclxuICAgICAgdGhpcy5yb290LmFwcGVuZENoaWxkKCh0aGlzLmdhbGxlcnlWaWV3Lmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KS5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaW5zdGFuY2UgPSAoPEdhbGxlcnlWaWV3Q29tcG9uZW50PnRoaXMuZ2FsbGVyeVZpZXcuaW5zdGFuY2UpO1xyXG4gICAgaW5zdGFuY2Uuc2lkZUJ5U2lkZSA9IHRoaXMuc2lkZUJ5U2lkZTtcclxuICAgIGluc3RhbmNlLmxpZnRPblplcm8gPSB0aGlzLmxpZnRPblplcm87XHJcbiAgICBpbnN0YW5jZS5tYWduaWZ5SW1hZ2VFbmFibGVkID0gdGhpcy5tYWduaWZ5SW1hZ2VFbmFibGVkO1xyXG4gICAgaW5zdGFuY2UuZ2FsbGVyeSA9IHRoaXMuZ2FsbGVyeTtcclxuICAgIGluc3RhbmNlLnRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZTtcclxuICAgIGluc3RhbmNlLnNsaWRlRW5hYmxlZCA9IHRoaXMuc2xpZGVFbmFibGVkO1xyXG4gICAgaW5zdGFuY2UuYW5pbWF0aW9uVHlwZSA9IHRoaXMuYW5pbWF0aW9uVHlwZTtcclxuICAgIGluc3RhbmNlLmxpZnRVcEltYWdlcnkodGhpcy5yb290LmdldEVsZW1lbnRzQnlUYWdOYW1lKHRoaXMuYXBwUm9vdE5hbWUpWzBdLCB0aGlzLmxpZnRPblplcm8gPyAwIDogaW5kZXgpO1xyXG4gIH1cclxuICBldmFsVG9wKCkge1xyXG4gICAgbGV0IG1heCA9IHRoaXMubWF4SGVpZ2h0O1xyXG4gICAgc3dpdGNoKHRoaXMuZGlzcGxheVR5cGUpIHtcclxuICAgICAgY2FzZSAnbWMxJzogLy8gbGF5ZXJlZC1vbi1taWRkbGVcclxuICAgICAgY2FzZSAnbWMyJzogLy8gbGF5ZXJlZC1vbi1jb3JuZXJzXHJcbiAgICAgICAgbWF4ID0gKG1heCAvIDYpIC0gMTU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2MyJzogLy8gc3BsaXQtb24tZHVhbFxyXG4gICAgICBjYXNlICdjMSc6IC8vIGxhcmdlLW9uLXNpbmdsZVxyXG4gICAgICBjYXNlICdjMyc6IC8vIHNwbGl0LW9uLXJpZ2h0XHJcbiAgICAgIGNhc2UgJ3JjNCc6IC8vIGxhcmdlLW9uLXNpZGVzXHJcbiAgICAgICAgbWF4ID0gKG1heCAvIDIpIC0gMTU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2M0JzogLy8gc3BsaXQtb24tcXVhZHJ1cGxlXHJcbiAgICAgIGNhc2UgJ2M1JzogLy8gbGFyZ2Utb24tbWlkZGxlXHJcbiAgICAgIGNhc2UgJ3JjMyc6IC8vIGxhcmdlLW9uLWxlZnRcclxuICAgICAgY2FzZSAncmM1JzogLy8gbGFyZ2Utb24tdG9wXHJcbiAgICAgIGNhc2UgJ3JjNic6ICAvLyBsYXJnZS1vbi10b3AtdHJpcGxlXHJcbiAgICAgIGNhc2UgJ3JjNyc6ICAvLyBsYXJnZS1vbi10b3AtcXVhZHJ1cGxlXHJcbiAgICAgICAgbWF4ID0gKG1heCAvIDQpIC0gMTU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1heCArICdweCc7XHJcbiAgfVxyXG4gIGtleXVwKGV2ZW50OiBhbnkpIHtcclxuXHRcdGNvbnN0IGNvZGUgPSBldmVudC53aGljaDtcclxuXHRcdGlmIChjb2RlID09PSAxMykge1xyXG4gICAgICBldmVudC50YXJnZXQuY2xpY2soKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19