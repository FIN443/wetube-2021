import mongoose from "mongoose";

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const db = mongoose.connection;

const handdleOpen = () => console.log("✅ Connected to DB");
const handdleError = (error) => console.log("❌ DB Error", error);

db.on("error", handdleError);
db.once("open", handdleOpen);
