import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivityTabPage } from './activity-tab.page';

const routes: Routes = [
  {
    path: '',
    component: ActivityTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivityTabPageRoutingModule {}
