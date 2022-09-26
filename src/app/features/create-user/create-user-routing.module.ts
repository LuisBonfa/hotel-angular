import { NgModule } from '@angular/core';
import { CreateUserComponent } from './component/create-user.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: CreateUserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateUserRoutingModule { }
