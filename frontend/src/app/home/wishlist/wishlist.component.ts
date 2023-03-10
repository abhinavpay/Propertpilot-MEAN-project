import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

wishlist:any=[]
error:any
username:any

currentuser = localStorage.getItem('currentuser') 

  constructor(private api:ApiService,private router:Router){}

  ngOnInit(): void {

    this.getWishlist()
   
    if(localStorage.getItem('currentuser')){
      this.username=(localStorage.getItem('currentuser'))
    }
  
    
  }


  getWishlist(){

      //get wishlist

      if(localStorage.getItem('isUserLogin')=='true'){

        var username = localStorage.getItem('currentuser')

        this.api.getwishfromuser(username).subscribe(
          (data:any)=>{
            this.wishlist=data.property
    
            if(this.wishlist.length==0){
              this.error="empty wishlist"
            }
          },
          (data:any)=>{
            this.error=data.error.message
          }
        )


      }
      // else{

      //   this.api.getwishlist().subscribe(
      //     (data:any)=>{
      //       this.wishlist=data.property
    
      //       if(this.wishlist.length==0){
      //         this.error="empty wishlist"
      //       }
      //     },
      //     (data:any)=>{
      //       this.error=data.error.message
      //     }
      //   )


      // }
      
      

  }





  deletewish(properties:any){

    var currentuser= localStorage.getItem('currentuser')

    var temp = currentuser

    // alert("sucess")

   return this.api.deletewish(temp,properties).subscribe(
    (result)=>{
      console.log(result);

      this.wishlist=result

     
      
    }
    
    

   )
    
   
   

  }
  


  // deletewish(property:any){

  //   this.api.deletewish(property.id).subscribe(

      
      
  //     (result:any)=>{
        
  //       alert(result.message)
        
  //       this.wishlist=result.wishlist
        
        
        
  //     }
      
  //   )
  //   this.ngOnInit()
  // }


}
