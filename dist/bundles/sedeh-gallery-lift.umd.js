(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@sedeh/gallery-lift', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory((global.sedeh = global.sedeh || {}, global.sedeh['gallery-lift'] = {}), global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    var GalleryViewComponent = /** @class */ (function () {
        function GalleryViewComponent(host, renderer, cdr) {
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
            this.onselect = new core.EventEmitter();
            this.onaction = new core.EventEmitter();
            this.sideBySide = true;
            this.liftOnZero = false;
            this.magnifyImageEnabled = false;
            this.gallery = [];
            this.slideEnabled = true;
            this.animationType = 'none';
        }
        GalleryViewComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (navigator.platform.toUpperCase().indexOf('MAC') < 0) {
                document.addEventListener("webkitfullscreenchange", function (event) {
                    if (!window.screenTop && !window.screenY) {
                        _this.fullScreen();
                    }
                });
                document.addEventListener("mozfullscreenchange", function (event) {
                    var win = window;
                    var isFullScreen = win.fullScreen ||
                        (win.innerWidth == screen.width && win.innerHeight == screen.height);
                    if (!isFullScreen) {
                        _this.fullScreen();
                    }
                });
                document.addEventListener("MSFullscreenChange", function (event) {
                    var win = window;
                    var isFullScreen = win.fullScreen ||
                        (win.innerWidth == screen.width && win.innerHeight == screen.height);
                    if (!isFullScreen) {
                        _this.fullScreen();
                    }
                });
            }
        };
        GalleryViewComponent.prototype.checkFocused = function (button) {
            if (this.focused) {
                button.focus();
                this.focused = false;
            }
            return false;
        };
        GalleryViewComponent.prototype.liftUpImagery = function (root, index) {
            var e_1, _a;
            this.selectedIndex = this.liftOnZero ? 0 : index;
            this.liftup = true;
            this.focused = true;
            this.tracks = [];
            this.root = root;
            try {
                for (var _b = __values(this.gallery), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    this.tracks.push({
                        leftSide: false,
                        rightSide: true,
                        action: ''
                    });
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
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
        };
        GalleryViewComponent.prototype.liftDownImagery = function () {
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
        };
        GalleryViewComponent.prototype.magnify = function (liftView) {
            this.magnified = !this.magnified;
        };
        GalleryViewComponent.prototype.fullScreen = function () {
            var doc = document;
            this.expanded = !this.expanded;
            if (this.expanded) {
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
        GalleryViewComponent.prototype.previous = function () {
            this.loaded = false;
            this.cdr.detectChanges();
            var oldIndex = this.selectedIndex;
            this.selectedIndex = this.selectedIndex > 0 ? this.selectedIndex - 1 : this.gallery.length - 1;
            var rightIndex = this.selectedIndex < (this.gallery.length - 1) ? this.selectedIndex + 1 : 0;
            var leftIndex = oldIndex > 0 ? oldIndex - 1 : this.gallery.length - 1;
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
        };
        GalleryViewComponent.prototype.next = function () {
            this.loaded = false;
            this.cdr.detectChanges();
            var oldIndex = this.selectedIndex;
            this.selectedIndex = (this.selectedIndex < this.gallery.length - 1) ? this.selectedIndex + 1 : 0;
            var rightIndex = oldIndex < (this.gallery.length - 1) ? oldIndex + 1 : 0;
            var leftIndex = this.selectedIndex > 0 ? this.selectedIndex - 1 : this.gallery.length - 1;
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
        };
        GalleryViewComponent.prototype.videoEvent = function (event) {
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
        GalleryViewComponent.prototype.touchHover = function (event) {
            this.onaction.emit({
                action: event.type,
                index: this.selectedIndex,
                time: new Date()
            });
        };
        GalleryViewComponent.prototype.hoverOver = function (event) {
            this.onaction.emit({
                action: event.type,
                index: this.selectedIndex,
                time: new Date()
            });
        };
        GalleryViewComponent.prototype.hoverOut = function (event) {
            this.onaction.emit({
                action: event.type,
                index: this.selectedIndex,
                time: new Date()
            });
        };
        GalleryViewComponent.prototype.keyup = function (event) {
            var code = event.which;
            if (code === 13) {
                event.target.click();
            }
        };
        GalleryViewComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: core.ChangeDetectorRef }
        ]; };
        __decorate([
            core.Output()
        ], GalleryViewComponent.prototype, "onselect", void 0);
        __decorate([
            core.Output()
        ], GalleryViewComponent.prototype, "onaction", void 0);
        __decorate([
            core.Input()
        ], GalleryViewComponent.prototype, "sideBySide", void 0);
        __decorate([
            core.Input()
        ], GalleryViewComponent.prototype, "liftOnZero", void 0);
        __decorate([
            core.Input()
        ], GalleryViewComponent.prototype, "magnifyImageEnabled", void 0);
        __decorate([
            core.Input()
        ], GalleryViewComponent.prototype, "gallery", void 0);
        __decorate([
            core.Input()
        ], GalleryViewComponent.prototype, "template", void 0);
        __decorate([
            core.Input()
        ], GalleryViewComponent.prototype, "slideEnabled", void 0);
        __decorate([
            core.Input()
        ], GalleryViewComponent.prototype, "animationType", void 0);
        GalleryViewComponent = __decorate([
            core.Component({
                selector: 'gallery-view',
                template: "\r\n<div class=\"lift\" [class.piled]=\"!sideBySide\">\r\n    <div class=\"left-controls\">\r\n        <a title=\"View previous\"\r\n            class=\"prev fa fa-chevron-left\" \r\n            tabindex=\"0\"\r\n            (keyup)=\"keyup($event)\"\r\n            (click)=\"previous()\"></a>\r\n    </div>\r\n    <div class=\"lifter\" \r\n        [class.vertical]=\"!sideBySide\"\r\n        [class.fullscreen]=\"expanded\">\r\n        <div #liftView\r\n            class=\"lift-view\" \r\n            [class.magnified]=\"magnified\">\r\n            <div class=\"lift-item\" \r\n                *ngFor=\"let item of gallery; let i = index\"\r\n                [style.z-index]=\"selectedIndex == i ? 1 : 0\"\r\n                [attr.aria-live]=\"smallScreen ? null : 'polite'\"\r\n                [attr.aria-atomic]=\"smallScreen ? null : true\"\r\n                [attr.aria-hidden]=\"!smallScreen && selectedIndex !== i\"\r\n                [class.left-side]=\"slideEnabled && tracks[i].leftSide ? true : null\"\r\n                [class.right-side]=\"slideEnabled && tracks[i].rightSide ? true : null\"\r\n                [class.slide-in-to-left]=\"slideEnabled && tracks[i].action === 'slideInToLeft' ? true : null\"\r\n                [class.slide-in-to-right]=\"slideEnabled && tracks[i].action === 'slideInToRight' ? true : null\"\r\n                [class.slide-out-to-left]=\"slideEnabled && tracks[i].action === 'slideOutToLeft' ? true : null\"\r\n                [class.slide-out-to-right]=\"slideEnabled && tracks[i].action === 'slideOutToRight' ? true : null\" \r\n                (touchmove)=\"touchHover($event)\"\r\n                (mouseover)=\"hoverOver($event)\"><img \r\n                *ngIf=\"loaded && (gallery[i].type === undefined || gallery[i].type === 'image')\"  \r\n                aria-hidden=\"true\"\r\n                width=\"100%\" \r\n                [class]=\"animationType\"\r\n                [src]=\"gallery[i].src\" /><video \r\n\r\n                *ngIf=\"loaded && gallery[i].type === 'video'\" \r\n                width=\"100%\" \r\n                [class]=\"animationType\"\r\n                [attr.src]=\"gallery[i].src\" \r\n                [attr.poster]=\"gallery[i].poster ? gallery[i].poster : null\"\r\n                (play)=\"videoEvent($event)\"\r\n                (pause)=\"videoEvent($event)\"\r\n                (ended)=\"videoEvent($event)\"\r\n                (seeked)=\"videoEvent($event)\"\r\n                (error)=\"videoEvent($event)\"\r\n                (fullscreenchange)=\"videoEvent($event)\"\r\n                controls></video>\r\n                <div class=\"lift-info off-screen\" [attr.aria-hidden]=\"selectedIndex !== i\" *ngIf=\"template && gallery[i].data\">\r\n                    <ng-container \r\n                        [ngTemplateOutlet]=\"template\" \r\n                        [ngTemplateOutletContext]=\"{data: gallery[i].data, selected: i+1, total: gallery.length}\"></ng-container>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div \r\n            class=\"lift-info\" \r\n            aria-hidden=\"true\"\r\n             *ngIf=\"template && gallery[selectedIndex].data\">\r\n            <ng-container \r\n                [ngTemplateOutlet]=\"template\" \r\n                [ngTemplateOutletContext]=\"{data: gallery[selectedIndex].data, selected: selectedIndex+1, total: gallery.length}\">\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n    <div class=\"right-controls\">\r\n        <a #closeButton [class.focused]=\"checkFocused(closeButton)\"\r\n            tabindex=\"0\"  \r\n            class=\"close fa fa-close\" \r\n            title=\"Close viewer\"\r\n            (click)=\"liftDownImagery()\" \r\n            (keyup)=\"keyup($event)\"></a>\r\n        <span class=\"top-wrap\">\r\n            <a class=\"fa\" tabindex=\"0\"\r\n                (click)=\"fullScreen()\" \r\n                (keyup)=\"keyup($event)\"\r\n                [attr.title]=\"expanded ? 'Normal screen view' : 'Full screen view'\"\r\n                [class.fa-expand]=\"!expanded\" \r\n                [class.fa-compress]=\"expanded\"></a>\r\n            <a *ngIf=\"magnifyImageEnabled\" class=\"magnify fa\" tabindex=\"0\"\r\n                (click)=\"magnify(liftView)\" \r\n                (keyup)=\"keyup($event)\"\r\n                [attr.title]=\"magnified ? 'Normal Image' : 'Magnify Image'\"\r\n                [class.fa-expand]=\"!magnified\" \r\n                [class.fa-compress]=\"magnified\"></a>\r\n            <a *ngIf=\"template && gallery[selectedIndex].data\"\r\n                class=\"fa\" tabindex=\"0\"\r\n                (click)=\"sideBySide = !sideBySide\" \r\n                (keyup)=\"keyup($event)\"\r\n                [attr.title]=\"sideBySide ? 'Align Vertical' : 'Align Horizontal'\"\r\n                [class.fa-columns]=\"!sideBySide\" \r\n                [class.fa-bars]=\"sideBySide\"></a>\r\n            <a [href]=\"gallery[selectedIndex].src\" \r\n                tabindex=\"0\" title=\"download\" \r\n                class=\"download fa fa-download\" \r\n                (keyup)=\"keyup($event)\"\r\n                download></a>\r\n        </span>\r\n        <a title=\"View next\"\r\n            class=\"next fa fa-chevron-right\" \r\n            tabindex=\"0\" \r\n            (keyup)=\"keyup($event)\"\r\n            (click)=\"next()\"></a>\r\n    </div>\r\n    <span tabindex=\"0\" (focus)=\"closeButton.focus()\"></span>\r\n</div>\r\n",
                styles: [":host{box-sizing:border-box;padding:0;margin:0;position:fixed;display:none;top:0;left:0;right:0;z-index:99;width:100%;height:100%;background-color:rgba(0,0,0,.95)}:host .off-screen{display:block;width:1px;height:1px;position:absolute;left:-99999px;top:-99999px}:host .lift{width:100%;height:100%;min-height:300px;position:absolute;overflow:auto;display:flex;flex-direction:row}:host .lift .left-controls{width:30px;height:100vh;color:#fff;background-color:transparent;padding:20% 0;box-sizing:border-box;position:absolute;top:0;left:0}:host .lift .left-controls .prev{top:50%;width:22px;left:8px}:host .lift .left-controls a{font-size:1.8rem;cursor:pointer;text-align:center;width:100%;position:absolute;display:flex}:host .lift .left-controls a:hover{color:#ccc}:host .lift .lifter{flex:1;display:flex;flex-direction:row;margin:0 30px}:host .lift .lifter .lift-view{flex:1;margin:20px;border:2px solid #d1e4be;position:relative;background-color:#fff;overflow:hidden}:host .lift .lifter .lift-view .lift-item{position:absolute;width:100%;height:100%;background-color:#fff;overflow:hidden}:host .lift .lifter .lift-view .lift-item img{position:relative;vertical-align:middle}:host .lift .lifter .lift-view .lift-item.selected{left:0}:host .lift .lifter .lift-view .lift-item.left-side{left:-100%}:host .lift .lifter .lift-view .lift-item.right-side{left:100%}:host .lift .lifter .lift-view .lift-item.slide-in-to-left{left:0;-webkit-animation:.5s cubic-bezier(.42,0,.58,1) slideInToLeft;animation:.5s cubic-bezier(.42,0,.58,1) slideInToLeft}:host .lift .lifter .lift-view .lift-item.slide-in-to-right{left:0;-webkit-animation:.5s cubic-bezier(.42,0,.58,1) slideInToRight;animation:.5s cubic-bezier(.42,0,.58,1) slideInToRight}:host .lift .lifter .lift-view .lift-item.slide-out-to-left{left:-100%;-webkit-animation:.5s cubic-bezier(.42,0,.58,1) slideOutToLeft;animation:.5s cubic-bezier(.42,0,.58,1) slideOutToLeft}:host .lift .lifter .lift-view .lift-item.slide-out-to-right{left:100%;-webkit-animation:.5s cubic-bezier(.42,0,.58,1) slideOutToRight;animation:.5s cubic-bezier(.42,0,.58,1) slideOutToRight}:host .lift .lifter .lift-info{width:300px;background-color:#fff;margin:20px 15px 16px;box-sizing:border-box;padding:10px;border:2px solid #d1e4be}:host .lift .lifter.vertical{flex-direction:column}:host .lift .lifter.vertical .lift-view{height:100%}:host .lift .lifter.vertical .lift-info{width:auto;margin:20px;overflow-y:auto}:host .lift .right-controls{width:30px;height:100vh;color:#fff;background-color:transparent;display:flex;flex-direction:column;padding:20% 0;box-sizing:border-box;position:absolute;top:0;right:0}:host .lift .right-controls .close{position:absolute;right:0;top:5px;width:33px}:host .lift .right-controls .top-wrap{position:absolute;top:40px;right:2px}:host .lift .right-controls .top-wrap .magnify{display:none;width:33px;font-size:1.5rem;margin-bottom:8px}:host .lift .right-controls .top-wrap .fa-compress,:host .lift .right-controls .top-wrap .fa-expand{width:33px;font-size:1.5rem;margin-bottom:8px}:host .lift .right-controls .top-wrap .fa-bars,:host .lift .right-controls .top-wrap .fa-columns{width:33px;font-size:1.5rem;margin-bottom:8px}:host .lift .right-controls .top-wrap .download{font-size:1.5rem;width:33px;color:#fff;margin-bottom:8px}:host .lift .right-controls .next{top:50%;width:22px;position:absolute}:host .lift .right-controls a{font-size:1.8rem;cursor:pointer;text-align:center;width:100%}:host .lift .right-controls a:hover{color:#ccc}:host .lift.piled{position:absolute}:host .lift.piled .lifter.vertical .lift-info{margin:20px}:host .lift.piled .lifter.fullscreen .lift-info,:host .lift.piled .lifter.fullscreen .lift-view{margin:20}:host.mobile .lift .lifter{flex-direction:column}:host.mobile .lift .lifter .lift-view{flex:unset}:host.mobile .lift .lifter .lift-view.magnified .lift-item{overflow:auto}:host.mobile .lift .lifter .lift-view.magnified .lift-item img{width:300%}:host.mobile .lift .lifter .lift-info{width:auto;margin:20px;flex:1;overflow-y:auto}:host.mobile .lift .right-controls .top-wrap .fa-compress,:host.mobile .lift .right-controls .top-wrap .fa-expand{display:none}:host.mobile .lift .right-controls .top-wrap .fa-compress.magnify,:host.mobile .lift .right-controls .top-wrap .fa-expand.magnify{display:inline-block}:host.mobile .lift .right-controls .top-wrap .fa-bars,:host.mobile .lift .right-controls .top-wrap .fa-columns{display:none}:host.mobile .lift.piled{position:fixed!important}:host .fade{-webkit-animation-name:fade;-webkit-animation-duration:1.5s;animation-name:fade;animation-duration:1.5s}@-webkit-keyframes fade{from{opacity:.4}to{opacity:1}}@keyframes fade{from{opacity:.4}to{opacity:1}}:host .grayout{-webkit-animation-name:grayout;-webkit-animation-duration:.2s;animation-name:grayout;animation-duration:.2s}@-webkit-keyframes grayout{from{-webkit-filter:grayscale(.4);filter:grayscale(.4)}to{-webkit-filter:grayscale(1);filter:grayscale(1)}}@keyframes grayout{from{-webkit-filter:grayscale(.4);filter:grayscale(.4)}to{-webkit-filter:grayscale(1);filter:grayscale(1)}}:host .sepia{-webkit-animation-name:sepia;-webkit-animation-duration:.2s;animation-name:sepia;animation-duration:.2s}@-webkit-keyframes sepia{from{-webkit-filter:sepia(.4);filter:sepia(.4)}to{-webkit-filter:sepia(1);filter:sepia(1)}}@keyframes sepia{from{-webkit-filter:sepia(.4);filter:sepia(.4)}to{-webkit-filter:sepia(1);filter:sepia(1)}}:host .zoom{-webkit-animation-name:zoom;-webkit-animation-duration:.3s;animation-name:zoom;animation-duration:.3s}@-webkit-keyframes zoom{from{transform:scale(.9)}to{transform:scale(1)}}@keyframes zoom{from{transform:scale(.9)}to{transform:scale(1)}}:host .shake{-webkit-animation-name:shake;-webkit-animation-duration:.6s;animation-name:shake;animation-duration:.6s}@-webkit-keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(2px,0,0)}30%,50%,70%{transform:translate3d(-4px,0,0)}40%,60%{transform:translate3d(4px,0,0)}}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(2px,0,0)}30%,50%,70%{transform:translate3d(-4px,0,0)}40%,60%{transform:translate3d(4px,0,0)}}@-webkit-keyframes slideInToRight{0%{left:-100%;opacity:0}100%{left:0;opacity:1}}@keyframes slideInToRight{0%{left:-100%;opacity:0}100%{left:0;opacity:1}}@-webkit-keyframes slideOutToLeft{0%{left:0;opacity:1}100%{left:-100%;opacity:0}}@keyframes slideOutToLeft{0%{left:0;opacity:1}100%{left:-100%;opacity:0}}@-webkit-keyframes slideInToLeft{0%{left:100%;opacity:0}100%{left:0;opacity:1}}@keyframes slideInToLeft{0%{left:100%;opacity:0}100%{left:0;opacity:1}}@-webkit-keyframes slideOutToRight{0%{left:0;opacity:1}100%{left:100%;opacity:0}}@keyframes slideOutToRight{0%{left:0;opacity:1}100%{left:100%;opacity:0}}@media only screen and (max-width:600px){:host .lift .lifter{flex-direction:column}:host .lift .lifter .lift-view{flex:unset;height:140px!important}:host .lift .lifter .lift-view.magnified .lift-item{overflow:auto}:host .lift .lifter .lift-view.magnified .lift-item img{width:300%}:host .lift .lifter .lift-info{width:auto;margin:20px;flex:1;overflow-y:auto}:host .lift .right-controls .top-wrap .fa-compress,:host .lift .right-controls .top-wrap .fa-expand{display:none}:host .lift .right-controls .top-wrap .fa-compress.magnify,:host .lift .right-controls .top-wrap .fa-expand.magnify{display:inline-block}:host .lift .right-controls .top-wrap .fa-bars,:host .lift .right-controls .top-wrap .fa-columns{display:none}:host .lift.piled{position:fixed!important}}"]
            })
        ], GalleryViewComponent);
        return GalleryViewComponent;
    }());

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
            { type: core.ElementRef },
            { type: core.ApplicationRef },
            { type: core.Injector },
            { type: core.ComponentFactoryResolver },
            { type: core.ChangeDetectorRef }
        ]; };
        __decorate([
            core.Output()
        ], GalleryLiftComponent.prototype, "onselect", void 0);
        __decorate([
            core.Output()
        ], GalleryLiftComponent.prototype, "onaction", void 0);
        __decorate([
            core.Input()
        ], GalleryLiftComponent.prototype, "sideBySide", void 0);
        __decorate([
            core.Input()
        ], GalleryLiftComponent.prototype, "liftOnZero", void 0);
        __decorate([
            core.Input()
        ], GalleryLiftComponent.prototype, "showRemainingCount", void 0);
        __decorate([
            core.Input()
        ], GalleryLiftComponent.prototype, "showTitleOnHover", void 0);
        __decorate([
            core.Input()
        ], GalleryLiftComponent.prototype, "showMessageOnHover", void 0);
        __decorate([
            core.Input()
        ], GalleryLiftComponent.prototype, "magnifyImageEnabled", void 0);
        __decorate([
            core.Input()
        ], GalleryLiftComponent.prototype, "gallery", void 0);
        __decorate([
            core.Input()
        ], GalleryLiftComponent.prototype, "template", void 0);
        __decorate([
            core.Input()
        ], GalleryLiftComponent.prototype, "borderOnView", void 0);
        __decorate([
            core.Input()
        ], GalleryLiftComponent.prototype, "maxHeight", void 0);
        __decorate([
            core.Input()
        ], GalleryLiftComponent.prototype, "dimOnHover", void 0);
        __decorate([
            core.Input()
        ], GalleryLiftComponent.prototype, "slideEnabled", void 0);
        __decorate([
            core.Input()
        ], GalleryLiftComponent.prototype, "animationType", void 0);
        __decorate([
            core.Input()
        ], GalleryLiftComponent.prototype, "hoverMessage", void 0);
        __decorate([
            core.Input()
        ], GalleryLiftComponent.prototype, "layout", void 0);
        __decorate([
            core.Input()
        ], GalleryLiftComponent.prototype, "appRootName", void 0);
        GalleryLiftComponent = __decorate([
            core.Component({
                selector: 'gallery-lift',
                template: "\r\n<div class=\"viewport {{displayType}}\">\r\n    <div *ngFor=\"let row of layList; let i = index\"\r\n        (keyup)=\"keyup($event)\"\r\n        (click)=\"liftUpImagery(i)\"\r\n        class=\"view\"\r\n        attr.tabindex=\"0\"\r\n        [class.dim-on-hover]=\"dimOnHover\"\r\n        [style.border]='borderOnView'\r\n        [style.min-height]='maxHeightOf(i)'\r\n        [style.max-height]='maxHeightOf(i)'>\r\n        <span class=\"off-screen\" *ngIf=\"template && gallery[i].data\">\r\n            <ng-container \r\n                [ngTemplateOutlet]=\"template\" \r\n                [ngTemplateOutletContext]=\"{data: gallery[i].data, selected: i+1, total: gallery.length}\"></ng-container>\r\n        </span>\r\n        <div \r\n            *ngIf=\"((showTitleOnHover && i !== (layList.length - 1)) || (!showRemainingCount && i === (layList.length - 1))) && gallery[i].data && gallery[i].data.title\" \r\n            class=\"title\">{{gallery[i].data.title}}</div>\r\n        <img *ngIf=\"gallery[i].type === undefined || gallery[i].type === 'image'\" aria-hidden=\"true\" width=\"100%\"  [src]=\"gallery[i].src\" />\r\n        <video width=\"100%\" \r\n            *ngIf=\"gallery[i].type === 'video'\"\r\n            [attr.poster]=\"gallery[i].poster ? gallery[i].poster : null\"\r\n            [attr.src]=\"gallery[i].src\" disabled></video>\r\n        <div *ngIf=\"showRemainingCount  && i === (layList.length - 1)\" \r\n            class=\"counter\"\r\n            [style.min-height]='maxHeightOf(i)'\r\n            [style.max-height]='maxHeightOf(i)'\r\n            [style.padding-top]=\"evalTop()\">\r\n            + {{gallery.length - i - 1}}\r\n            <span class=\"off-screen\">more entries</span>\r\n        </div>\r\n        <div \r\n            *ngIf=\"(showMessageOnHover && i !== (layList.length - 1)) || (!showRemainingCount && i === (layList.length - 1))\" \r\n            class=\"more\"> \r\n            {{hoverMessage}}\r\n            <span aria-hidden=\"true\" class=\"enlarge fa fa-clone\" *ngIf=\"layout === 'large-on-single'\"></span>\r\n        </div>\r\n    </div>\r\n</div>\r\n",
                styles: [":host{box-sizing:border-box;display:flex;padding:0;margin:5px}:host .off-screen{display:block;width:1px;height:1px;position:absolute;left:-99999px;top:-99999px}:host .viewport{display:-ms-inline-grid;display:inline-grid;grid-gap:0;width:100%;background-color:#000;padding:0}:host .viewport .view{text-align:center;padding:0;position:relative;box-sizing:border-box;display:flex;overflow:hidden;cursor:pointer}:host .viewport .view img,:host .viewport .view video{-o-object-fit:cover;object-fit:cover}:host .viewport .view:focus.dim-on-hover,:host .viewport .view:hover.dim-on-hover{-webkit-filter:brightness(80%);-moz-filter:brightness(80%);-o-filter:brightness(80%);-ms-filter:brightness(80%);filter:brightness(80%)}:host .viewport .view:focus .more,:host .viewport .view:focus .title,:host .viewport .view:hover .more,:host .viewport .view:hover .title{opacity:1}:host .viewport .view .counter{width:100%;height:100%;background-color:rgba(0,0,0,.4);color:#fff;font-size:2.2rem;position:absolute;top:0;overflow:hidden;box-sizing:border-box}:host .viewport .view .title{opacity:0;width:100%;background-color:rgba(0,0,0,.7);transition:.3s ease-out;color:#fff;position:absolute;left:0;top:0;padding:5px;overflow:hidden;z-index:2}:host .viewport .view .more{opacity:0;width:100%;background-color:rgba(0,0,0,.7);transition:.3s ease-out;color:#fff;position:absolute;left:0;bottom:0;padding:5px;z-index:2}:host .viewport .view .more .enlarge{position:absolute;right:20px}:host .viewport .view:nth-child(1){-ms-grid-row:1;-ms-grid-column:1;grid-area:tl}:host .viewport .view:nth-child(2){-ms-grid-row:1;-ms-grid-column:3;grid-area:bl}:host .viewport .view:nth-child(3){-ms-grid-row:1;-ms-grid-row-span:3;-ms-grid-column:3;-ms-grid-column-span:3;grid-area:center}:host .viewport .view:nth-child(4){-ms-grid-row:3;-ms-grid-column:3;grid-area:tr}:host .viewport .view:nth-child(5){-ms-grid-row:3;-ms-grid-column:7;grid-area:br}:host .viewport.c1{grid-template-areas:\"tl\"}:host .viewport.c1 .more,:host .viewport.c1 .title{font-size:1rem}:host .viewport.c2{-ms-grid-columns:50% 0 50%;grid-template-columns:50% 50%;grid-template-areas:\"tl bl\"}:host .viewport.c2 .more,:host .viewport.c2 .title{font-size:1rem}:host .viewport.c3{-ms-grid-columns:32% 0 auto;grid-template-columns:32% auto;-ms-grid-rows:auto 0 auto;grid-template-areas:\"tl center center\" \"bl center center\"}:host .viewport.c3 .more,:host .viewport.c3 .title{font-size:1rem}:host .viewport.c4{-ms-grid-columns:50% 0 50%;grid-template-columns:50% 50%;-ms-grid-rows:auto 0 auto;grid-template-areas:\"tl center\" \"bl tr\"}:host .viewport.c4 .more,:host .viewport.c4 .title{font-size:1rem}:host .viewport.c5{-ms-grid-columns:25% 0 auto 0 25%;grid-template-columns:25% auto 25%;-ms-grid-rows:auto 0 auto;grid-template-areas:\"tl center center tr\" \"bl center center br\"}:host .viewport.c5 .more,:host .viewport.c5 .title{font-size:.9rem}:host .viewport.rc3{-ms-grid-columns:auto 0 30%;grid-template-columns:auto 30%;-ms-grid-rows:auto 0 auto;grid-template-areas:\"tl tl bl\" \"tl tl center\"}:host .viewport.rc3 .more,:host .viewport.rc3 .title{font-size:.9rem}:host .viewport.rc4{-ms-grid-columns:30% 0 auto 0 30%;grid-template-columns:30% auto 30%;-ms-grid-rows:auto 0 auto;grid-template-areas:\"tl bl tr\" \"tl center tr\"}:host .viewport.rc4 .more,:host .viewport.rc4 .title{font-size:.9rem}:host .viewport.rc5{-ms-grid-columns:50% 0 50%;grid-template-columns:50% 50%;-ms-grid-rows:auto 0 auto;grid-template-areas:\"tl tl\" \"bl center\"}:host .viewport.rc5 .more,:host .viewport.rc5 .title{font-size:.9rem}:host .viewport.rc6{-ms-grid-columns:33% 0 auto 0 33%;grid-template-columns:33% auto 33%;-ms-grid-rows:auto 0 auto;grid-template-areas:\"tl tl tl\" \"bl center tr\"}:host .viewport.rc6 .more,:host .viewport.rc6 .title{font-size:.9rem}:host .viewport.rc7{-ms-grid-columns:25% 0 25% 0 25% 0 25%;grid-template-columns:25% 25% 25% 25%;-ms-grid-rows:auto 0 auto;grid-template-areas:\"tl tl tl tl\" \"bl center tr br\"}:host .viewport.rc7 .more,:host .viewport.rc7 .title{font-size:.9rem}:host .viewport.mc1{-ms-grid-columns:50% 0 50%;grid-template-columns:50% 50%;-ms-grid-rows:auto 0 auto 0 auto;grid-template-areas:\"tl tl\" \"bl center\" \"tr tr\"}:host .viewport.mc1 .more,:host .viewport.mc1 .title{font-size:.9rem}:host .viewport.mc2{-ms-grid-columns:50% 0 50%;grid-template-columns:50% 50%;-ms-grid-rows:auto 0 auto 0 auto;grid-template-areas:\"tl bl\" \"center center\" \"tr br\"}:host .viewport.mc2 .more,:host .viewport.mc2 .title{font-size:.9rem}"]
            })
        ], GalleryLiftComponent);
        return GalleryLiftComponent;
    }());

    var GalleryLiftModule = /** @class */ (function () {
        function GalleryLiftModule() {
        }
        GalleryLiftModule = __decorate([
            core.NgModule({
                imports: [
                    common.CommonModule
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
                schemas: [core.CUSTOM_ELEMENTS_SCHEMA]
            })
        ], GalleryLiftModule);
        return GalleryLiftModule;
    }());

    exports.GalleryLiftComponent = GalleryLiftComponent;
    exports.GalleryLiftModule = GalleryLiftModule;
    exports.ɵa = GalleryViewComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sedeh-gallery-lift.umd.js.map
