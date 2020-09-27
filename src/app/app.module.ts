import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TwitterLogoComponent } from './twitter-logo/twitter-logo.component';
import { TopIssuesComponent } from './top-issues/top-issues.component';
import { ChangeDetectionStrategyComponent } from './posts/change-detection-strategy/change-detection-strategy.component';
import { SafeHtmlDirective } from './directives/safe-html.directive';
import { SafeHtmlPipe } from './pipe/safe-html.pipe';
import {HttpClientModule} from '@angular/common/http';
import {ChangeDetectionStrategyService} from './posts/change-detection-strategy/change-detection-strategy.service';
import { ChangeDetectionStrategyPushComponent } from './posts/change-detection-strategy-push/change-detection-strategy-push.component';
import { ChangeDetectionStrategyParentComponent } from './posts/change-detection-strategy-parent/change-detection-strategy-parent.component';
import {RouterModule} from '@angular/router';
import { MainComponent } from './posts/main/main.component';

const routes = [
  { path: '', component: MainComponent },
  { path: 'change-detection', component: ChangeDetectionStrategyParentComponent },
  ];

@NgModule({
  declarations: [
    AppComponent,
    TwitterLogoComponent,
    TopIssuesComponent,
    ChangeDetectionStrategyComponent,
    SafeHtmlDirective,
    SafeHtmlPipe,
    ChangeDetectionStrategyPushComponent,
    ChangeDetectionStrategyParentComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ChangeDetectionStrategyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
