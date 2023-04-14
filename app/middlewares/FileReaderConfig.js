const multer=require("multer");
const storage=multer.memoryStorage();
//const fileUpload = multer({
//    storage: upload,
//});

const upload=multer
({
    storage:storage,
    fileFilter: function (req, file, cb) 
    {
        
        if (file.mimetype=="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" || file.mimetype=="application/vnd.ms-excel") 
        {
            cb(null, true);
        }else
        {
            cb(null,false);
            return cb(new Error("only allows .xls,xlsx"));
             //return cb.status(400).json({message:"only allows .xls,xlsx"});
        }
    },
    limits:
    {
        fileSize: 5 * 1024 * 1024,  
    }

})

module.exports=upload;