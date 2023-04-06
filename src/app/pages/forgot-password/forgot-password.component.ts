import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit{


    userForm!: FormGroup;
  
    constructor( private _fb: FormBuilder){
      this.userForm=this._fb.group({
        phone: ['', ([Validators.required ])],
      })
    }
  
    ngOnInit(): void {}
  
    onSubmit(){
  
    }
  
  
}
