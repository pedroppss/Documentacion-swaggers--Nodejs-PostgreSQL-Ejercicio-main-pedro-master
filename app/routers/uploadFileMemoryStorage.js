const express = require("express");
const memorys = require("../middlewares/multerMemoryStorageConfig.js");
const multer = require("multer");
const FileReaderController = require("../controllers/XSLXFileReaderController.js")
const router = express.Router();
const path = require("path");
const axios = require("axios").default;
//const axios=express.Router();
router.post("/memory", multer({ storage: multer.memoryStorage() }).single("file"), FileReaderController.readXLSFile, function (req, res) {
   
    
    try {
        const file = req.file
        for (const i in file) {
            console.log(`${i}`);
        }
        //const response = await.axios.post("/memory", i)
        //console.log(response)
        res.status(200).json({ message: "the message has been a success" });

    } catch (err) {
        res.status(400).send("No file uploaded");
        console.log(err)
    }

})
module.exports = router;
