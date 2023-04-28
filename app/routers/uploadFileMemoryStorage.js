/**
 * @route POST /memory
 * @group uploads_files
 * @consumes multipart/form-data
 * @param {file} file.formData.required file to upload
 * @returns {Error} default -error uploading a file
 * @returns {success:true,message="file upload successful"} 200 
 * 
 */
const fs = require("fs");
const express = require("express");
const memory = require("../middlewares/multerMemoryStorageConfig.js");
const multer = require("multer");
const fileReaderController = require("../controllers/XSLXFileReaderController.js")
const router = express.Router();

const axios = require("axios").default;



router.post("/memory", multer({ storage: multer.memoryStorage() }).single("file"), fileReaderController.readXLSFile, function (req, res) {

    const file = req.file
    if (!file) {
        res.status(400).json({ message: "file needed" });
    }
});


module.exports = router;
