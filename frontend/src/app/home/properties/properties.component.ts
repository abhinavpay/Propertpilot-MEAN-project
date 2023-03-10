import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../api.service';


@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {


  username:any;

  allproperties:any=[]

  searchTerm:any=[];
  propertyid:any
 
  

  p:number=1
  itemsPerPage:number=6
  totalproperties:any

  properties:any;

  property:any

  currentuser = localStorage.getItem('currentuser') 
    
  
  

constructor(private api:ApiService,private route:ActivatedRoute){

  if(localStorage.getItem('currentuser')){
    this.username=(localStorage.getItem('currentuser'))
  }


}

  ngOnInit(): void {

    //to fetch all products from the backend to frontend

    this.api.getProperties().subscribe(
      (data:any)=>{
        this.allproperties=data.property
        this.totalproperties=data.length
      }
    )

    this.api.searchkey.subscribe(
      (data:any)=>{
        this.searchTerm=data
      }
    )

    this.route.paramMap.subscribe(
      params=>{
        this.propertyid=params.get('id')
      }
    )    
  }


  

  //search key
  search(event:any){
    let searchkey = event.target.value

    this.api.searchkey.next(searchkey)
  }

  



  addtoWishlist(property:any){


    var currentuser = localStorage.getItem('currentuser')
      // var currentuser = JSON.parse(localStorage.getItem('currentuser')||'')

      var temp = currentuser     

      if(temp){

        // alert(temp)

        // alert(property)
        

        this.api.addtoWishlist(property,temp).subscribe(
      
          (result:any)=>{
  

            console.log(result);
            
            alert(result.message)
          },
          (result:any)=>{
            alert(result.error.message)
          }
        )


      }
      
      


    

   
  }
  

}
