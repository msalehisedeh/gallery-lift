
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

  @Input() gallery: any[];
  @Input() preview = 3;
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
    this.selectedIndex = index;
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
