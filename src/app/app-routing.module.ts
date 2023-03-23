import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WalletListComponent } from './wallet-list/wallet-list.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { RegistrationComponent } from './registration/registration.component';
import { UpdateComponent } from './update/update.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
const routes: Routes = [
  {path: 'wallets', component: WalletListComponent},
  { path: 'home', component: HomeComponent },
  { path: 'add', component: AddComponent },
  {path: 'display', component: WalletListComponent},
  { path: 'registration', component: RegistrationComponent },
  { path: '', redirectTo: '/registration', pathMatch: 'full' },
  { path: 'update', component: UpdateComponent },
  { path: 'login', component:LoginComponent},
  { path: 'profile', component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
