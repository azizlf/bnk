import { Component, OnInit } from '@angular/core';

declare function aosConf(): void

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  ngOnInit(): void {

    aosConf()

  }

}
