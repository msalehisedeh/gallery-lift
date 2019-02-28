import { OnChanges, EventEmitter } from '@angular/core';
export declare class GalleryLiftComponent implements OnChanges {
    layList: number[];
    displayType: string;
    selectedIndex: number;
    liftup: boolean;
    focused: boolean;
    onselect: EventEmitter<{}>;
    gallery: any[];
    preview: number;
    template: any;
    layout: string;
    ngOnChanges(changes: any): void;
    liftUpImagery(index: number): void;
    liftDownImagery(): void;
    fullScreen(): void;
    showMore(closeButton: any): boolean;
    keyup(event: any): void;
}
