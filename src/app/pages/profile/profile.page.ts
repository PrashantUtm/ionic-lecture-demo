import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public emailAddress = '';

  constructor() { }

  ngOnInit() {
  }

  public onEmailAddressUpdated(updatedEmailAddress: any) {
    this.emailAddress = updatedEmailAddress;
  }

}
