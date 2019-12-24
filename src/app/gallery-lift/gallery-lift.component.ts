
import {
  Component,
  OnChanges,
  OnInit,
  ElementRef,
  Input,
  Injector,
  Output,
  ComponentFactoryResolver,
  ChangeDetectorRef,
  ApplicationRef,
  EmbeddedViewRef,
  EventEmitter
} from '@angular/core';

import { GalleryViewComponent } from './gallery-view.component';

@Component({
  selector: 'gallery-lift',
  templateUrl: './gallery-lift.component.html',
  styleUrls: ['./gallery-lift.component.scss'],
})
export class GalleryLiftComponent implements OnChanges, OnInit {
  galleryView: any;
  layList = [1];
  displayType = 'c1';
  host = undefined;
  root = undefined;
  focused = false;
  
  @Output() onselect= new EventEmitter()
  @Output() onaction= new EventEmitter()

  @Input() sideBySide = true;
  @Input() liftOnZero = false;
  @Input() showRemainingCount = false;
  @Input() showTitleOnHover = false;
  @Input() showMessageOnHover = true;
  @Input() magnifyImageEnabled = false;
  @Input() gallery: any[];
  @Input() template: any;
  @Input() borderOnView = null;
  @Input() maxHeight = 400;
  @Input() dimOnHover = true;
  @Input() slideEnabled = true;
  @Input() animationType = 'none';
  @Input() hoverMessage = 'See more...';
  @Input() layout = 'large-on-single';
  @Input() appRootName = 'app-root';
  
  constructor(
    el: ElementRef,
		private appRef: ApplicationRef,
		private injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver,
    private cdr: ChangeDetectorRef) {
    this.host = el.nativeElement;
  }
  ngOnInit() {
    this.root = this.host;
    while (this.root && this.root.tagName !== 'BODY') {
      this.root = this.root.parentNode;
    }
  }
  ngOnChanges(changes: any) {
    if (changes.gallery && this.layout === 'random') {
      this.pickRandomLayout();
    } else if (changes.layout) {
      switch(this.layout) {
        case 'large-on-single': this.displayType = 'c1';this.layList = [1]; break;
        case 'split-on-dual': this.displayType = 'c2';this.layList = [1,2]; break;
        case 'large-on-right': this.displayType = 'c3';this.layList = [1,2,3]; break;
        case 'split-on-quadruple': this.displayType = 'c4';this.layList = [1,2,3,4]; break;
        case 'large-on-middle': this.displayType = 'c5';this.layList = [1,2,3,4,5]; break;
        case 'large-on-left': this.displayType = 'rc3';this.layList = [1,2,3]; break;
        case 'large-on-sides': this.displayType = 'rc4';this.layList = [1,2,3,4]; break;
        case 'large-on-top': this.displayType = 'rc5';this.layList = [1,2,3]; break;
        case 'large-on-top-triple': this.displayType = 'rc6';this.layList = [1,2,3,4]; break;
        case 'large-on-top-quadruple': this.displayType = 'rc7';this.layList = [1,2,3,4,5]; break;
        case 'layered-on-middle': this.displayType = 'mc1';this.layList = [1,2,3,4]; break;
        case 'layered-on-corners': this.displayType = 'mc2';this.layList = [1,2,3,4,5]; break;
        case 'random': 
          if (this.gallery) {
            this.pickRandomLayout();
          }
          break;
      }
    } else if (changes.maxHeight) {
      if (this.maxHeight < 100) {
        this.maxHeight = 100;
        this.cdr.detectChanges();
      } else if (this.host.clientHeight > 100 && this.host.clientHeight < this.maxHeight) {
        this.maxHeight = this.host.clientHeight;
        this.cdr.detectChanges();
      }
    }
  }
  private range(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  private pickRandomLayout() {
    if (this.gallery.length === 1) {
      this.displayType = 'c1';this.layList = [1];
    } else if (this.gallery.length === 2) {
      switch(this.range(1,2)) {
        case 1: this.displayType = 'c1';this.layList = [1];break;
        case 2: this.displayType = 'c2';this.layList = [1, 2];break;
      }
    } else if (this.gallery.length === 3) {
      switch(this.range(1,5)) {
        case 1: this.displayType = 'c1';this.layList = [1];break;
        case 2: this.displayType = 'c2';this.layList = [1, 2];break;
        case 3: this.displayType = 'c3';this.layList = [1, 2, 3];break;
        case 4: this.displayType = 'rc3';this.layList = [1, 2, 3];break;
        case 5: this.displayType = 'rc5';this.layList = [1, 2, 3];break;
      }
    } else if (this.gallery.length === 4) {
      switch(this.range(1,9)) {
        case 1: this.displayType = 'c1';this.layList = [1];break;
        case 2: this.displayType = 'c2';this.layList = [1, 2];break;
        case 3: this.displayType = 'c3';this.layList = [1, 2, 3];break;
        case 4: this.displayType = 'rc3';this.layList = [1, 2, 3];break;
        case 5: this.displayType = 'rc5';this.layList = [1, 2, 3];break;
        case 6: this.displayType = 'c4';this.layList = [1, 2, 3, 4];break;
        case 7: this.displayType = 'rc4';this.layList = [1, 2, 3, 4];break;
        case 8: this.displayType = 'rc6';this.layList = [1, 2, 3, 4];break;
        case 9: this.displayType = 'mc1';this.layList = [1, 2, 3, 4];break;
      }
    } else if (this.gallery.length >= 5) {
      switch(this.range(1,12)) {
        case 1: this.displayType = 'c1';this.layList = [1];break;
        case 2: this.displayType = 'c2';this.layList = [1, 2];break;
        case 3: this.displayType = 'c3';this.layList = [1, 2, 3];break;
        case 4: this.displayType = 'rc3';this.layList = [1, 2, 3];break;
        case 5: this.displayType = 'rc5';this.layList = [1, 2, 3];break;
        case 6: this.displayType = 'c4';this.layList = [1, 2, 3, 4];break;
        case 7: this.displayType = 'rc4';this.layList = [1, 2, 3, 4];break;
        case 8: this.displayType = 'rc6';this.layList = [1, 2, 3, 4];break;
        case 9: this.displayType = 'mc1';this.layList = [1, 2, 3, 4];break;
        case 10: this.displayType = 'c5';this.layList = [1, 2, 3, 4, 5];break;
        case 11: this.displayType = 'rc7';this.layList = [1, 2, 3, 4, 5];break;
        case 12: this.displayType = 'mc2';this.layList = [1, 2, 3, 4, 5];break;
      }
    }
  }
  minHeightOf(index: number) {
    let min = null;
    switch(this.displayType) {
      case 'c1':  min = this.maxHeight; break; // large-on-single
    }
    return min  ? min + 'px' : null;
  }
  maxHeightOf(index: number) {
    let max = this.maxHeight;
    switch(this.displayType) {
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
        max = index < 2 ? (this.maxHeight / 2): max;
        break;
      case 'c4': // split-on-quadruple
        max = this.maxHeight / 2; break; 
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
  checkFocused(button: HTMLElement) {
    if (this.focused) {
      button.focus();
      this.focused = false;
    }
    return false;
  }
  liftUpImagery(index: number) {
    if (!this.galleryView) {
      this.galleryView = this.componentFactoryResolver
        .resolveComponentFactory(GalleryViewComponent)
        .create(this.injector);
      this.appRef.attachView(this.galleryView.hostView);
      this.root.appendChild((this.galleryView.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement);
    }
    const instance = (<GalleryViewComponent>this.galleryView.instance);
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
    switch(this.displayType) {
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
      case 'rc6':  // large-on-top-triple
      case 'rc7':  // large-on-top-quadruple
        max = (max / 4) - 15;
      break;
    }
    return max + 'px';
  }
  keyup(event: any) {
		const code = event.which;
		if (code === 13) {
      event.target.click();
    }
  }
}
