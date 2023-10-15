import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { EffectsModule } from '@ngrx/effects';
import { UserEffect } from './state/effects/user.effects';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './state/reducers/user.reducer';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultDashboardComponent } from './components/default-dashboard/default-dashboard.component';
import { InsideDashboardComponent } from './components/inside-dashboard/inside-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    HeroesComponent,
    DefaultDashboardComponent,
    InsideDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      user: userReducer,
    }),
    EffectsModule.forRoot([UserEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      features: {
        pause: false,
        lock: true,
        persist: true,
    },
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
