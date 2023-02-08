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
  constructor(private api:ApiService,private router:Router){}

  ngOnInit(): void {


    //get wishlist

    this.api.getwishlist().subscribe(
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


  deletewish(property:any){

    this.api.deletewish(property.id).subscribe(
      
      (result:any)=>{
        
        alert(result.message)
        
        this.wishlist=result.wishlist
        
        
      }
      
    )
  }

}
