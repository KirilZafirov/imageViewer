import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSliderChange } from '@angular/material/slider';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-sizing',
  templateUrl: './sizing.component.html',
  styleUrls: ['./sizing.component.css']
})
export class SizingComponent {
   control = new FormControl();
   @Input() label: string = 'Pixel Size';
   @Input() min: number = 1;
   @Input() max: number = 10;
   @Output() sizeValue: EventEmitter<number> = new EventEmitter();

   destroy$ = new Subject();
   /**
    *
    */
   constructor() {

   }


  triggerChange(event:MatSliderChange) {
    this.sizeValue.emit(event.value);
  }

}
