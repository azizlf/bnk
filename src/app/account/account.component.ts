import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  openMenuNav = false

  router = "profile"

  openMobileNav = false

  constructor(private routerr: Router) { }

  ngOnInit(): void {

    this.router = location.href.split("/")[5] ? location.href.split("/")[5] : ''

    this.routerr.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.router = event.urlAfterRedirects.split("/")[2] ? event.urlAfterRedirects.split("/")[2] : ""
      })

  }


}
