
import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter
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
  liftup = false;
  focused = false;
  
  @Output() onselect= new EventEmitter()
  @Output() onaction= new EventEmitter()

  @Input() liftOnZero = false;
  @Input() showRemainingCount = false;
  @Input() gallery: any[];
  @Input() template: any;
  @Input() layout = 'large-on-single';
  
  ngOnChanges(changes: any) {
    if (changes.layout) {
      switch(this.layout){
        case 'large-on-single': this.displayType = 'c1';this.layList = [1];break;
        case 'split-on-dual': this.displayType = 'c2';this.layList = [1,2];break;
        case 'large-on-right': this.displayType = 'c3';this.layList = [1,2,3];break;
        case 'split-on-quadruple': this.displayType = 'c4';this.layList = [1,2,3,4];break;
        case 'large-on-middle': this.displayType = 'c5';this.layList = [1,2,3,4,5];break;
        case 'large-on-left': this.displayType = 'rc3';this.layList = [1,2,3];break;
        case 'large-on-sides': this.displayType = 'rc4';this.layList = [1,2,3,4];break;
      }
    }
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
    this.liftup = false;
    this.focused = false
    this.onselect.emit({
      index: this.selectedIndex,
      action: 'lift down'
    });
  }
  fullScreen() {

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
