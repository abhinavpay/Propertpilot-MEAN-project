//1 import mongoose

const mongoose = require('mongoose')

//2 define connection string

mongoose.connect('mongodb://localhost:27017/rental',()=>{
    console.log('mongodb connected');
})

//3 create a model for the properties , properties 'p' should be capital


const Property = mongoose.model('Property',{

    //schema creation

    id:Number,
    name:String,
    price:Number,
    place:String,
    image:String,
    bedimg:String,
    kitchen:String,
    bedroom:Number,
    bathroom:Number,
    status:String,
    description:String

  

}) 


//create a model for wishlist , w should be capital


// const Wishlist=mongoose.model('wishlist',{
//     username:String,
//     password:String,
//     id:Number,
//     name:String,
//     price:Number,
//     place:String,
//     image:String,
// })


const User = mongoose.model('users',{

    username:String,
    password:String,
    wishlist:[]

})


const Contactlist = mongoose.model('Contactlist',{

    name:String,
    phone:Number,
    address:String,
    message:String

})


module.exports={
    Property,
    // Wishlist,
    User,
    Contactlist
}



