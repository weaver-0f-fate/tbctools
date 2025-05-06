import { Routes } from '@angular/router';
import { ProfileComponent } from '../modules/profile/profile.component'; // Import the ProfileComponent

export const routes: Routes = [
    { path: 'home', component: ProfileComponent }, // Define a route for '/home'
    { path: '**', redirectTo: '/home', pathMatch: 'full' } // Wildcard route redirects to '/home'
];
