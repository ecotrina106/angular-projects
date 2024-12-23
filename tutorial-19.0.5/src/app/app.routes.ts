import { Routes } from '@angular/router';
import { HomePageComponent } from './homePage/homePage.component';
import { UserPageComponent } from './user-page/user-page.component';

export const routes: Routes = [
    {
        path:'',
        title: 'Home Page',
        component: HomePageComponent,
    },
    {
        path:'user',
        title: 'User Page',
        component: UserPageComponent,
    },
];
