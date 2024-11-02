const mon = require("mongoose");

require("dotenv").config();

exports.connect = () => {
    mon
        .connect(process.env.MONGO_URI, {
            // useNewParser: true,
            // useUnifiedTopology: true,
        })
        .then(() => {
            console.log("Database connection Successful");
        })
        .catch((e) => {
            console.error(e);
        });
};