import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConversionComponent } from './conversion/conversion.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent},
    { path: 'conversion', component: ConversionComponent}
];
