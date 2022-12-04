import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { ActivateAccountComponent } from 'src/app/components/activate-account/activate-account.component';
import { ReceiveUpdatesComponent } from 'src/app/components/receive-updates/receive-updates.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule
  ],
  declarations: [ProfilePage, ActivateAccountComponent, ReceiveUpdatesComponent]
})
export class ProfilePageModule {}
