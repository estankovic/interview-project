import { Component, OnInit } from '@angular/core';
import {ActivityService} from '../../shared/services/activity.service';

@Component({
  selector: 'app-activity-tab',
  templateUrl: './activity-tab.page.html',
  styleUrls: ['./activity-tab.page.scss'],
})
export class ActivityTabPage implements OnInit {

  activities$ = this.activityService.getList();

  constructor(
    private readonly activityService: ActivityService
  ) { }

  ngOnInit() {
  }


  onClick(a: any) {
    window.open('/activity-detail/' + a.id, '_self');
  }
}
