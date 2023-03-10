//import db ()

const db = require('./db')


const getProperties=()=>{
    return db.Property.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    property:result
                }
            }

            else{
                return{
                    status:false,
                    statusCode:402,
                    message:'property not found'
                }
            }
        }
    )
}



const viewProperties=(id)=>{
    return db.Property.find({id}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    property:result
                }
            }

            else{
                return{
                    status:false,
                    statusCode:402,
                    message:'property not found'
                }
            }
        }
    )
}



const addtowishlist= (username,id,name,price,place,image)=>{

    // console.log(username);
    // let samp = 'a';
    // console.log(samp);

    return db.User.findOne({username}).then(

        (result)=>{

            // console.log(result);
            
            if(result){
                
                

                // if(username==result.username){
                // }
                    result.wishlist.push({
                        id,
                        name,price,place,image
                    })

                    result.save()

                

                return{
                    status:true,
                        statusCode:200,
                        message:"property successfully added"

                }

                // return{
                //     status:false,
                //     statusCode:401,
                //     message:"property already added"
                // }
            }


            else{
                return{
                    status:false,
                statusCode:401,
                message:"Invalid username"
                  }
            }

            // else{
            //     const newProperty=new db.Wishlist({
            //         username,password,id,name,price,place,image
            //     })

            //     newProperty.save()
            //     return{
            //         status:true,
            //         statusCode:200,
            //         message:"property added successfully"
            //     }
            // }

        }

    )
}


const getwishlistfromuser=(username)=>{
    return db.User.findOne({username}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    property:result.wishlist
                }
            }

            else{
                return{
                    status:false,
                    statusCode:402,
                    message:"property not found"
                }
            }
        }
    )
}







const getwishlist=()=>{
    return db.User.findOne().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    property:result
                }
            }

            else{
                return{
                    status:false,
                    statusCode:402,
                    message:"property not found"
                }
            }
        }
    )
}











const deletewishfromuser=(username,id)=>{
    return db.User.findOne({username}).then(
        (result)=>{
            
            if(result){
                
                
                currentwish=result.wishlist
                
                ids=currentwish[0].id
                
                // console.log(ids);

                if(ids=id){


                    // console.log("success");

                    const data = currentwish.findIndex(item => {
                        return item.id==ids
                    })

                    // console.log(data);

                    currentwish.splice(data,1)

                    // console.log(currentwish);


                  
                    
                                                       
                }
                
                result.save()
                
                
                return{
                    status:true,
                    statusCode:200,
                    // property:result,
                    message:"property deleted from wishlist successfully"
                }
             
                // return{
                //     status:true,
                //     statusCode:200,
                //     property:result,
                //     message:"property deleted from wishlist successfully"
                // }
            }

            // else{
            //     return{
            //     status:false,
            //     statusCode:402,
            //     message:'wishlist is empty'
            //     }
            // }
        }
    )

}




// delete wishlist

// const deletewish=(id)=>{
//     return db.User.deleteOne({id}).then(
//         (result)=>{
//             if(result){
//                 return{
//                     status:true,
//                     statusCode:200,
//                     property:result,
//                     message:"property deleted from wishlist successfully"
//                 }
//             }

//             else{
//                 return{
//                 status:false,
//                 statusCode:402,
//                 message:'wislist is empty'
//                 }
//             }
//         }
//     )
// }


//register

const register = (username,password)=>{
    return db.User.findOne({username}).then(

        user =>{
            if(user){
                return{
                    status:false,
                  statusCode:401,
                  message:"user already registered"
        
                  }
            }

            else{

                const newUser = new db.User({
                    username:username,
                    password:password
                })

                newUser.save()

                return{
                    status:true,
                    statusCode:200,
                    message:"register sucessfull"
                  }

            }


        }

    )
}



//login

const login = (username,password)=>{

    return db.User.findOne({username,password}).then(

        user =>{
            if(user){
                currentuser=user.username
                return{
                    status:true,
                  statusCode:200,
                  message:"Login Successfull",
                    currentuser:user.username
        
                  }
            }

            else{
               
                    return {
                        status:false,
                        statusCode:401,
                        message:"invalid userdetails"
                      }
                
            }
        }

    )

}


const contactlist = (name,phone,address,message)=>{

    return db.Contactlist.find().then(
        (result)=>{
            // if(result){

                
            //     return{
            //         status:false,
            //         statusCode:401,
            //         message:"contact not sended"
            //     }
            // }



            // else{
                const newContact=new db.Contactlist({
                    name,phone,address,message
                })

                newContact.save()
            
                return{
                    status:true,
                    statusCode:200,
                    message:'message successfully sended'
                }
            

        // }
        }
    )
}


const getContactlist=()=>{
    return db.Contactlist.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    contact:result
                }
            }

            else{
                return{
                    status:false,
                    statusCode:402,
                    message:"contactlist not found"
                }
            }
        }
    )
}










module.exports={
    getProperties,
    viewProperties,
    addtowishlist,
    getwishlist,
    // deletewish,
    register,
    login,
    contactlist,
    getContactlist,
    getwishlistfromuser,
    deletewishfromuser,
      
}
