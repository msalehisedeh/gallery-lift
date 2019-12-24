import * as tslib_1 from "tslib";
import { Component, OnChanges, OnInit, ElementRef, Input, Injector, Output, ComponentFactoryResolver, ChangeDetectorRef, ApplicationRef, EmbeddedViewRef, EventEmitter } from '@angular/core';
import { GalleryViewComponent } from './gallery-view.component';
let GalleryLiftComponent = class GalleryLiftComponent {
    constructor(el, appRef, injector, componentFactoryResolver, cdr) {
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
    ngOnInit() {
        this.root = this.host;
        while (this.root && this.root.tagName !== 'BODY') {
            this.root = this.root.parentNode;
        }
    }
    ngOnChanges(changes) {
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
    }
    range(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    pickRandomLayout() {
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
    }
    minHeightOf(index) {
        let min = null;
        switch (this.displayType) {
            case 'c1':
                min = this.maxHeight;
                break; // large-on-single
        }
        return min ? min + 'px' : null;
    }
    maxHeightOf(index) {
        let max = this.maxHeight;
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
    }
    checkFocused(button) {
        if (this.focused) {
            button.focus();
            this.focused = false;
        }
        return false;
    }
    liftUpImagery(index) {
        if (!this.galleryView) {
            this.galleryView = this.componentFactoryResolver
                .resolveComponentFactory(GalleryViewComponent)
                .create(this.injector);
            this.appRef.attachView(this.galleryView.hostView);
            this.root.appendChild(this.galleryView.hostView.rootNodes[0]);
        }
        const instance = this.galleryView.instance;
        instance.sideBySide = this.sideBySide;
        instance.liftOnZero = this.liftOnZero;
        instance.magnifyImageEnabled = this.magnifyImageEnabled;
        instance.gallery = this.gallery;
        instance.template = this.template;
        instance.slideEnabled = this.slideEnabled;
        instance.animationType = this.animationType;
        instance.liftUpImagery(this.root.getElementsByTagName(this.appRootName)[0], this.liftOnZero ? 0 : index);
    }
    evalTop() {
        let max = this.maxHeight;
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
    }
    keyup(event) {
        const code = event.which;
        if (code === 13) {
            event.target.click();
        }
    }
};
GalleryLiftComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ApplicationRef },
    { type: Injector },
    { type: ComponentFactoryResolver },
    { type: ChangeDetectorRef }
];
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
export { GalleryLiftComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1saWZ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZWRlaC9nYWxsZXJ5LWxpZnQvIiwic291cmNlcyI6WyJzcmMvYXBwL2dhbGxlcnktbGlmdC9nYWxsZXJ5LWxpZnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFDVCxNQUFNLEVBQ04sVUFBVSxFQUNWLEtBQUssRUFDTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLHdCQUF3QixFQUN4QixpQkFBaUIsRUFDakIsY0FBYyxFQUNkLGVBQWUsRUFDZixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFPaEUsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUE0Qi9CLFlBQ0UsRUFBYyxFQUNSLE1BQXNCLEVBQ3RCLFFBQWtCLEVBQ2hCLHdCQUFrRCxFQUNsRCxHQUFzQjtRQUh4QixXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2hCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUEvQmhDLFlBQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2QsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsU0FBSSxHQUFHLFNBQVMsQ0FBQztRQUNqQixTQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ2pCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFTixhQUFRLEdBQUUsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUM1QixhQUFRLEdBQUUsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUU3QixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQzNCLHFCQUFnQixHQUFHLEtB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UixLQUFLLEVBQUU7d0RBQW9CO0FBQ25CO0lBQVIsS0FBSyxFQUFFO2dFQUE0QjtBQUMzQjtJQUFSLEtBQUssRUFBRTs4REFBMEI7QUFDekI7SUFBUixLQUFLLEVBQUU7Z0VBQTJCO0FBQzFCO0lBQVIsS0FBSyxFQUFFO2lFQUE2QjtBQUM1QjtJQUFSLEtBQUssRUFBRTtxREFBZ0I7QUFDZjtJQUFSLEtBQUssRUFBRTtzREFBZTtBQUNkO0lBQVIsS0FBSyxFQUFFOzBEQUFxQjtBQUNwQjtJQUFSLEtBQUssRUFBRTt1REFBaUI7QUFDaEI7SUFBUixLQUFLLEVBQUU7d0RBQW1CO0FBQ2xCO0lBQVIsS0FBSyxFQUFFOzBEQUFxQjtBQUNwQjtJQUFSLEtBQUssRUFBRTsyREFBd0I7QUFDdkI7SUFBUixLQUFLLEVBQUU7MERBQThCO0FBQzdCO0lBQVIsS0FBSyxFQUFFO29EQUE0QjtBQUMzQjtJQUFSLEtBQUssRUFBRTt5REFBMEI7QUExQnZCLG9CQUFvQjtJQUxoQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsY0FBYztRQUN4Qix1bEVBQTRDOztLQUU3QyxDQUFDO0dBQ1csb0JBQW9CLENBd05oQztTQXhOWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uSW5pdCxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIEluamVjdG9yLFxyXG4gIE91dHB1dCxcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQXBwbGljYXRpb25SZWYsXHJcbiAgRW1iZWRkZWRWaWV3UmVmLFxyXG4gIEV2ZW50RW1pdHRlclxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgR2FsbGVyeVZpZXdDb21wb25lbnQgfSBmcm9tICcuL2dhbGxlcnktdmlldy5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnYWxsZXJ5LWxpZnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nYWxsZXJ5LWxpZnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2dhbGxlcnktbGlmdC5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2FsbGVyeUxpZnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XHJcbiAgZ2FsbGVyeVZpZXc6IGFueTtcclxuICBsYXlMaXN0ID0gWzFdO1xyXG4gIGRpc3BsYXlUeXBlID0gJ2MxJztcclxuICBob3N0ID0gdW5kZWZpbmVkO1xyXG4gIHJvb3QgPSB1bmRlZmluZWQ7XHJcbiAgZm9jdXNlZCA9IGZhbHNlO1xyXG4gIFxyXG4gIEBPdXRwdXQoKSBvbnNlbGVjdD0gbmV3IEV2ZW50RW1pdHRlcigpXHJcbiAgQE91dHB1dCgpIG9uYWN0aW9uPSBuZXcgRXZlbnRFbWl0dGVyKClcclxuXHJcbiAgQElucHV0KCkgc2lkZUJ5U2lkZSA9IHRydWU7XHJcbiAgQElucHV0KCkgbGlmdE9uWmVybyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNob3dSZW1haW5pbmdDb3VudCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNob3dUaXRsZU9uSG92ZXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBzaG93TWVzc2FnZU9uSG92ZXIgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIG1hZ25pZnlJbWFnZUVuYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBnYWxsZXJ5OiBhbnlbXTtcclxuICBASW5wdXQoKSB0ZW1wbGF0ZTogYW55O1xyXG4gIEBJbnB1dCgpIGJvcmRlck9uVmlldyA9IG51bGw7XHJcbiAgQElucHV0KCkgbWF4SGVpZ2h0ID0gNDAwO1xyXG4gIEBJbnB1dCgpIGRpbU9uSG92ZXIgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHNsaWRlRW5hYmxlZCA9IHRydWU7XHJcbiAgQElucHV0KCkgYW5pbWF0aW9uVHlwZSA9ICdub25lJztcclxuICBASW5wdXQoKSBob3Zlck1lc3NhZ2UgPSAnU2VlIG1vcmUuLi4nO1xyXG4gIEBJbnB1dCgpIGxheW91dCA9ICdsYXJnZS1vbi1zaW5nbGUnO1xyXG4gIEBJbnB1dCgpIGFwcFJvb3ROYW1lID0gJ2FwcC1yb290JztcclxuICBcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGVsOiBFbGVtZW50UmVmLFxyXG5cdFx0cHJpdmF0ZSBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxyXG5cdFx0cHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICB0aGlzLmhvc3QgPSBlbC5uYXRpdmVFbGVtZW50O1xyXG4gIH1cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMucm9vdCA9IHRoaXMuaG9zdDtcclxuICAgIHdoaWxlICh0aGlzLnJvb3QgJiYgdGhpcy5yb290LnRhZ05hbWUgIT09ICdCT0RZJykge1xyXG4gICAgICB0aGlzLnJvb3QgPSB0aGlzLnJvb3QucGFyZW50Tm9kZTtcclxuICAgIH1cclxuICB9XHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogYW55KSB7XHJcbiAgICBpZiAoY2hhbmdlcy5nYWxsZXJ5ICYmIHRoaXMubGF5b3V0ID09PSAncmFuZG9tJykge1xyXG4gICAgICB0aGlzLnBpY2tSYW5kb21MYXlvdXQoKTtcclxuICAgIH0gZWxzZSBpZiAoY2hhbmdlcy5sYXlvdXQpIHtcclxuICAgICAgc3dpdGNoKHRoaXMubGF5b3V0KSB7XHJcbiAgICAgICAgY2FzZSAnbGFyZ2Utb24tc2luZ2xlJzogdGhpcy5kaXNwbGF5VHlwZSA9ICdjMSc7dGhpcy5sYXlMaXN0ID0gWzFdOyBicmVhaztcclxuICAgICAgICBjYXNlICdzcGxpdC1vbi1kdWFsJzogdGhpcy5kaXNwbGF5VHlwZSA9ICdjMic7dGhpcy5sYXlMaXN0ID0gWzEsMl07IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2xhcmdlLW9uLXJpZ2h0JzogdGhpcy5kaXNwbGF5VHlwZSA9ICdjMyc7dGhpcy5sYXlMaXN0ID0gWzEsMiwzXTsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnc3BsaXQtb24tcXVhZHJ1cGxlJzogdGhpcy5kaXNwbGF5VHlwZSA9ICdjNCc7dGhpcy5sYXlMaXN0ID0gWzEsMiwzLDRdOyBicmVhaztcclxuICAgICAgICBjYXNlICdsYXJnZS1vbi1taWRkbGUnOiB0aGlzLmRpc3BsYXlUeXBlID0gJ2M1Jzt0aGlzLmxheUxpc3QgPSBbMSwyLDMsNCw1XTsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbGFyZ2Utb24tbGVmdCc6IHRoaXMuZGlzcGxheVR5cGUgPSAncmMzJzt0aGlzLmxheUxpc3QgPSBbMSwyLDNdOyBicmVhaztcclxuICAgICAgICBjYXNlICdsYXJnZS1vbi1zaWRlcyc6IHRoaXMuZGlzcGxheVR5cGUgPSAncmM0Jzt0aGlzLmxheUxpc3QgPSBbMSwyLDMsNF07IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2xhcmdlLW9uLXRvcCc6IHRoaXMuZGlzcGxheVR5cGUgPSAncmM1Jzt0aGlzLmxheUxpc3QgPSBbMSwyLDNdOyBicmVhaztcclxuICAgICAgICBjYXNlICdsYXJnZS1vbi10b3AtdHJpcGxlJzogdGhpcy5kaXNwbGF5VHlwZSA9ICdyYzYnO3RoaXMubGF5TGlzdCA9IFsxLDIsMyw0XTsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbGFyZ2Utb24tdG9wLXF1YWRydXBsZSc6IHRoaXMuZGlzcGxheVR5cGUgPSAncmM3Jzt0aGlzLmxheUxpc3QgPSBbMSwyLDMsNCw1XTsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbGF5ZXJlZC1vbi1taWRkbGUnOiB0aGlzLmRpc3BsYXlUeXBlID0gJ21jMSc7dGhpcy5sYXlMaXN0ID0gWzEsMiwzLDRdOyBicmVhaztcclxuICAgICAgICBjYXNlICdsYXllcmVkLW9uLWNvcm5lcnMnOiB0aGlzLmRpc3BsYXlUeXBlID0gJ21jMic7dGhpcy5sYXlMaXN0ID0gWzEsMiwzLDQsNV07IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3JhbmRvbSc6IFxyXG4gICAgICAgICAgaWYgKHRoaXMuZ2FsbGVyeSkge1xyXG4gICAgICAgICAgICB0aGlzLnBpY2tSYW5kb21MYXlvdXQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGNoYW5nZXMubWF4SGVpZ2h0KSB7XHJcbiAgICAgIGlmICh0aGlzLm1heEhlaWdodCA8IDEwMCkge1xyXG4gICAgICAgIHRoaXMubWF4SGVpZ2h0ID0gMTAwO1xyXG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmhvc3QuY2xpZW50SGVpZ2h0ID4gMTAwICYmIHRoaXMuaG9zdC5jbGllbnRIZWlnaHQgPCB0aGlzLm1heEhlaWdodCkge1xyXG4gICAgICAgIHRoaXMubWF4SGVpZ2h0ID0gdGhpcy5ob3N0LmNsaWVudEhlaWdodDtcclxuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcHJpdmF0ZSByYW5nZShtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcbiAgfVxyXG4gIHByaXZhdGUgcGlja1JhbmRvbUxheW91dCgpIHtcclxuICAgIGlmICh0aGlzLmdhbGxlcnkubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIHRoaXMuZGlzcGxheVR5cGUgPSAnYzEnO3RoaXMubGF5TGlzdCA9IFsxXTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5nYWxsZXJ5Lmxlbmd0aCA9PT0gMikge1xyXG4gICAgICBzd2l0Y2godGhpcy5yYW5nZSgxLDIpKSB7XHJcbiAgICAgICAgY2FzZSAxOiB0aGlzLmRpc3BsYXlUeXBlID0gJ2MxJzt0aGlzLmxheUxpc3QgPSBbMV07YnJlYWs7XHJcbiAgICAgICAgY2FzZSAyOiB0aGlzLmRpc3BsYXlUeXBlID0gJ2MyJzt0aGlzLmxheUxpc3QgPSBbMSwgMl07YnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodGhpcy5nYWxsZXJ5Lmxlbmd0aCA9PT0gMykge1xyXG4gICAgICBzd2l0Y2godGhpcy5yYW5nZSgxLDUpKSB7XHJcbiAgICAgICAgY2FzZSAxOiB0aGlzLmRpc3BsYXlUeXBlID0gJ2MxJzt0aGlzLmxheUxpc3QgPSBbMV07YnJlYWs7XHJcbiAgICAgICAgY2FzZSAyOiB0aGlzLmRpc3BsYXlUeXBlID0gJ2MyJzt0aGlzLmxheUxpc3QgPSBbMSwgMl07YnJlYWs7XHJcbiAgICAgICAgY2FzZSAzOiB0aGlzLmRpc3BsYXlUeXBlID0gJ2MzJzt0aGlzLmxheUxpc3QgPSBbMSwgMiwgM107YnJlYWs7XHJcbiAgICAgICAgY2FzZSA0OiB0aGlzLmRpc3BsYXlUeXBlID0gJ3JjMyc7dGhpcy5sYXlMaXN0ID0gWzEsIDIsIDNdO2JyZWFrO1xyXG4gICAgICAgIGNhc2UgNTogdGhpcy5kaXNwbGF5VHlwZSA9ICdyYzUnO3RoaXMubGF5TGlzdCA9IFsxLCAyLCAzXTticmVhaztcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLmdhbGxlcnkubGVuZ3RoID09PSA0KSB7XHJcbiAgICAgIHN3aXRjaCh0aGlzLnJhbmdlKDEsOSkpIHtcclxuICAgICAgICBjYXNlIDE6IHRoaXMuZGlzcGxheVR5cGUgPSAnYzEnO3RoaXMubGF5TGlzdCA9IFsxXTticmVhaztcclxuICAgICAgICBjYXNlIDI6IHRoaXMuZGlzcGxheVR5cGUgPSAnYzInO3RoaXMubGF5TGlzdCA9IFsxLCAyXTticmVhaztcclxuICAgICAgICBjYXNlIDM6IHRoaXMuZGlzcGxheVR5cGUgPSAnYzMnO3RoaXMubGF5TGlzdCA9IFsxLCAyLCAzXTticmVhaztcclxuICAgICAgICBjYXNlIDQ6IHRoaXMuZGlzcGxheVR5cGUgPSAncmMzJzt0aGlzLmxheUxpc3QgPSBbMSwgMiwgM107YnJlYWs7XHJcbiAgICAgICAgY2FzZSA1OiB0aGlzLmRpc3BsYXlUeXBlID0gJ3JjNSc7dGhpcy5sYXlMaXN0ID0gWzEsIDIsIDNdO2JyZWFrO1xyXG4gICAgICAgIGNhc2UgNjogdGhpcy5kaXNwbGF5VHlwZSA9ICdjNCc7dGhpcy5sYXlMaXN0ID0gWzEsIDIsIDMsIDRdO2JyZWFrO1xyXG4gICAgICAgIGNhc2UgNzogdGhpcy5kaXNwbGF5VHlwZSA9ICdyYzQnO3RoaXMubGF5TGlzdCA9IFsxLCAyLCAzLCA0XTticmVhaztcclxuICAgICAgICBjYXNlIDg6IHRoaXMuZGlzcGxheVR5cGUgPSAncmM2Jzt0aGlzLmxheUxpc3QgPSBbMSwgMiwgMywgNF07YnJlYWs7XHJcbiAgICAgICAgY2FzZSA5OiB0aGlzLmRpc3BsYXlUeXBlID0gJ21jMSc7dGhpcy5sYXlMaXN0ID0gWzEsIDIsIDMsIDRdO2JyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZ2FsbGVyeS5sZW5ndGggPj0gNSkge1xyXG4gICAgICBzd2l0Y2godGhpcy5yYW5nZSgxLDEyKSkge1xyXG4gICAgICAgIGNhc2UgMTogdGhpcy5kaXNwbGF5VHlwZSA9ICdjMSc7dGhpcy5sYXlMaXN0ID0gWzFdO2JyZWFrO1xyXG4gICAgICAgIGNhc2UgMjogdGhpcy5kaXNwbGF5VHlwZSA9ICdjMic7dGhpcy5sYXlMaXN0ID0gWzEsIDJdO2JyZWFrO1xyXG4gICAgICAgIGNhc2UgMzogdGhpcy5kaXNwbGF5VHlwZSA9ICdjMyc7dGhpcy5sYXlMaXN0ID0gWzEsIDIsIDNdO2JyZWFrO1xyXG4gICAgICAgIGNhc2UgNDogdGhpcy5kaXNwbGF5VHlwZSA9ICdyYzMnO3RoaXMubGF5TGlzdCA9IFsxLCAyLCAzXTticmVhaztcclxuICAgICAgICBjYXNlIDU6IHRoaXMuZGlzcGxheVR5cGUgPSAncmM1Jzt0aGlzLmxheUxpc3QgPSBbMSwgMiwgM107YnJlYWs7XHJcbiAgICAgICAgY2FzZSA2OiB0aGlzLmRpc3BsYXlUeXBlID0gJ2M0Jzt0aGlzLmxheUxpc3QgPSBbMSwgMiwgMywgNF07YnJlYWs7XHJcbiAgICAgICAgY2FzZSA3OiB0aGlzLmRpc3BsYXlUeXBlID0gJ3JjNCc7dGhpcy5sYXlMaXN0ID0gWzEsIDIsIDMsIDRdO2JyZWFrO1xyXG4gICAgICAgIGNhc2UgODogdGhpcy5kaXNwbGF5VHlwZSA9ICdyYzYnO3RoaXMubGF5TGlzdCA9IFsxLCAyLCAzLCA0XTticmVhaztcclxuICAgICAgICBjYXNlIDk6IHRoaXMuZGlzcGxheVR5cGUgPSAnbWMxJzt0aGlzLmxheUxpc3QgPSBbMSwgMiwgMywgNF07YnJlYWs7XHJcbiAgICAgICAgY2FzZSAxMDogdGhpcy5kaXNwbGF5VHlwZSA9ICdjNSc7dGhpcy5sYXlMaXN0ID0gWzEsIDIsIDMsIDQsIDVdO2JyZWFrO1xyXG4gICAgICAgIGNhc2UgMTE6IHRoaXMuZGlzcGxheVR5cGUgPSAncmM3Jzt0aGlzLmxheUxpc3QgPSBbMSwgMiwgMywgNCwgNV07YnJlYWs7XHJcbiAgICAgICAgY2FzZSAxMjogdGhpcy5kaXNwbGF5VHlwZSA9ICdtYzInO3RoaXMubGF5TGlzdCA9IFsxLCAyLCAzLCA0LCA1XTticmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBtaW5IZWlnaHRPZihpbmRleDogbnVtYmVyKSB7XHJcbiAgICBsZXQgbWluID0gbnVsbDtcclxuICAgIHN3aXRjaCh0aGlzLmRpc3BsYXlUeXBlKSB7XHJcbiAgICAgIGNhc2UgJ2MxJzogIG1pbiA9IHRoaXMubWF4SGVpZ2h0OyBicmVhazsgLy8gbGFyZ2Utb24tc2luZ2xlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWluICA/IG1pbiArICdweCcgOiBudWxsO1xyXG4gIH1cclxuICBtYXhIZWlnaHRPZihpbmRleDogbnVtYmVyKSB7XHJcbiAgICBsZXQgbWF4ID0gdGhpcy5tYXhIZWlnaHQ7XHJcbiAgICBzd2l0Y2godGhpcy5kaXNwbGF5VHlwZSkge1xyXG4gICAgICBjYXNlICdtYzEnOiAvLyBsYXllcmVkLW9uLW1pZGRsZVxyXG4gICAgICBjYXNlICdtYzInOiAvLyBsYXllcmVkLW9uLWNvcm5lcnNcclxuICAgICAgICBtYXggPSB0aGlzLm1heEhlaWdodCAvIDM7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3JjNSc6IC8vIGxhcmdlLW9uLXRvcFxyXG4gICAgICBjYXNlICdyYzYnOiAvLyBsYXJnZS1vbi10b3AtdHJpcGxlXHJcbiAgICAgIGNhc2UgJ3JjNyc6IC8vIGxhcmdlLW9uLXRvcC1xdWFkcnVwbGVcclxuICAgICAgICBtYXggPSB0aGlzLm1heEhlaWdodCAvIDI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2MxJzogYnJlYWs7IC8vIGxhcmdlLW9uLXNpbmdsZVxyXG4gICAgICBjYXNlICdjMic6IGJyZWFrOyAvLyBzcGxpdC1vbi1kdWFsXHJcbiAgICAgIGNhc2UgJ2MzJzogLy8gc3BsaXQtb24tcmlnaHRcclxuICAgICAgICBtYXggPSBpbmRleCA8IDIgPyAodGhpcy5tYXhIZWlnaHQgLyAyKTogbWF4O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdjNCc6IC8vIHNwbGl0LW9uLXF1YWRydXBsZVxyXG4gICAgICAgIG1heCA9IHRoaXMubWF4SGVpZ2h0IC8gMjsgYnJlYWs7IFxyXG4gICAgICBjYXNlICdjNSc6IC8vIGxhcmdlLW9uLW1pZGRsZVxyXG4gICAgICAgIG1heCA9IGluZGV4ID09PSAyID8gbWF4IDogKHRoaXMubWF4SGVpZ2h0IC8gMik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3JjMyc6IC8vIGxhcmdlLW9uLWxlZnRcclxuICAgICAgICBtYXggPSBpbmRleCA9PT0gMCA/IG1heCA6ICh0aGlzLm1heEhlaWdodCAvIDIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdyYzQnOiAvLyBsYXJnZS1vbi1zaWRlc1xyXG4gICAgICAgIG1heCA9IChpbmRleCA9PT0gMCB8fCBpbmRleCA9PT0gMykgPyBtYXggOiAodGhpcy5tYXhIZWlnaHQgLyAyKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHJldHVybiBtYXggKyAncHgnO1xyXG4gIH1cclxuICBjaGVja0ZvY3VzZWQoYnV0dG9uOiBIVE1MRWxlbWVudCkge1xyXG4gICAgaWYgKHRoaXMuZm9jdXNlZCkge1xyXG4gICAgICBidXR0b24uZm9jdXMoKTtcclxuICAgICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGxpZnRVcEltYWdlcnkoaW5kZXg6IG51bWJlcikge1xyXG4gICAgaWYgKCF0aGlzLmdhbGxlcnlWaWV3KSB7XHJcbiAgICAgIHRoaXMuZ2FsbGVyeVZpZXcgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxyXG4gICAgICAgIC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShHYWxsZXJ5Vmlld0NvbXBvbmVudClcclxuICAgICAgICAuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xyXG4gICAgICB0aGlzLmFwcFJlZi5hdHRhY2hWaWV3KHRoaXMuZ2FsbGVyeVZpZXcuaG9zdFZpZXcpO1xyXG4gICAgICB0aGlzLnJvb3QuYXBwZW5kQ2hpbGQoKHRoaXMuZ2FsbGVyeVZpZXcuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pLnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBpbnN0YW5jZSA9ICg8R2FsbGVyeVZpZXdDb21wb25lbnQ+dGhpcy5nYWxsZXJ5Vmlldy5pbnN0YW5jZSk7XHJcbiAgICBpbnN0YW5jZS5zaWRlQnlTaWRlID0gdGhpcy5zaWRlQnlTaWRlO1xyXG4gICAgaW5zdGFuY2UubGlmdE9uWmVybyA9IHRoaXMubGlmdE9uWmVybztcclxuICAgIGluc3RhbmNlLm1hZ25pZnlJbWFnZUVuYWJsZWQgPSB0aGlzLm1hZ25pZnlJbWFnZUVuYWJsZWQ7XHJcbiAgICBpbnN0YW5jZS5nYWxsZXJ5ID0gdGhpcy5nYWxsZXJ5O1xyXG4gICAgaW5zdGFuY2UudGVtcGxhdGUgPSB0aGlzLnRlbXBsYXRlO1xyXG4gICAgaW5zdGFuY2Uuc2xpZGVFbmFibGVkID0gdGhpcy5zbGlkZUVuYWJsZWQ7XHJcbiAgICBpbnN0YW5jZS5hbmltYXRpb25UeXBlID0gdGhpcy5hbmltYXRpb25UeXBlO1xyXG4gICAgaW5zdGFuY2UubGlmdFVwSW1hZ2VyeSh0aGlzLnJvb3QuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGhpcy5hcHBSb290TmFtZSlbMF0sIHRoaXMubGlmdE9uWmVybyA/IDAgOiBpbmRleCk7XHJcbiAgfVxyXG4gIGV2YWxUb3AoKSB7XHJcbiAgICBsZXQgbWF4ID0gdGhpcy5tYXhIZWlnaHQ7XHJcbiAgICBzd2l0Y2godGhpcy5kaXNwbGF5VHlwZSkge1xyXG4gICAgICBjYXNlICdtYzEnOiAvLyBsYXllcmVkLW9uLW1pZGRsZVxyXG4gICAgICBjYXNlICdtYzInOiAvLyBsYXllcmVkLW9uLWNvcm5lcnNcclxuICAgICAgICBtYXggPSAobWF4IC8gNikgLSAxNTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnYzInOiAvLyBzcGxpdC1vbi1kdWFsXHJcbiAgICAgIGNhc2UgJ2MxJzogLy8gbGFyZ2Utb24tc2luZ2xlXHJcbiAgICAgIGNhc2UgJ2MzJzogLy8gc3BsaXQtb24tcmlnaHRcclxuICAgICAgY2FzZSAncmM0JzogLy8gbGFyZ2Utb24tc2lkZXNcclxuICAgICAgICBtYXggPSAobWF4IC8gMikgLSAxNTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnYzQnOiAvLyBzcGxpdC1vbi1xdWFkcnVwbGVcclxuICAgICAgY2FzZSAnYzUnOiAvLyBsYXJnZS1vbi1taWRkbGVcclxuICAgICAgY2FzZSAncmMzJzogLy8gbGFyZ2Utb24tbGVmdFxyXG4gICAgICBjYXNlICdyYzUnOiAvLyBsYXJnZS1vbi10b3BcclxuICAgICAgY2FzZSAncmM2JzogIC8vIGxhcmdlLW9uLXRvcC10cmlwbGVcclxuICAgICAgY2FzZSAncmM3JzogIC8vIGxhcmdlLW9uLXRvcC1xdWFkcnVwbGVcclxuICAgICAgICBtYXggPSAobWF4IC8gNCkgLSAxNTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWF4ICsgJ3B4JztcclxuICB9XHJcbiAga2V5dXAoZXZlbnQ6IGFueSkge1xyXG5cdFx0Y29uc3QgY29kZSA9IGV2ZW50LndoaWNoO1xyXG5cdFx0aWYgKGNvZGUgPT09IDEzKSB7XHJcbiAgICAgIGV2ZW50LnRhcmdldC5jbGljaygpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=