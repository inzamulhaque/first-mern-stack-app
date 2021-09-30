const mongoose = require("mongoose");
const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser: true,
    // useCreatendex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
}).then(() => {
    console.log(`DB Connected`);
}).catch((err) => {
    console.log(`DB Not Connected: ${err}`);
});