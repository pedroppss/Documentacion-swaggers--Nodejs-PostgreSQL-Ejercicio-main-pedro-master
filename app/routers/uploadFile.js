const express=require("express");
const upload = require("../middlewares/multerConfig");
const router=express.Router();
router.post("/file",upload.single("file"),function(req,res) 
{
    const file=req.file
    console.log(file)
    console.log(`${req.hostname}/${req.file.path}`)
    res.status(200).json({message:"the message has been a success"});
})
//router.post("/image",upload.single("image"),function(req,res) 
//{
  //  const image=req.file
   // console.log(image)
    //res.status(200).json({message:"the message has been a success"});
//})
module.exports=router;

