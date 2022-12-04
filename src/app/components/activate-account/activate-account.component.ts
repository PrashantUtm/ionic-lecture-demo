import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.scss'],
})
export class ActivateAccountComponent implements OnInit {

  @Input() public emailAddress = '';
  public sendLinkLabel: string;
  public isActivationButtonDisabled = false;

  private readonly sendLinkInitialText = 'Your account is not yet active. Click on the button to receive an activation link.';

  constructor() { 
    this.sendLinkLabel = this.sendLinkInitialText;
  }

  ngOnInit() {}

  public sendActivationLink() {
    this.sendLinkLabel = `An activation link has been sent to ${this.emailAddress}. Please check your inbox.`;
    this.isActivationButtonDisabled = true;
    let interval = setInterval(() => {
      this.sendLinkLabel = this.sendLinkInitialText;
      this.isActivationButtonDisabled = false;
      console.log('5s have passed');
      clearInterval(interval);
    }, 5000);
  }

}
