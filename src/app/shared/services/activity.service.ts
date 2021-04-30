import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ActivityModel} from '../models/activity.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(
    private http: HttpClient,
  ) { }

  getList(): Observable<ActivityModel[]> {
    return this.http.get<ActivityModel[]>('http://localhost:3000/activities');
  }
}
