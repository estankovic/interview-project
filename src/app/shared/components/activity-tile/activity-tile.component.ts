/* eslint-disable @typescript-eslint/member-ordering,no-underscore-dangle */

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-activity-tile',
  templateUrl: './activity-tile.component.html',

  styleUrls: ['./activity-tile.component.scss'],

})
export class ActivityTileComponent implements OnInit {

  _target: number;

  @Input() icon: string;

  @Input() name: string;

  @Input() progress: number;

  @Input() set target(value: any) {
    this._target = value;
  }
  get target() {
    return this._target;
  }

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
