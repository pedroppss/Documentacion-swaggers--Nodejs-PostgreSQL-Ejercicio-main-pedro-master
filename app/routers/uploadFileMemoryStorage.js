const express=require("express");
const upload = require("../middlewares/FileReaderConfig");
const multer = require("multer");
const FileReaderController=require("../controllers/XSLXFileReaderController.js")
const router=express.Router();
router.post("/memory",multer({storage:multer.memoryStorage()}).single("file"),FileReaderController.readXLSFile,function(req,res,next) 
{
    const file=req.file
    console.log(file)
    res.status(200).json({message:"the message has been a success"});
    if(!req.file)
    {
        res.status(400).send('No file uploaded.');
    }
})
module.exports=router;
