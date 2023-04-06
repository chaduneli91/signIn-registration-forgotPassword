import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  userForm!: FormGroup;

  constructor( private _fb: FormBuilder){
    this.userForm=this._fb.group({
      email: ['chadunelikakha@gmail.com', ([Validators.required, Validators.email])],
      password: ['valkiria91', ([Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-Z ]*')])],
      
    })
  }

  ngOnInit(): void {}

  onSubmit(){

  }

}
