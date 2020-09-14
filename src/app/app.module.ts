import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {allApproutes} from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import{ApixuService} from './apixu.service';
import{MenuComponent} from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    MenuComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(allApproutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent,
  ApixuService]
})
export class AppModule { }
