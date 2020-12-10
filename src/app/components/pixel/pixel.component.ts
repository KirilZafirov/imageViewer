import { Pixel_Multiplier } from './../../models/pixel-multiplier';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pixel',
  templateUrl: './pixel.component.html',
  styleUrls: ['./pixel.component.css']
})
export class PixelComponent {

  @Input() color: any;
  @Input() pixelSize: number;
  multiplier = Pixel_Multiplier;
}
