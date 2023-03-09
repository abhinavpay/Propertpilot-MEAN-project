import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  allContact:any=[]
  contact:any;
  constructor(private api:ApiService){}

  ngOnInit(): void {

  
    this.api.getContactlist().subscribe(
      (data:any)=>{
        this.allContact=data.contact
      }
    )
    
  }



}
