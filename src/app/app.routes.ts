import { Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { TrabajosComponent } from './components/trabajos/trabajos.component';

export const routes: Routes = [
    {
        path: 'contacto',
        component: ContactoComponent
    },
    {
        path: 'curriculum',
        component: CurriculumComponent
    },
    {
        path: 'trabajos',
        component: TrabajosComponent
    },
];
