
import {
  Component,
  OnChanges,
  Input,
  Output,
  ElementRef,
  ChangeDetectorRef,
  EventEmitter,
  MissingTranslationStrategy
} from '@angular/core';

@Component({
  selector: 'gallery-lift',
  templateUrl: './gallery-lift.component.html',
  styleUrls: ['./gallery-lift.component.scss'],
})
export class GalleryLiftComponent implements OnChanges {
  layList = [1];
  displayType = 'c1';
  selectedIndex = 0;
  host = undefined;
  magnified = false;
  liftup = false;
  focused = false;
  expanded = false;
  
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
  @Input() hoverMessage = 'See more...';
  @Input() layout = 'large-on-single';
  
  constructor(el: ElementRef, private cdr: ChangeDetectorRef) {
    this.host = el.nativeElement;
    this.host.setAttribute("class", "mobile");
    if (navigator.platform.toUpperCase().indexOf('MAC')<0) {
      document.addEventListener("webkitfullscreenchange", (event: Event) => {
        if(!window.screenTop && !window.screenY) {
          this.fullScreen();
        }
      });
      document.addEventListener("mozfullscreenchange", (event: Event) => {
        const win: any = window;
        const isFullScreen = win.fullScreen ||
                            (win.innerWidth == screen.width && win.innerHeight == screen.height)
        if(!isFullScreen) {
          this.fullScreen();
        }
      });
      document.addEventListener("MSFullscreenChange", (event: Event) => {
        const win: any = window;
        const isFullScreen = win.fullScreen ||
                            (win.innerWidth == screen.width && win.innerHeight == screen.height)
        if(!isFullScreen) {
          this.fullScreen();
        }
      });
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
  liftUpImagery(index: number) {
    this.selectedIndex = this.liftOnZero ? 0 : index;
    this.liftup = true;
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
    this.focused = false
    this.onselect.emit({
      index: this.selectedIndex,
      action: 'lift down'
    });
  }
  magnify(liftView: any) {
    this.magnified = !this.magnified;
    if (this.magnified) {
      liftView.style.width = liftView.clientWidth + "px";
      liftView.style.height = liftView.clientHeight + "px";
      liftView.children[0].style.width = "300%";
      liftView.children[0].style.height = "300%";
    } else {
      liftView.children[0].style.width = "100%";
      liftView.children[0].style.height = "100%";
      liftView.children[0].style.top = "0px";
      liftView.children[0].style.left = "0px";
    }
  }
  fullScreen() {
    const doc: any = document;
    this.expanded = !this.expanded;
    if (this.expanded) {
      const element: any = doc.documentElement;
      if(element.requestFullscreen) {
        element.requestFullscreen();
      } else if(element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if(element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if(element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    } else {
      if(doc.exitFullscreen) {
        doc.exitFullscreen();
      } else if(doc.mozCancelFullScreen) {
        doc.mozCancelFullScreen();
      } else if(doc.webkitExitFullscreen) {
        doc.webkitExitFullscreen();
      }
    }
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
  previous() {
    this.selectedIndex = this.selectedIndex - 1;
    this.onaction.emit({
      action: "view previous",
      index: this.selectedIndex,
			time: new Date()
		});
  }
  next() {
    this.selectedIndex = this.selectedIndex + 1;
    this.onaction.emit({
      action: "view next",
      index: this.selectedIndex,
			time: new Date()
		});
  }
  videoEvent(event: any) {
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
  touchHover(event: any) {
		this.onaction.emit({
      action: event.type,
      index: this.selectedIndex,
			time: new Date()
		});
	}
  hoverOver(event: any) {
    this.onaction.emit({
      action: event.type,
      index: this.selectedIndex,
			time: new Date()
		});
	}
	hoverOut(event: any) {
    this.onaction.emit({
      action: event.type,
      index: this.selectedIndex,
      time: new Date()
    });
	}

  showMore(closeButton) {
    if (!this.focused) {
      this.focused = true;
      closeButton.focus();
    }
    return this.selectedIndex < this.gallery.length - 1;
  }
  keyup(event: any) {
		const code = event.which;
		if (code === 13) {
      event.target.click();
    }
  }
  private isMobile() {
    return false;
  }
}
