import { RouterModule, Routes, withDebugTracing } from '@angular/router';
import { provideRouter } from '@angular/router';
import { PppComponent } from './ppp/ppp.component';

export const routes: Routes = [];


export const appRoutes: Routes = [
{ path: 'ppp', component: PppComponent}
];
