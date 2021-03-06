import { OnChanges, OnInit, ElementRef, Injector, ComponentFactoryResolver, ChangeDetectorRef, ApplicationRef, EventEmitter } from '@angular/core';
export declare class GalleryLiftComponent implements OnChanges, OnInit {
    private appRef;
    private injector;
    private componentFactoryResolver;
    private cdr;
    galleryView: any;
    layList: number[];
    displayType: string;
    host: any;
    root: any;
    focused: boolean;
    onselect: EventEmitter<any>;
    onaction: EventEmitter<any>;
    sideBySide: boolean;
    liftOnZero: boolean;
    showRemainingCount: boolean;
    showTitleOnHover: boolean;
    showMessageOnHover: boolean;
    magnifyImageEnabled: boolean;
    gallery: any[];
    template: any;
    borderOnView: any;
    maxHeight: number;
    dimOnHover: boolean;
    slideEnabled: boolean;
    animationType: string;
    hoverMessage: string;
    layout: string;
    appRootName: string;
    constructor(el: ElementRef, appRef: ApplicationRef, injector: Injector, componentFactoryResolver: ComponentFactoryResolver, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: any): void;
    private range;
    private pickRandomLayout;
    minHeightOf(index: number): string;
    maxHeightOf(index: number): string;
    checkFocused(button: HTMLElement): boolean;
    liftUpImagery(index: number): void;
    evalTop(): string;
    keyup(event: any): void;
}
