import {ApplicationRef, enableProdMode, isDevMode} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { enableDebugTools } from '@angular/platform-browser';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(moduleRef => {
    if (isDevMode()) {
      const applicationRef = moduleRef.injector.get(ApplicationRef);
      const appComponent = applicationRef.components[0];
      enableDebugTools(appComponent);
    }
  }, err => console.error(err));
