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



const addtowishlist= (id,name,price,place,image)=>{
    return db.Wishlist.findOne({id}).then(

        (result)=>{
            if(result){
                return{
                    status:false,
                    statusCode:401,
                    message:"property already added"
                }
            }

            else{
                const newProperty=new db.Wishlist({
                    id,name,price,place,image
                })

                newProperty.save()
                return{
                    status:true,
                    statusCode:200,
                    message:"property added successfully"
                }
            }

        }

    )
}



const getwishlist=()=>{
    return db.Wishlist.find().then(
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


// delete wishlist

const deletewish=(id)=>{
    return db.Wishlist.deleteOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    property:result,
                    message:"property deleted from wishlist successfully"
                }
            }

            else{
                return{
                status:false,
                statusCode:402,
                message:'wislist is empty'
                }
            }
        }
    )
}


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
                return{
                    status:true,
                  statusCode:200,
                  message:"Login Successfull"
        
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








module.exports={
    getProperties,
    viewProperties,
    addtowishlist,
    getwishlist,
    deletewish,
    register,
    login,
    contactlist   
}
