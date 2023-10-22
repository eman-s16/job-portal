import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SeekComponent } from './seek/seek.component';
import { ProviderComponent } from './provider/provider.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent, },
  { path: 'register', component: RegisterComponent,  },
  { path: 'profile', component: ProfileComponent},
  { path: 'provider', component: ProviderComponent },
  { path: 'seek', component: SeekComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
