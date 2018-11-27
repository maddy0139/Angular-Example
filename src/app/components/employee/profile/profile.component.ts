import { Component, OnInit } from '@angular/core';
import { AddressComponent } from '../address/address.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  panels = [
    {
      active    : true,
      name      : 'This is panel header 1',
      content   :AddressComponent,
      disabled  : false
    },
    {
      active  : false,
      disabled: false,
      name    : 'This is panel header 2'
    },
    {
      active  : false,
      disabled: false,
      name    : 'This is panel header 3'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
