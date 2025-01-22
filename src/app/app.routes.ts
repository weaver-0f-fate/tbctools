import { Routes } from '@angular/router';
import { EnhancementComponent } from '../modules/classes/shaman/enhancement/enhancement.component';
import { ElementalComponent } from '../modules/classes/shaman/elemental/elemental.component';

export const routes: Routes = [
    { path: 'tbctools', redirectTo: '/home', pathMatch: 'full' },
    { path: 'tbctools/enhancement', component: EnhancementComponent },
    { path: 'tbctools/elemental', component: ElementalComponent },
    { path: '**', redirectTo: '/home' }
];
