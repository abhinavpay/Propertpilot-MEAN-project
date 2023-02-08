import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../registration/registration.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home.component';
import { PropertiesComponent } from './properties/properties.component';
import { ViewPropertiesComponent } from './view-properties/view-properties.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [



  
{ path: '', component: HomeComponent },

{path:'properties',component:PropertiesComponent},

{path:'viewproperties/:id',component:ViewPropertiesComponent},

{path:'wishlist',component:WishlistComponent},

{path:'login',component:LoginComponent},


{path:'register',component:RegistrationComponent},

{path:'admin',component:AdminComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
