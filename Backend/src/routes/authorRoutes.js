const express= require("express");
const Authordata = require("../model/authorData");
const authorsRouter=express.Router();
const authorData=require('../model/authorData')
const cors = require('cors');

function router(nav){

authorsRouter.options('/', cors())

authorsRouter.get('/',cors(),(req,res)=>{
    Authordata.find()
    .then((authors)=>{
        res.send(authors);
    })
});

authorsRouter.get('/:id',cors(),(req,res)=>{
    const id = req.params.id;

    authorData.findOne({_id: id})
    .then((author)=>{
        res.render("author",{
            nav,
            title:'Author',
            author
        });
    })
});


return authorsRouter;

}

module.exports=router;