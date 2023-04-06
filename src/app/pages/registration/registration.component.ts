import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  
  userForm!: FormGroup;
  submitted = false;

  constructor( private _fb: FormBuilder){
    this.userForm=this._fb.group({
      name: ['', ([Validators.required, Validators.minLength(2)])],
      lastName: ['', ([Validators.required, Validators.minLength(4)])],
      userName: ['', ([Validators.required, Validators.minLength(5)])],
      email: ['', ([Validators.required, Validators.email])],
      dateOfBirth: ['', [ Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]], 
      phone: ['', ([Validators.required,])],
      password: ['', ([Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-Z ]*')])],
      
    })
  }

  ngOnInit(): void {}

  submit(){}
  
   

  

}
