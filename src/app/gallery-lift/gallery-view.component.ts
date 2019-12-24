
import {
  Component,
  Input,
  Output,
  OnInit,
  ElementRef,
  ChangeDetectorRef,
  EventEmitter,
  Renderer2
} from '@angular/core';

@Component({
  selector: 'gallery-view',
  templateUrl: './gallery-view.component.html',
  styleUrls: ['./gallery-view.component.scss'],
})
export class GalleryViewComponent implements OnInit {
  tracks = [];
  loaded = true;
  selectedIndex = 0;
  magnified = false;
  liftup = false;
  focused = false;
  expanded = false;
  smallScreen = false;
  root = undefined;
  
  @Output() onselect= new EventEmitter()
  @Output() onaction= new EventEmitter()

  @Input() sideBySide = true;
  @Input() liftOnZero = false;
  @Input() magnifyImageEnabled = false;
  @Input() gallery = [];
  @Input() template: any;
  @Input() slideEnabled = true;
  @Input() animationType = 'none';
  
  constructor(private host: ElementRef, private renderer: Renderer2, private cdr: ChangeDetectorRef) {
  }
  ngOnInit() {
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
  checkFocused(button: HTMLElement) {
    if (this.focused) {
      button.focus();
      this.focused = false;
    }
    return false;
  }
  liftUpImagery(root: HTMLElement, index: number) {
    this.selectedIndex = this.liftOnZero ? 0 : index;
    this.liftup = true;
    this.focused = true
    this.tracks = [];
    this.root = root;
    for (let item of this.gallery) {
      this.tracks.push({
        leftSide: false,
        rightSide: true,
        action: ''
      });
    }
    if(this.tracks.length) {
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
    this.focused = false
    this.cdr.detectChanges();
    this.renderer.setStyle(this.root, 'display', 'block');
    this.renderer.setStyle(this.host.nativeElement, 'display', 'none');
    this.onselect.emit({
      index: this.selectedIndex,
      action: 'lift down'
    });
  }
  magnify(liftView: any) {
    this.magnified = !this.magnified;
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
    this.loaded = false;
    this.cdr.detectChanges();
    const oldIndex = this.selectedIndex;
    this.selectedIndex = this.selectedIndex > 0 ? this.selectedIndex - 1 : this.gallery.length - 1;
    const rightIndex = this.selectedIndex < (this.gallery.length - 1) ? this.selectedIndex + 1 : 0;
    const leftIndex = oldIndex > 0 ? oldIndex - 1 : this.gallery.length - 1;
    this.onaction.emit({action: 'view previous', index: this.selectedIndex, time: new Date()});
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
    this.onaction.emit({action: 'view next', index: this.selectedIndex, time: new Date()});
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

  keyup(event: any) {
		const code = event.which;
		if (code === 13) {
      event.target.click();
    }
  }
}
