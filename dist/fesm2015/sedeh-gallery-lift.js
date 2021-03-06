import { __decorate } from 'tslib';
import { EventEmitter, ElementRef, Renderer2, ChangeDetectorRef, Output, Input, Component, ApplicationRef, Injector, ComponentFactoryResolver, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

let GalleryViewComponent = class GalleryViewComponent {
    constructor(host, renderer, cdr) {
        this.host = host;
        this.renderer = renderer;
        this.cdr = cdr;
        this.tracks = [];
        this.loaded = true;
        this.selectedIndex = 0;
        this.magnified = false;
        this.liftup = false;
        this.focused = false;
        this.expanded = false;
        this.smallScreen = false;
        this.root = undefined;
        this.onselect = new EventEmitter();
        this.onaction = new EventEmitter();
        this.sideBySide = true;
        this.liftOnZero = false;
        this.magnifyImageEnabled = false;
        this.gallery = [];
        this.slideEnabled = true;
        this.animationType = 'none';
    }
    ngOnInit() {
        if (navigator.platform.toUpperCase().indexOf('MAC') < 0) {
            document.addEventListener("webkitfullscreenchange", (event) => {
                if (!window.screenTop && !window.screenY) {
                    this.fullScreen();
                }
            });
            document.addEventListener("mozfullscreenchange", (event) => {
                const win = window;
                const isFullScreen = win.fullScreen ||
                    (win.innerWidth == screen.width && win.innerHeight == screen.height);
                if (!isFullScreen) {
                    this.fullScreen();
                }
            });
            document.addEventListener("MSFullscreenChange", (event) => {
                const win = window;
                const isFullScreen = win.fullScreen ||
                    (win.innerWidth == screen.width && win.innerHeight == screen.height);
                if (!isFullScreen) {
                    this.fullScreen();
                }
            });
        }
    }
    checkFocused(button) {
        if (this.focused) {
            button.focus();
            this.focused = false;
        }
        return false;
    }
    liftUpImagery(root, index) {
        this.selectedIndex = this.liftOnZero ? 0 : index;
        this.liftup = true;
        this.focused = true;
        this.tracks = [];
        this.root = root;
        for (let item of this.gallery) {
            this.tracks.push({
                leftSide: false,
                rightSide: true,
                action: ''
            });
        }
        if (this.tracks.length) {
            this.tracks[0].rightSide = false;
        }
        this.cdr.detectChanges();
        this.renderer.setStyle(this.root, 'display', 'none');
        this.renderer.setStyle(this.host.nativeElement, 'display', 'block');
        this.onselect.emit({
            index: this.selectedIndex,
            action: 'lift up'
        });
    }
    liftDownImagery() {
        if (this.expanded) {
            this.fullScreen();
        }
        this.liftup = false;
        this.focused = false;
        this.cdr.detectChanges();
        this.renderer.setStyle(this.root, 'display', 'block');
        this.renderer.setStyle(this.host.nativeElement, 'display', 'none');
        this.onselect.emit({
            index: this.selectedIndex,
            action: 'lift down'
        });
    }
    magnify(liftView) {
        this.magnified = !this.magnified;
    }
    fullScreen() {
        const doc = document;
        this.expanded = !this.expanded;
        if (this.expanded) {
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
    previous() {
        this.loaded = false;
        this.cdr.detectChanges();
        const oldIndex = this.selectedIndex;
        this.selectedIndex = this.selectedIndex > 0 ? this.selectedIndex - 1 : this.gallery.length - 1;
        const rightIndex = this.selectedIndex < (this.gallery.length - 1) ? this.selectedIndex + 1 : 0;
        const leftIndex = oldIndex > 0 ? oldIndex - 1 : this.gallery.length - 1;
        this.onaction.emit({ action: 'view previous', index: this.selectedIndex, time: new Date() });
        if (this.slideEnabled) {
            this.tracks[leftIndex].leftSide = false;
            this.tracks[oldIndex].leftSide = true;
            this.tracks[oldIndex].action = 'slideOutToRight';
            this.tracks[this.selectedIndex].rightSide = false;
            this.tracks[rightIndex].rightSide = true;
            this.tracks[this.selectedIndex].action = 'slideInToRight';
        }
        this.loaded = true;
        this.cdr.detectChanges();
        this.onaction.emit({
            action: "view previous",
            index: this.selectedIndex,
            time: new Date()
        });
    }
    next() {
        this.loaded = false;
        this.cdr.detectChanges();
        const oldIndex = this.selectedIndex;
        this.selectedIndex = (this.selectedIndex < this.gallery.length - 1) ? this.selectedIndex + 1 : 0;
        const rightIndex = oldIndex < (this.gallery.length - 1) ? oldIndex + 1 : 0;
        const leftIndex = this.selectedIndex > 0 ? this.selectedIndex - 1 : this.gallery.length - 1;
        this.onaction.emit({ action: 'view next', index: this.selectedIndex, time: new Date() });
        if (this.slideEnabled) {
            this.tracks[rightIndex].rightSide = false;
            this.tracks[oldIndex].rightSide = true;
            this.tracks[oldIndex].action = 'slideOutToLeft';
            this.tracks[this.selectedIndex].leftSide = false;
            this.tracks[leftIndex].leftSide = true;
            this.tracks[this.selectedIndex].action = 'slideInToLeft';
        }
        this.loaded = true;
        this.cdr.detectChanges();
        this.onaction.emit({
            action: "view next",
            index: this.selectedIndex,
            time: new Date()
        });
    }
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
    touchHover(event) {
        this.onaction.emit({
            action: event.type,
            index: this.selectedIndex,
            time: new Date()
        });
    }
    hoverOver(event) {
        this.onaction.emit({
            action: event.type,
            index: this.selectedIndex,
            time: new Date()
        });
    }
    hoverOut(event) {
        this.onaction.emit({
            action: event.type,
            index: this.selectedIndex,
            time: new Date()
        });
    }
    keyup(event) {
        const code = event.which;
        if (code === 13) {
            event.target.click();
        }
    }
};
GalleryViewComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
__decorate([
    Output()
], GalleryViewComponent.prototype, "onselect", void 0);
__decorate([
    Output()
], GalleryViewComponent.prototype, "onaction", void 0);
__decorate([
    Input()
], GalleryViewComponent.prototype, "sideBySide", void 0);
__decorate([
    Input()
], GalleryViewComponent.prototype, "liftOnZero", void 0);
__decorate([
    Input()
], GalleryViewComponent.prototype, "magnifyImageEnabled", void 0);
__decorate([
    Input()
], GalleryViewComponent.prototype, "gallery", void 0);
__decorate([
    Input()
], GalleryViewComponent.prototype, "template", void 0);
__decorate([
    Input()
], GalleryViewComponent.prototype, "slideEnabled", void 0);
__decorate([
    Input()
], GalleryViewComponent.prototype, "animationType", void 0);
GalleryViewComponent = __decorate([
    Component({
        selector: 'gallery-view',
        template: "\r\n<div class=\"lift\" [class.piled]=\"!sideBySide\">\r\n    <div class=\"left-controls\">\r\n        <a title=\"View previous\"\r\n            class=\"prev fa fa-chevron-left\" \r\n            tabindex=\"0\"\r\n            (keyup)=\"keyup($event)\"\r\n            (click)=\"previous()\"></a>\r\n    </div>\r\n    <div class=\"lifter\" \r\n        [class.vertical]=\"!sideBySide\"\r\n        [class.fullscreen]=\"expanded\">\r\n        <div #liftView\r\n            class=\"lift-view\" \r\n            [class.magnified]=\"magnified\">\r\n            <div class=\"lift-item\" \r\n                *ngFor=\"let item of gallery; let i = index\"\r\n                [style.z-index]=\"selectedIndex == i ? 1 : 0\"\r\n                [attr.aria-live]=\"smallScreen ? null : 'polite'\"\r\n                [attr.aria-atomic]=\"smallScreen ? null : true\"\r\n                [attr.aria-hidden]=\"!smallScreen && selectedIndex !== i\"\r\n                [class.left-side]=\"slideEnabled && tracks[i].leftSide ? true : null\"\r\n                [class.right-side]=\"slideEnabled && tracks[i].rightSide ? true : null\"\r\n                [class.slide-in-to-left]=\"slideEnabled && tracks[i].action === 'slideInToLeft' ? true : null\"\r\n                [class.slide-in-to-right]=\"slideEnabled && tracks[i].action === 'slideInToRight' ? true : null\"\r\n                [class.slide-out-to-left]=\"slideEnabled && tracks[i].action === 'slideOutToLeft' ? true : null\"\r\n                [class.slide-out-to-right]=\"slideEnabled && tracks[i].action === 'slideOutToRight' ? true : null\" \r\n                (touchmove)=\"touchHover($event)\"\r\n                (mouseover)=\"hoverOver($event)\"><img \r\n                *ngIf=\"loaded && (gallery[i].type === undefined || gallery[i].type === 'image')\"  \r\n                aria-hidden=\"true\"\r\n                width=\"100%\" \r\n                [class]=\"animationType\"\r\n                [src]=\"gallery[i].src\" /><video \r\n\r\n                *ngIf=\"loaded && gallery[i].type === 'video'\" \r\n                width=\"100%\" \r\n                [class]=\"animationType\"\r\n                [attr.src]=\"gallery[i].src\" \r\n                [attr.poster]=\"gallery[i].poster ? gallery[i].poster : null\"\r\n                (play)=\"videoEvent($event)\"\r\n                (pause)=\"videoEvent($event)\"\r\n                (ended)=\"videoEvent($event)\"\r\n                (seeked)=\"videoEvent($event)\"\r\n                (error)=\"videoEvent($event)\"\r\n                (fullscreenchange)=\"videoEvent($event)\"\r\n                controls></video>\r\n                <div class=\"lift-info off-screen\" [attr.aria-hidden]=\"selectedIndex !== i\" *ngIf=\"template && gallery[i].data\">\r\n                    <ng-container \r\n                        [ngTemplateOutlet]=\"template\" \r\n                        [ngTemplateOutletContext]=\"{data: gallery[i].data, selected: i+1, total: gallery.length}\"></ng-container>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div \r\n            class=\"lift-info\" \r\n            aria-hidden=\"true\"\r\n             *ngIf=\"template && gallery[selectedIndex].data\">\r\n            <ng-container \r\n                [ngTemplateOutlet]=\"template\" \r\n                [ngTemplateOutletContext]=\"{data: gallery[selectedIndex].data, selected: selectedIndex+1, total: gallery.length}\">\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n    <div class=\"right-controls\">\r\n        <a #closeButton [class.focused]=\"checkFocused(closeButton)\"\r\n            tabindex=\"0\"  \r\n            class=\"close fa fa-close\" \r\n            title=\"Close viewer\"\r\n            (click)=\"liftDownImagery()\" \r\n            (keyup)=\"keyup($event)\"></a>\r\n        <span class=\"top-wrap\">\r\n            <a class=\"fa\" tabindex=\"0\"\r\n                (click)=\"fullScreen()\" \r\n                (keyup)=\"keyup($event)\"\r\n                [attr.title]=\"expanded ? 'Normal screen view' : 'Full screen view'\"\r\n                [class.fa-expand]=\"!expanded\" \r\n                [class.fa-compress]=\"expanded\"></a>\r\n            <a *ngIf=\"magnifyImageEnabled\" class=\"magnify fa\" tabindex=\"0\"\r\n                (click)=\"magnify(liftView)\" \r\n                (keyup)=\"keyup($event)\"\r\n                [attr.title]=\"magnified ? 'Normal Image' : 'Magnify Image'\"\r\n                [class.fa-expand]=\"!magnified\" \r\n                [class.fa-compress]=\"magnified\"></a>\r\n            <a *ngIf=\"template && gallery[selectedIndex].data\"\r\n                class=\"fa\" tabindex=\"0\"\r\n                (click)=\"sideBySide = !sideBySide\" \r\n                (keyup)=\"keyup($event)\"\r\n                [attr.title]=\"sideBySide ? 'Align Vertical' : 'Align Horizontal'\"\r\n                [class.fa-columns]=\"!sideBySide\" \r\n                [class.fa-bars]=\"sideBySide\"></a>\r\n            <a [href]=\"gallery[selectedIndex].src\" \r\n                tabindex=\"0\" title=\"download\" \r\n                class=\"download fa fa-download\" \r\n                (keyup)=\"keyup($event)\"\r\n                download></a>\r\n        </span>\r\n        <a title=\"View next\"\r\n            class=\"next fa fa-chevron-right\" \r\n            tabindex=\"0\" \r\n            (keyup)=\"keyup($event)\"\r\n            (click)=\"next()\"></a>\r\n    </div>\r\n    <span tabindex=\"0\" (focus)=\"closeButton.focus()\"></span>\r\n</div>\r\n",
        styles: [":host{box-sizing:border-box;padding:0;margin:0;position:fixed;display:none;top:0;left:0;right:0;z-index:99;width:100%;height:100%;background-color:rgba(0,0,0,.95)}:host .off-screen{display:block;width:1px;height:1px;position:absolute;left:-99999px;top:-99999px}:host .lift{width:100%;height:100%;min-height:300px;position:absolute;overflow:auto;display:flex;flex-direction:row}:host .lift .left-controls{width:30px;height:100vh;color:#fff;background-color:transparent;padding:20% 0;box-sizing:border-box;position:absolute;top:0;left:0}:host .lift .left-controls .prev{top:50%;width:22px;left:8px}:host .lift .left-controls a{font-size:1.8rem;cursor:pointer;text-align:center;width:100%;position:absolute;display:flex}:host .lift .left-controls a:hover{color:#ccc}:host .lift .lifter{flex:1;display:flex;flex-direction:row;margin:0 30px}:host .lift .lifter .lift-view{flex:1;margin:20px;border:2px solid #d1e4be;position:relative;background-color:#fff;overflow:hidden}:host .lift .lifter .lift-view .lift-item{position:absolute;width:100%;height:100%;background-color:#fff;overflow:hidden}:host .lift .lifter .lift-view .lift-item img{position:relative;vertical-align:middle}:host .lift .lifter .lift-view .lift-item.selected{left:0}:host .lift .lifter .lift-view .lift-item.left-side{left:-100%}:host .lift .lifter .lift-view .lift-item.right-side{left:100%}:host .lift .lifter .lift-view .lift-item.slide-in-to-left{left:0;-webkit-animation:.5s cubic-bezier(.42,0,.58,1) slideInToLeft;animation:.5s cubic-bezier(.42,0,.58,1) slideInToLeft}:host .lift .lifter .lift-view .lift-item.slide-in-to-right{left:0;-webkit-animation:.5s cubic-bezier(.42,0,.58,1) slideInToRight;animation:.5s cubic-bezier(.42,0,.58,1) slideInToRight}:host .lift .lifter .lift-view .lift-item.slide-out-to-left{left:-100%;-webkit-animation:.5s cubic-bezier(.42,0,.58,1) slideOutToLeft;animation:.5s cubic-bezier(.42,0,.58,1) slideOutToLeft}:host .lift .lifter .lift-view .lift-item.slide-out-to-right{left:100%;-webkit-animation:.5s cubic-bezier(.42,0,.58,1) slideOutToRight;animation:.5s cubic-bezier(.42,0,.58,1) slideOutToRight}:host .lift .lifter .lift-info{width:300px;background-color:#fff;margin:20px 15px 16px;box-sizing:border-box;padding:10px;border:2px solid #d1e4be}:host .lift .lifter.vertical{flex-direction:column}:host .lift .lifter.vertical .lift-view{height:100%}:host .lift .lifter.vertical .lift-info{width:auto;margin:20px;overflow-y:auto}:host .lift .right-controls{width:30px;height:100vh;color:#fff;background-color:transparent;display:flex;flex-direction:column;padding:20% 0;box-sizing:border-box;position:absolute;top:0;right:0}:host .lift .right-controls .close{position:absolute;right:0;top:5px;width:33px}:host .lift .right-controls .top-wrap{position:absolute;top:40px;right:2px}:host .lift .right-controls .top-wrap .magnify{display:none;width:33px;font-size:1.5rem;margin-bottom:8px}:host .lift .right-controls .top-wrap .fa-compress,:host .lift .right-controls .top-wrap .fa-expand{width:33px;font-size:1.5rem;margin-bottom:8px}:host .lift .right-controls .top-wrap .fa-bars,:host .lift .right-controls .top-wrap .fa-columns{width:33px;font-size:1.5rem;margin-bottom:8px}:host .lift .right-controls .top-wrap .download{font-size:1.5rem;width:33px;color:#fff;margin-bottom:8px}:host .lift .right-controls .next{top:50%;width:22px;position:absolute}:host .lift .right-controls a{font-size:1.8rem;cursor:pointer;text-align:center;width:100%}:host .lift .right-controls a:hover{color:#ccc}:host .lift.piled{position:absolute}:host .lift.piled .lifter.vertical .lift-info{margin:20px}:host .lift.piled .lifter.fullscreen .lift-info,:host .lift.piled .lifter.fullscreen .lift-view{margin:20}:host.mobile .lift .lifter{flex-direction:column}:host.mobile .lift .lifter .lift-view{flex:unset}:host.mobile .lift .lifter .lift-view.magnified .lift-item{overflow:auto}:host.mobile .lift .lifter .lift-view.magnified .lift-item img{width:300%}:host.mobile .lift .lifter .lift-info{width:auto;margin:20px;flex:1;overflow-y:auto}:host.mobile .lift .right-controls .top-wrap .fa-compress,:host.mobile .lift .right-controls .top-wrap .fa-expand{display:none}:host.mobile .lift .right-controls .top-wrap .fa-compress.magnify,:host.mobile .lift .right-controls .top-wrap .fa-expand.magnify{display:inline-block}:host.mobile .lift .right-controls .top-wrap .fa-bars,:host.mobile .lift .right-controls .top-wrap .fa-columns{display:none}:host.mobile .lift.piled{position:fixed!important}:host .fade{-webkit-animation-name:fade;-webkit-animation-duration:1.5s;animation-name:fade;animation-duration:1.5s}@-webkit-keyframes fade{from{opacity:.4}to{opacity:1}}@keyframes fade{from{opacity:.4}to{opacity:1}}:host .grayout{-webkit-animation-name:grayout;-webkit-animation-duration:.2s;animation-name:grayout;animation-duration:.2s}@-webkit-keyframes grayout{from{-webkit-filter:grayscale(.4);filter:grayscale(.4)}to{-webkit-filter:grayscale(1);filter:grayscale(1)}}@keyframes grayout{from{-webkit-filter:grayscale(.4);filter:grayscale(.4)}to{-webkit-filter:grayscale(1);filter:grayscale(1)}}:host .sepia{-webkit-animation-name:sepia;-webkit-animation-duration:.2s;animation-name:sepia;animation-duration:.2s}@-webkit-keyframes sepia{from{-webkit-filter:sepia(.4);filter:sepia(.4)}to{-webkit-filter:sepia(1);filter:sepia(1)}}@keyframes sepia{from{-webkit-filter:sepia(.4);filter:sepia(.4)}to{-webkit-filter:sepia(1);filter:sepia(1)}}:host .zoom{-webkit-animation-name:zoom;-webkit-animation-duration:.3s;animation-name:zoom;animation-duration:.3s}@-webkit-keyframes zoom{from{transform:scale(.9)}to{transform:scale(1)}}@keyframes zoom{from{transform:scale(.9)}to{transform:scale(1)}}:host .shake{-webkit-animation-name:shake;-webkit-animation-duration:.6s;animation-name:shake;animation-duration:.6s}@-webkit-keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(2px,0,0)}30%,50%,70%{transform:translate3d(-4px,0,0)}40%,60%{transform:translate3d(4px,0,0)}}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(2px,0,0)}30%,50%,70%{transform:translate3d(-4px,0,0)}40%,60%{transform:translate3d(4px,0,0)}}@-webkit-keyframes slideInToRight{0%{left:-100%;opacity:0}100%{left:0;opacity:1}}@keyframes slideInToRight{0%{left:-100%;opacity:0}100%{left:0;opacity:1}}@-webkit-keyframes slideOutToLeft{0%{left:0;opacity:1}100%{left:-100%;opacity:0}}@keyframes slideOutToLeft{0%{left:0;opacity:1}100%{left:-100%;opacity:0}}@-webkit-keyframes slideInToLeft{0%{left:100%;opacity:0}100%{left:0;opacity:1}}@keyframes slideInToLeft{0%{left:100%;opacity:0}100%{left:0;opacity:1}}@-webkit-keyframes slideOutToRight{0%{left:0;opacity:1}100%{left:100%;opacity:0}}@keyframes slideOutToRight{0%{left:0;opacity:1}100%{left:100%;opacity:0}}@media only screen and (max-width:600px){:host .lift .lifter{flex-direction:column}:host .lift .lifter .lift-view{flex:unset;height:140px!important}:host .lift .lifter .lift-view.magnified .lift-item{overflow:auto}:host .lift .lifter .lift-view.magnified .lift-item img{width:300%}:host .lift .lifter .lift-info{width:auto;margin:20px;flex:1;overflow-y:auto}:host .lift .right-controls .top-wrap .fa-compress,:host .lift .right-controls .top-wrap .fa-expand{display:none}:host .lift .right-controls .top-wrap .fa-compress.magnify,:host .lift .right-controls .top-wrap .fa-expand.magnify{display:inline-block}:host .lift .right-controls .top-wrap .fa-bars,:host .lift .right-controls .top-wrap .fa-columns{display:none}:host .lift.piled{position:fixed!important}}"]
    })
], GalleryViewComponent);

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
__decorate([
    Output()
], GalleryLiftComponent.prototype, "onselect", void 0);
__decorate([
    Output()
], GalleryLiftComponent.prototype, "onaction", void 0);
__decorate([
    Input()
], GalleryLiftComponent.prototype, "sideBySide", void 0);
__decorate([
    Input()
], GalleryLiftComponent.prototype, "liftOnZero", void 0);
__decorate([
    Input()
], GalleryLiftComponent.prototype, "showRemainingCount", void 0);
__decorate([
    Input()
], GalleryLiftComponent.prototype, "showTitleOnHover", void 0);
__decorate([
    Input()
], GalleryLiftComponent.prototype, "showMessageOnHover", void 0);
__decorate([
    Input()
], GalleryLiftComponent.prototype, "magnifyImageEnabled", void 0);
__decorate([
    Input()
], GalleryLiftComponent.prototype, "gallery", void 0);
__decorate([
    Input()
], GalleryLiftComponent.prototype, "template", void 0);
__decorate([
    Input()
], GalleryLiftComponent.prototype, "borderOnView", void 0);
__decorate([
    Input()
], GalleryLiftComponent.prototype, "maxHeight", void 0);
__decorate([
    Input()
], GalleryLiftComponent.prototype, "dimOnHover", void 0);
__decorate([
    Input()
], GalleryLiftComponent.prototype, "slideEnabled", void 0);
__decorate([
    Input()
], GalleryLiftComponent.prototype, "animationType", void 0);
__decorate([
    Input()
], GalleryLiftComponent.prototype, "hoverMessage", void 0);
__decorate([
    Input()
], GalleryLiftComponent.prototype, "layout", void 0);
__decorate([
    Input()
], GalleryLiftComponent.prototype, "appRootName", void 0);
GalleryLiftComponent = __decorate([
    Component({
        selector: 'gallery-lift',
        template: "\r\n<div class=\"viewport {{displayType}}\">\r\n    <div *ngFor=\"let row of layList; let i = index\"\r\n        (keyup)=\"keyup($event)\"\r\n        (click)=\"liftUpImagery(i)\"\r\n        class=\"view\"\r\n        attr.tabindex=\"0\"\r\n        [class.dim-on-hover]=\"dimOnHover\"\r\n        [style.border]='borderOnView'\r\n        [style.min-height]='maxHeightOf(i)'\r\n        [style.max-height]='maxHeightOf(i)'>\r\n        <span class=\"off-screen\" *ngIf=\"template && gallery[i].data\">\r\n            <ng-container \r\n                [ngTemplateOutlet]=\"template\" \r\n                [ngTemplateOutletContext]=\"{data: gallery[i].data, selected: i+1, total: gallery.length}\"></ng-container>\r\n        </span>\r\n        <div \r\n            *ngIf=\"((showTitleOnHover && i !== (layList.length - 1)) || (!showRemainingCount && i === (layList.length - 1))) && gallery[i].data && gallery[i].data.title\" \r\n            class=\"title\">{{gallery[i].data.title}}</div>\r\n        <img *ngIf=\"gallery[i].type === undefined || gallery[i].type === 'image'\" aria-hidden=\"true\" width=\"100%\"  [src]=\"gallery[i].src\" />\r\n        <video width=\"100%\" \r\n            *ngIf=\"gallery[i].type === 'video'\"\r\n            [attr.poster]=\"gallery[i].poster ? gallery[i].poster : null\"\r\n            [attr.src]=\"gallery[i].src\" disabled></video>\r\n        <div *ngIf=\"showRemainingCount  && i === (layList.length - 1)\" \r\n            class=\"counter\"\r\n            [style.min-height]='maxHeightOf(i)'\r\n            [style.max-height]='maxHeightOf(i)'\r\n            [style.padding-top]=\"evalTop()\">\r\n            + {{gallery.length - i - 1}}\r\n            <span class=\"off-screen\">more entries</span>\r\n        </div>\r\n        <div \r\n            *ngIf=\"(showMessageOnHover && i !== (layList.length - 1)) || (!showRemainingCount && i === (layList.length - 1))\" \r\n            class=\"more\"> \r\n            {{hoverMessage}}\r\n            <span aria-hidden=\"true\" class=\"enlarge fa fa-clone\" *ngIf=\"layout === 'large-on-single'\"></span>\r\n        </div>\r\n    </div>\r\n</div>\r\n",
        styles: [":host{box-sizing:border-box;display:flex;padding:0;margin:5px}:host .off-screen{display:block;width:1px;height:1px;position:absolute;left:-99999px;top:-99999px}:host .viewport{display:-ms-inline-grid;display:inline-grid;grid-gap:0;width:100%;background-color:#000;padding:0}:host .viewport .view{text-align:center;padding:0;position:relative;box-sizing:border-box;display:flex;overflow:hidden;cursor:pointer}:host .viewport .view img,:host .viewport .view video{-o-object-fit:cover;object-fit:cover}:host .viewport .view:focus.dim-on-hover,:host .viewport .view:hover.dim-on-hover{-webkit-filter:brightness(80%);-moz-filter:brightness(80%);-o-filter:brightness(80%);-ms-filter:brightness(80%);filter:brightness(80%)}:host .viewport .view:focus .more,:host .viewport .view:focus .title,:host .viewport .view:hover .more,:host .viewport .view:hover .title{opacity:1}:host .viewport .view .counter{width:100%;height:100%;background-color:rgba(0,0,0,.4);color:#fff;font-size:2.2rem;position:absolute;top:0;overflow:hidden;box-sizing:border-box}:host .viewport .view .title{opacity:0;width:100%;background-color:rgba(0,0,0,.7);transition:.3s ease-out;color:#fff;position:absolute;left:0;top:0;padding:5px;overflow:hidden;z-index:2}:host .viewport .view .more{opacity:0;width:100%;background-color:rgba(0,0,0,.7);transition:.3s ease-out;color:#fff;position:absolute;left:0;bottom:0;padding:5px;z-index:2}:host .viewport .view .more .enlarge{position:absolute;right:20px}:host .viewport .view:nth-child(1){-ms-grid-row:1;-ms-grid-column:1;grid-area:tl}:host .viewport .view:nth-child(2){-ms-grid-row:1;-ms-grid-column:3;grid-area:bl}:host .viewport .view:nth-child(3){-ms-grid-row:1;-ms-grid-row-span:3;-ms-grid-column:3;-ms-grid-column-span:3;grid-area:center}:host .viewport .view:nth-child(4){-ms-grid-row:3;-ms-grid-column:3;grid-area:tr}:host .viewport .view:nth-child(5){-ms-grid-row:3;-ms-grid-column:7;grid-area:br}:host .viewport.c1{grid-template-areas:\"tl\"}:host .viewport.c1 .more,:host .viewport.c1 .title{font-size:1rem}:host .viewport.c2{-ms-grid-columns:50% 0 50%;grid-template-columns:50% 50%;grid-template-areas:\"tl bl\"}:host .viewport.c2 .more,:host .viewport.c2 .title{font-size:1rem}:host .viewport.c3{-ms-grid-columns:32% 0 auto;grid-template-columns:32% auto;-ms-grid-rows:auto 0 auto;grid-template-areas:\"tl center center\" \"bl center center\"}:host .viewport.c3 .more,:host .viewport.c3 .title{font-size:1rem}:host .viewport.c4{-ms-grid-columns:50% 0 50%;grid-template-columns:50% 50%;-ms-grid-rows:auto 0 auto;grid-template-areas:\"tl center\" \"bl tr\"}:host .viewport.c4 .more,:host .viewport.c4 .title{font-size:1rem}:host .viewport.c5{-ms-grid-columns:25% 0 auto 0 25%;grid-template-columns:25% auto 25%;-ms-grid-rows:auto 0 auto;grid-template-areas:\"tl center center tr\" \"bl center center br\"}:host .viewport.c5 .more,:host .viewport.c5 .title{font-size:.9rem}:host .viewport.rc3{-ms-grid-columns:auto 0 30%;grid-template-columns:auto 30%;-ms-grid-rows:auto 0 auto;grid-template-areas:\"tl tl bl\" \"tl tl center\"}:host .viewport.rc3 .more,:host .viewport.rc3 .title{font-size:.9rem}:host .viewport.rc4{-ms-grid-columns:30% 0 auto 0 30%;grid-template-columns:30% auto 30%;-ms-grid-rows:auto 0 auto;grid-template-areas:\"tl bl tr\" \"tl center tr\"}:host .viewport.rc4 .more,:host .viewport.rc4 .title{font-size:.9rem}:host .viewport.rc5{-ms-grid-columns:50% 0 50%;grid-template-columns:50% 50%;-ms-grid-rows:auto 0 auto;grid-template-areas:\"tl tl\" \"bl center\"}:host .viewport.rc5 .more,:host .viewport.rc5 .title{font-size:.9rem}:host .viewport.rc6{-ms-grid-columns:33% 0 auto 0 33%;grid-template-columns:33% auto 33%;-ms-grid-rows:auto 0 auto;grid-template-areas:\"tl tl tl\" \"bl center tr\"}:host .viewport.rc6 .more,:host .viewport.rc6 .title{font-size:.9rem}:host .viewport.rc7{-ms-grid-columns:25% 0 25% 0 25% 0 25%;grid-template-columns:25% 25% 25% 25%;-ms-grid-rows:auto 0 auto;grid-template-areas:\"tl tl tl tl\" \"bl center tr br\"}:host .viewport.rc7 .more,:host .viewport.rc7 .title{font-size:.9rem}:host .viewport.mc1{-ms-grid-columns:50% 0 50%;grid-template-columns:50% 50%;-ms-grid-rows:auto 0 auto 0 auto;grid-template-areas:\"tl tl\" \"bl center\" \"tr tr\"}:host .viewport.mc1 .more,:host .viewport.mc1 .title{font-size:.9rem}:host .viewport.mc2{-ms-grid-columns:50% 0 50%;grid-template-columns:50% 50%;-ms-grid-rows:auto 0 auto 0 auto;grid-template-areas:\"tl bl\" \"center center\" \"tr br\"}:host .viewport.mc2 .more,:host .viewport.mc2 .title{font-size:.9rem}"]
    })
], GalleryLiftComponent);

let GalleryLiftModule = class GalleryLiftModule {
};
GalleryLiftModule = __decorate([
    NgModule({
        imports: [
            CommonModule
        ],
        declarations: [
            GalleryLiftComponent,
            GalleryViewComponent
        ],
        exports: [
            GalleryLiftComponent,
            GalleryViewComponent
        ],
        entryComponents: [
            GalleryViewComponent
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], GalleryLiftModule);

/**
 * Generated bundle index. Do not edit.
 */

export { GalleryLiftComponent, GalleryLiftModule, GalleryViewComponent as ɵa };
//# sourceMappingURL=sedeh-gallery-lift.js.map
