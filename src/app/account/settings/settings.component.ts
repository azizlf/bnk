import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  router = "profile"


  ngOnInit(): void {
    
    this.router = location.href.split("/")[6]

  }

}
