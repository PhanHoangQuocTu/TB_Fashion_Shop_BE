const mongoose = require('mongoose')

async function connect(){
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/TB_Fashion_Shop')
        console.log('connect to database success !!!')
    }
    catch{
        console.log('connect to database failure !!!')
    }
}


module.exports = {connect}