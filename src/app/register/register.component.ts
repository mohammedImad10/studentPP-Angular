import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public username: string = '';
  public email: string = '';
  public password: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  register(){
    alert("INPUT IS EMPTY");


  }

}
