let mongoose = require("mongoose");
let dbURI = "mongodb://localhost:27017/pawII-si5C"; //nama localhost dan nama database

mongoose.connect(dbURI, {
    //useNewUrlParser: true
});
mongoose.connection.on("connected",() => {
    console.log("Connected to MongoDB");
});
mongoose.connection.on("error", (error) => {
    console.log("Connection Error : " + error);
});
mongoose.connection.on("disconnected", (error) => {
    console.log("disconnected from MongoDB" );
});
