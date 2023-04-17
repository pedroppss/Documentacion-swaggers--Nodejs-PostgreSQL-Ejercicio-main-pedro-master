const XLSX=require("xlsx");
const multer = require("multer");
const axios=require("axios").default;
exports.readXLSFile=(req,res)=>
{
    const book=XLSX.read(req.file.buffer);
    const sheetexcel=book.SheetNames;
    const sheet=sheetexcel[0];
    const dataexcel=XLSX.utils.sheet_to_json(book.Sheets[sheet])
    //console.log(dataexcel);
    const insertDepartment=async()=>
    {
    try{
        for ( const i in dataexcel)
           {
            console.log(dataexcel[i])   
            const response=await axios.post("http://localhost:4000/Pedrops/v1/departments",dataexcel[i])
            
            }
    }catch(err)
    {
        console.log(err)
    }
    }
    insertDepartment();
    

    
} 



