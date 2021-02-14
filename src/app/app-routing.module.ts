import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './features/users/users.component';
import { AdminGuard } from './core/auth/admin.guard';
import { MeteoComponent } from './features/meteo/meteo.component';
import { DemoAsyncPipeComponent } from './features/demo-async-pipe/demo-async-pipe.component';
import { UserDetailsComponent } from './features/users-details/users-details.component';
import { LoginComponent } from './features/login/login.component';

const routes: Routes = [
  { path: 'demo-async-pipe', component: DemoAsyncPipeComponent },
  { path: 'users', component: UsersComponent, canActivate: [AdminGuard] },
  {
    path: 'users/:id',
    component: UserDetailsComponent,
    canActivate: [AdminGuard],
  },
  { path: 'meteo', component: MeteoComponent },
  { path: '', component: LoginComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
