import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivityTileComponent} from './components/activity-tile/activity-tile.component';
import {IonicModule} from '@ionic/angular';



@NgModule({
  declarations: [ActivityTileComponent],
  exports: [ActivityTileComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class SharedModule { }
