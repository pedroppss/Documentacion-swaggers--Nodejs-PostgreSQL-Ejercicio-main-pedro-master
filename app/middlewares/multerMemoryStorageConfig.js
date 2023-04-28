const multer = require("multer");
const storage = multer.memoryStorage();
const memory = multer
    ({
        storage: storage,
        fileFilter: function (req, file, cb) {

            if (file.mimetype == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" || file.mimetype == "application/vnd.ms-excel") {
                cb(null, true);
                cb("success message");
            } else {
                cb(null, false);
                return cb(new Error("only allows .xls,xlsx"));

            }
        },

    })

module.exports = memory;
