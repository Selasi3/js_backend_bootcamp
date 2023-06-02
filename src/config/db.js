const req = require("mongoose");
  
const mongoose = ()=> {
    return mongoose.connect("mongodb://localhost:27017/bootcamp",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
}