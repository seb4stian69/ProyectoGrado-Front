// First level importation
import { Routes } from '@angular/router';
// Second level importation
import { MenuComponent } from '../../pages/menu/menu.component';
import { TestviewComponent } from '../../pages/testview/testview.component';

export const routes: Routes = [
    {path: '', component: MenuComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'tomakexam/:idExam/:idUser', component: TestviewComponent},
];
