import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'create-user',
    loadChildren: () => import('./features/create-user/create-user.module').then(m => m.CreateUserModule)
  },
  {
    path: 'booking-list',
    loadChildren: () => import('./features/booking-list/booking-list.module').then(m => m.BookingListModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
