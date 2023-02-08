import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allproperties:[],searchkey:string,propName:string):any []{
    


    if(!allproperties || searchkey =='' || propName==''){
      return allproperties
    }

    const result:any=[];
    allproperties.forEach((property:any)=>{
      if(property[propName].trim().toLowerCase().includes(searchkey.toLowerCase())){
        result.push(property)
      }
    })

    return result;

  }

 
  

}
