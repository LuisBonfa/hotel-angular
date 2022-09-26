import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './component/create-user.component';
import { CreateUserRoutingModule } from './create-user-routing.module';

@NgModule({
  declarations: [CreateUserComponent],
  imports: [
    CommonModule,
    CreateUserRoutingModule
  ],
  bootstrap: [CreateUserComponent]
})
export class CreateUserModule { }
