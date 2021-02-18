const creature=require('mongoose');
const Schema=creature.Schema;

const anthologySchema=new Schema({
    title:{type:String,required:true},
    author:{type:String,required:true},
    synopsis:String,
    date:{type:Date,default:Date.now}
});

const Anthology=creature.model('Anthology',anthologySchema);//empty string is to be database name
module.exports=Anthology;