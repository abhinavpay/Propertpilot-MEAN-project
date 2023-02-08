import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  //get all properties

  getProperties(){
    return this.http.get('http://localhost:3000/all-properties')
  }

  //search by location
  searchkey=new BehaviorSubject('')

  //view properties
  viewproperties(id:any){
    return this.http.get('http://localhost:3000/view-properties/'+id)
  }
 
  //add to wishlist

  addtoWishlist(property:any){

    const body = {

      id:property.id,
      name:property.name,
      price:property.price,
      place:property.place,
      image:property.image
    }

    return this.http.post('http://localhost:3000/addtowishlist',body)

  }


  //get wishlist

  getwishlist(){
    return this.http.get('http://localhost:3000/getwishlist')
  }

  //delete wishlist

  deletewish(id:any){
    return this.http.delete('http://localhost:3000/deletewish/'+id)
  }


  //register

  register(username:any,password:any){

    const body ={
      username,
      password
    }
    return this.http.post("http://localhost:3000/register",body)
  }


  //login

  login(username:any,password:any){

    const body={
      username,
      password
    }

    return this.http.post('http://localhost:3000/login',body)

  }


  //contact list

  addcontact(name:any,phone:any,address:any,message:any){
    const body={
      name,
      phone,
      address,
      message
    }

    return this.http.post('http://localhost:3000/contactlist',body)
  }



}
