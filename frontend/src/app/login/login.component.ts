import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../home/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private api:ApiService,private router:Router,private fb:FormBuilder){}

  username:any;
  password:any;

  ngOnInit(): void {
    
  }


  loginForm=this.fb.group({

    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],

  })



  login(){

    var username=this.loginForm.value.uname;
    var password = this.loginForm.value.pswd;


    if(this.loginForm.valid){
      this.api.login(username,password).subscribe(
        (result:any)=>{
          localStorage.setItem('currentuser', result.currentuser)
          localStorage.setItem('isUserLogin', 'true')
          // localStorage.setItem('currentuser',JSON.stringify(result.currentuser))
          alert(result.message)
          this.router.navigateByUrl('properties')
          
        },
       (result:any)=>{
        alert(result.error.message)
       } 
      )
    }


  }



}
