const XLSX = require("xlsx");
const multer = require("multer");
const axios = require("axios").default;
const URL = "http://localhost:4000/Pedrops/v1/departments";
const URLuser = "http://localhost:4000/Pedrops/v1/users/signup";
exports.readXLSFile = (req, res) => {
    const book = XLSX.read(req.file.buffer);
    const sheetexcel = book.SheetNames;
    const sheet = sheetexcel[0];
    const dataexcel = XLSX.utils.sheet_to_json(book.Sheets[sheet])
    const dataexceluser=XLSX.utils.sheet_to_json(book.Sheets[sheet])
    //console.log(dataexcel);
    insertUser(dataexceluser,res);
    insertDepartment(dataexcel,res);
    
   
}
const insertDepartment = async (dataexcel,res) => {
    try {
        for (let i in dataexcel) 
        {
            console.log(dataexcel[i])
            const response = await axios.post(URL, dataexcel[i]);
           
        }
        res.status(200).json({success:true,message:"data inserted correctly"});

    } catch (err) {
        console.log(err)
    }


}
const insertUser = async (dataexceluser,res) => {
    try {
        for (let i in dataexceluser) {
            console.log(dataexceluser[i])
            const response = await axios.post(URLuser, dataexceluser[i]);
            
        }
        res.status(200).json({success: true, message:"data inserted correctly"});
    } catch (err) {
        console.log(err)
    }


}




