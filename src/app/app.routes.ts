import { Routes } from '@angular/router';
import { EnhancementComponent } from '../modules/classes/shaman/enhancement/enhancement.component';
import { ElementalComponent } from '../modules/classes/shaman/elemental/elemental.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'enhancement', component: EnhancementComponent },
    { path: 'elemental', component: ElementalComponent },
    { path: '**', redirectTo: '/home' }
];
