const express = require("express");
const memorys = require("../middlewares/multerMemoryStorageConfig.js");
const multer = require("multer");
const fileReaderController = require("../controllers/XSLXFileReaderController.js")
const router = express.Router();
const path = require("path");
const axios = require("axios").default;
router.post("/memory", multer({ storage: multer.memoryStorage() }).single("file"), fileReaderController.readXLSFile, function (req, res) {
   
    
    try {
        const file = req.file
        for (const i in file) {
            console.log(`${i}`);
        }
        res.status(200).json({ message: "the message has been a success" });

    } catch (err) {
        res.status(400).send("No file uploaded");
        console.log(err)
    }

})
module.exports = router;
