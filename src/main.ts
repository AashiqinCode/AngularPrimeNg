import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {NgModule} from '@angular/core';
import {DemoMaterialModule} from './app/material-module';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// @NgModule({
//     imports:[BrowserModule, BrowserAnimationsModule, FormsModule,DemoMaterialModule],
//     declarations:[app.component.html]
// })

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err));
