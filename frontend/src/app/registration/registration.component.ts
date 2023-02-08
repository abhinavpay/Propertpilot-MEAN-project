import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../home/api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  username:any;
  password:any;
  email:any

  constructor(private api:ApiService,private router:Router,private fb:FormBuilder){}

  ngOnInit(): void {

  }

  registerForm=this.fb.group({

    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
     pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
     email:['',[Validators.required,Validators.email]],
     phone:['',[Validators.required,Validators.pattern('[0-9]*')]],

  })

  register(){

    var username = this.registerForm.value.uname;
    var password = this.registerForm.value.pswd;

    if(this.registerForm.valid){
      const result = this.api.register(username,password).subscribe(
        (result:any)=>{
          alert(result.message)
          this.router.navigateByUrl('login');
        },
        result=>{
          alert(result.error.message)
        }
      )
    }

    else{
      alert("registartion falied")
      console.log(this.registerForm.get('uname')?.errors);
    }
  }
  

}
