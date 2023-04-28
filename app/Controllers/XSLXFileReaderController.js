const { reset } = require("nodemon");
const XLSX = require("xlsx");
const axios = require("axios").default;
const URL = "http://localhost:4000/Pedrops/v1/departments";
const URLuser = "http://localhost:4000/Pedrops/v1/users/signup";

exports.readXLSFile = (req, res) => {
    if (!req.file) {
        res.status(400).json({ message: "file needed" })
    }
    const book = XLSX.read(req.file.buffer);
    const sheetexcel = book.SheetNames;
    const sheet = sheetexcel[0];
    const dataexcel = XLSX.utils.sheet_to_json(book.Sheets[sheet])


    for (let element in dataexcel) {
        if (dataexcel[element].title) {
            const response = axios.post(URL, dataexcel[element]);
        } else if (dataexcel[element].userName) {
            const response = axios.post(URLuser, dataexcel[element]);
        }
        if (!dataexcel[element].title && !dataexcel[element].userName) {
            res.status(422).json({ success: false, message: "invalid excel" });
        }
    }
    return res.status(200).json({ success: true, message: "data inserted correctly" });


    //for...of
    /** 
        for (let element of dataexcel) {
            if (element.title) {
                const response = axios.post(URL, element);
            } else if (element.userName) {
                const response = axios.post(URLuser, element);
            }
            if (!element.title && !element.userName) {
                res.status(422).json({ success: false, message: "invalid excel" });
            }
        }
        return res.status(200).json({ success: true, message: "data inserted correctly" });
    */

    //foreach
    /** 
    dataexcel.forEach(function (data) {

        if (data.title) {
            const response = axios.post(URL, data)
        } else if (data.userName) {
            const response = axios.post(URLuser, data)
        }
        if (!data.title && !data.userName) {
            res.status(422).json({ succes: false, message: "invalid excel" });
        }
    });
    res.status(200).json({ success: true, message: "data inserted correctly" });
   */
}


