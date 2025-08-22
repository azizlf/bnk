import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  openMenuNav = false

  router = "profile"


  ngOnInit(): void {

    this.router = location.href.split("/")[5] ? location.href.split("/")[5] : ''

  }


}
