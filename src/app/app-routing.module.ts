import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { WeatherComponent } from './weather/weather.component';


export const allApproutes: Routes = [
 { path: '', component:MenuComponent
},{
    path:'weather',component:WeatherComponent
},{
    path:'**',redirectTo:'Menu'
}
];

