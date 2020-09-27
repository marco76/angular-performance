import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {ChangeDetectionStrategyParentComponent} from '../posts/change-detection-strategy-parent/change-detection-strategy-parent.component';
import {MainComponent} from '../posts/main/main.component';

const routes = [
  { path: 'change-detection', component: ChangeDetectionStrategyParentComponent },
  { path: '/', component: MainComponent },
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
