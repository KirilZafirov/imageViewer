import { Component, Input, OnInit } from '@angular/core';
import { ColorTable } from 'src/app/models/response.model';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() pixels: ColorTable[];
  @Input() pixelSize: number;
  constructor() { }

  ngOnInit() {
  }

}
