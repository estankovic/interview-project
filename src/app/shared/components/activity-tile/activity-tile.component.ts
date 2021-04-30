import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-activity-tile',
  templateUrl: './activity-tile.component.html',

  styleUrls: ['./activity-tile.component.scss'],

})
export class ActivityTileComponent implements OnInit {

  @Input() icon: string;

  @Input() name: string;

  @Input() progress: number;

  @Input() target: number;

  constructor() { }

  ngOnInit() {}

  calculateMeterToKMIfNecessary(value) {
    if (value < 1000) {
      return value.toFixed(1) + ' m';
    } else {
      return (value / 1000).toFixed(1) + 'km';
    }
  }
}
