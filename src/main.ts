import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { appRouterProviders } from './app/app-routing.module';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(), ...appRouterProviders]
})
  .catch(err => console.error(err));
