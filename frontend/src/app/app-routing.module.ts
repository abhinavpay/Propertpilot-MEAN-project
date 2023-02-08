import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
 
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },

  {
    path:'login',component:LoginComponent
  },


{
  path:'register',component:RegistrationComponent
},




];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    HomeModule
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
