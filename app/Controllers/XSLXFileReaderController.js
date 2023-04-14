const XLSX=require("xlsx");
exports.readXLSFile=(req,res)=>
{
    const book=XLSX.read(req.file.buffer);
    const sheetexcel=book.SheetNames;
    const sheet=sheetexcel[0];
    const dataexcel=XLSX.utils.sheet_to_json(book.Sheets[sheet])

    //let sheetexcel=book.Sheets[book.SheetNames[1]]
    console.log(dataexcel);
}