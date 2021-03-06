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
// tslint:disable-next-line:max-line-length
import { ChangeDetectionStrategyParentComponent } from './posts/change-detection-strategy-parent/change-detection-strategy-parent.component';
import {RouterModule} from '@angular/router';
import { MainComponent } from './posts/main/main.component';
import { ObservablesComponent } from './posts/observables/observables.component';
import {ObservableServiceService} from './posts/observables/observable-service.service';
import { CardComponent } from './components/card/card.component';
import { AngularVersionComponent } from './posts/angular-version/angular-version.component';
import { BadgeComponent } from './components/badge/badge.component';
import { ProdModeComponent } from './posts/prod-mode/prod-mode.component';
import { TerminalComponent } from './components/terminal/terminal.component';

const routes = [
  { path: '', component: MainComponent },
  { path: 'change-detection', component: ChangeDetectionStrategyParentComponent },
  { path: 'observables', component: ObservablesComponent },
  { path: 'update', component: AngularVersionComponent },
  { path: 'prod-mode', component: ProdModeComponent },
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
    MainComponent,
    ObservablesComponent,
    CardComponent,
    AngularVersionComponent,
    BadgeComponent,
    ProdModeComponent,
    TerminalComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})
  ],
  providers: [ChangeDetectionStrategyService, ObservableServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
