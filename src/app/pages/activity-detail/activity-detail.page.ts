import { Component, OnInit } from '@angular/core';
import {ActivityModel} from "../../shared/models/activity.model";
import {ActivityService} from "../../shared/services/activity.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {Platform} from "@ionic/angular";

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.page.html',
  styleUrls: ['./activity-detail.page.scss'],
})
export class ActivityDetailPage implements OnInit {

  // eslint-disable-next-line @typescript-eslint/naming-convention
  activity_detail: ActivityModel = {} as any;

  subscription: Subscription;

  constructor(private service: ActivityService, private url: ActivatedRoute, public ruter: Router, public platform: Platform) { }

  ngOnInit() {
    console.log(this.url.snapshot.params);
    this.service.activiti(this.url.snapshot.params.id).subscribe(res => {
      this.activity_detail = res;
    });
  }

  calculateMeterToKMIfNecessary(value) {
    if (value < 1000) {
      return value.toFixed(1) + ' m';
    } else {
      return (value / 1000).toFixed(1) + 'km';
    }
  }

  onClick() {
    this.ruter.navigate(['..']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
