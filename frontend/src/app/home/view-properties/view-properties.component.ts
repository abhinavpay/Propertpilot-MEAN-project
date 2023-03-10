import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-properties',
  templateUrl: './view-properties.component.html',
  styleUrls: ['./view-properties.component.css']
})
export class ViewPropertiesComponent implements OnInit {

  allproperties:any=[]
  
  property:any=[];

  // status=this.api.check.status ? true : false;
  
 status=false
  
  constructor(private api:ApiService,private route:ActivatedRoute,private fb:FormBuilder,private router:Router){}


  


  ngOnInit(): void {

    this.status = localStorage.getItem('currentuser') ? true :false
    
    let id = this.route.snapshot.paramMap.get('id')
    console.warn(id)
    id && this.api.viewproperties(id).subscribe(
      (result:any)=>{
        console.warn(result)
        this.allproperties=result.property
      }
    ) 
    



    
  }

  contactForm=this.fb.group({

    name:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
     phone:['',[Validators.required,Validators.pattern('[0-9]*')]],
     address:['',[Validators.required,Validators.pattern('[a-zA-Z\\S]{1,}[\\S\\s]*|[\\s]*[\\S]{1,}[\\S\\s]*')]],
     message:['',[Validators.required,Validators.pattern('[a-zA-Z\\S]{1,}[\\S\\s]*|[\\s]*[\\S]{1,}[\\S\\s]*')]],

  })


  check(){

    if(localStorage.getItem('currentuser')){

    }
    else{
      alert("login first")
      this.router.navigateByUrl('login')
    }

  }

  

send(){

   var name =this.contactForm.value.name;
   var phone=this.contactForm.value.phone;
   var address =this.contactForm.value.address;
   var message =this.contactForm.value.message;


   

    if(this.contactForm.valid){
      const result = this.api.addcontact(name,phone,address,message).subscribe(
        (result:any)=>{
  
          alert(result.message)
          this.router.navigateByUrl('properties')
          
  
        },
        result=>{
          alert(result.error.message)
        }
  
      )
      }

   
   

   
   }

   
  
  }
    

 

