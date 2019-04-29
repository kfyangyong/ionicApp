import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MyPage } from './my.page';
import { UserModule } from '../modules/user/user.module'

const routes: Routes = [
  {
    path: '',
    component: MyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MyPage]
})
export class MyPageModule {}
