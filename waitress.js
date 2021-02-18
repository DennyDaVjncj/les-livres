const xprss=require('express');
const creature=require('mongoose');//for database
const googleMaps=require('./apiData/anthology');//
const app=xprss();
const CHANNEL=process.env.CHANNEL||7853;

app.use(xprss.urlencoded({extended:true}));
app.use(xprss.json());
if(process.env.NODE_ENV==='production'){
    app.use(xprss.static('client/build'))
}

app.use(googleMaps);//eventual routes folder
creature.connect(process.env.MONGODB_URI||'mongodb://localhost/anthology',{
    useNewUrlParser:true,
    useFindAndModify:false,
    useUnifiedTopology:true
});

app.listen(CHANNEL,()=>{
    console.log(`🪐==>Data travel activated via portal: https://localhost:${CHANNEL}`)
});