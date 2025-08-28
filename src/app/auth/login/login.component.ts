import { Component, OnInit } from '@angular/core';

declare function aosConf():void

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loadHomeClient(){
    location.href = "/#/app"
    location.reload()
  }

  ngOnInit(): void {

    aosConf()
    
  }

}
