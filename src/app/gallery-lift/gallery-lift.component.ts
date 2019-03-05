
import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { storeCleanupWithContext } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'gallery-lift',
  templateUrl: './gallery-lift.component.html',
  styleUrls: ['./gallery-lift.component.scss'],
})
export class GalleryLiftComponent implements OnChanges {
  layList = [1];
  displayType = 'c1';
  selectedIndex = 0;
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
  @Input() maxHeight = 400;
  @Input() hoverMessage = 'See more...';
  @Input() layout = 'large-on-single';
  
  constructor() {
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
    if (changes.layout) {
      switch(this.layout) {
        case 'large-on-single': this.displayType = 'c1';this.layList = [1]; break;
        case 'split-on-dual': this.displayType = 'c2';this.layList = [1,2]; break;
        case 'large-on-right': this.displayType = 'c3';this.layList = [1,2,3]; break;
        case 'split-on-quadruple': this.displayType = 'c4';this.layList = [1,2,3,4]; break;
        case 'large-on-middle': this.displayType = 'c5';this.layList = [1,2,3,4,5]; break;
        case 'large-on-left': this.displayType = 'rc3';this.layList = [1,2,3]; break;
        case 'large-on-sides': this.displayType = 'rc4';this.layList = [1,2,3,4]; break;
      }
    }
  }
  maxHeightOf(index: number) {
    let max = this.maxHeight;
    switch(this.layout) {
      case 'large-on-single': break;
      case 'split-on-dual': break;
      case 'large-on-right': 
        max = index < 2 ? (this.maxHeight / 2): max;
        break;
      case 'split-on-quadruple': max = this.maxHeight / 2; break;
      case 'large-on-middle':
        max = index === 2 ? max : (this.maxHeight / 2);
        break;
      case 'large-on-left': 
        max = index === 0 ? max : (this.maxHeight / 2);
        break;
      case 'large-on-sides': 
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
}
