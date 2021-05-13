import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/wetube", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const handdleOpen = () => console.log("✅ Connected to DB");
const handdleError = (error) => console.log("❌ DB Error", error);

db.on("error", handdleError);
db.once("open", handdleOpen);
