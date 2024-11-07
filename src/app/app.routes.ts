import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AboutMeComponent } from './about-me/about-me.component';
export const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'inicio', component: InicioComponent},
    {path: 'about', component: AboutMeComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'},

];
