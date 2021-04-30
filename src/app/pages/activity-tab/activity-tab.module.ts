import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivityTabPageRoutingModule } from './activity-tab-routing.module';

import { ActivityTabPage } from './activity-tab.page';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivityTabPageRoutingModule,
    SharedModule
  ],
  declarations: [ActivityTabPage]
})
export class ActivityTabPageModule {}
