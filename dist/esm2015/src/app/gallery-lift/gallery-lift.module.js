import * as tslib_1 from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryViewComponent } from './gallery-view.component';
import { GalleryLiftComponent } from './gallery-lift.component';
let GalleryLiftModule = class GalleryLiftModule {
};
GalleryLiftModule = tslib_1.__decorate([
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
export { GalleryLiftModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1saWZ0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZWRlaC9nYWxsZXJ5LWxpZnQvIiwic291cmNlcyI6WyJzcmMvYXBwL2dhbGxlcnktbGlmdC9nYWxsZXJ5LWxpZnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQW9CaEUsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7Q0FBRyxDQUFBO0FBQXBCLGlCQUFpQjtJQWxCN0IsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWTtTQUNiO1FBQ0QsWUFBWSxFQUFFO1lBQ1osb0JBQW9CO1lBQ3BCLG9CQUFvQjtTQUNyQjtRQUNELE9BQU8sRUFBRTtZQUNQLG9CQUFvQjtZQUNwQixvQkFBb0I7U0FDckI7UUFDRCxlQUFlLEVBQUU7WUFDZixvQkFBb0I7U0FDckI7UUFDRCxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztLQUNsQyxDQUFDO0dBRVcsaUJBQWlCLENBQUc7U0FBcEIsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IEdhbGxlcnlWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9nYWxsZXJ5LXZpZXcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR2FsbGVyeUxpZnRDb21wb25lbnQgfSBmcm9tICcuL2dhbGxlcnktbGlmdC5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgR2FsbGVyeUxpZnRDb21wb25lbnQsXHJcbiAgICBHYWxsZXJ5Vmlld0NvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgR2FsbGVyeUxpZnRDb21wb25lbnQsXHJcbiAgICBHYWxsZXJ5Vmlld0NvbXBvbmVudFxyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgICBHYWxsZXJ5Vmlld0NvbXBvbmVudFxyXG4gIF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgR2FsbGVyeUxpZnRNb2R1bGUge31cclxuIl19