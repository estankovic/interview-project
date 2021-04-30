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

  constructor() { }

  ngOnInit() {}

}
