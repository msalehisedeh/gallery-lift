import { OnChanges, EventEmitter } from '@angular/core';
export declare class GalleryLiftComponent implements OnChanges {
    layList: number[];
    displayType: string;
    selectedIndex: number;
    liftup: boolean;
    focused: boolean;
    onselect: EventEmitter<{}>;
    onaction: EventEmitter<{}>;
    gallery: any[];
    template: any;
    layout: string;
    ngOnChanges(changes: any): void;
    liftUpImagery(index: number): void;
    liftDownImagery(): void;
    fullScreen(): void;
    previous(): void;
    next(): void;
    videoEvent(event: any): void;
    hoverOver(event: any): void;
    showMore(closeButton: any): boolean;
    keyup(event: any): void;
}
