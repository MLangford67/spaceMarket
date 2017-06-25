import * as express from 'express';
import * as mongoose from 'mongoose';
import Basic from '../models/basic';

let router = express.Router();

router.post('/', (req, res, next)=>{

if(req.body._id === undefined){

  let basic:any = new Basic();
  basic.name = req.body.name;
  basic.date = req.body.date;
  basic.time = req.body.time;
  basic.user_tag = req.body.user_tag;
  basic.save(function(err, newBasic){
    console.log(err)
    if(err){
      return next(err)
    }
    res.json()
  }).catch((err)=>{
    res.status(500);
  })
}else{
  Basic.findByIdAndUpdate(req.body._id, { $set: { name: req.body.name, date: req.body.date, time: req.body.time}}, function (err, updatedBasic) {
    if (err) {
      console.log(err);
    } else {
      console.log(`RESULT: ${updatedBasic}`);
    }
  });
}
res.sendStatus(200);
})


export default router;
