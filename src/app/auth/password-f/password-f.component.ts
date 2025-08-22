import { Component, OnInit } from '@angular/core';

declare function aosConf(): void

@Component({
  selector: 'app-password-f',
  templateUrl: './password-f.component.html',
  styleUrls: ['./password-f.component.css']
})
export class PasswordFComponent implements OnInit {

  ngOnInit(): void {

    aosConf()

  }

}
