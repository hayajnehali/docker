import { Routes } from '@angular/router';
import { GuestUserModule } from './guest-user/guest-user.module'; 
import { AdminModule } from './admin/admin-module/admin.module';

export const routes: Routes = [
    {
      path:'home',
      loadChildren:()=>GuestUserModule
    },    
    {
      path:'admin',
      loadChildren:()=>AdminModule
    }
];
