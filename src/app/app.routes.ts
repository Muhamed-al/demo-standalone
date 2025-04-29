import { provideRouter, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';

export const routes: Routes = [
    // permet de charger le composant UserComponent en mode lazy loading
    { path: 'users', loadComponent: () => import('./user/user.component').then(m => m.UserComponent) },
];


