/**
 * @route POST /file
 * @group uploads_files
 * @consumes multipart/form-data
 * @param {file} file.formData.required file to upload
 * @returns {Error} default -error uploading a file, it has to be an xlsx file
 * @returns {success:true,message="file upload successful"} 200 
 * 
 */


const express = require("express");
const upload = require("../middlewares/multerConfig");
const router = express.Router();
router.post("/file", upload.single("file"), function (req, res) {
    const file = req.file
    console.log(file)
    if (file == undefined) {
        res.status(400).json({ message: "file needed" });
    } else {
        console.log(`${req.hostname}/${req.file.path}`);
        res.status(200).json({ message: "the message has been a success" });
    }


})

module.exports = router;

