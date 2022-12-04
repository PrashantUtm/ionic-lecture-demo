import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-receive-updates',
  templateUrl: './receive-updates.component.html',
  styleUrls: ['./receive-updates.component.scss'],
})
export class ReceiveUpdatesComponent implements OnInit {

  @Output() public emailAddressUpdated = new EventEmitter<string>();

  public receiveUpdates = false;

  constructor() { }

  ngOnInit() {}

  public onEmailUpdated(updatedEmailAddress: any) {
    this.emailAddressUpdated.emit(updatedEmailAddress);
  }

}
