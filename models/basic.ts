import mongoose = require('mongoose');

let BasicSchema = new mongoose.Schema({
  name:{
    type: String,
    min: 2,
    max: 50,
    uppercase: true
    }
})
export default mongoose.model('Basic', BasicSchema);
