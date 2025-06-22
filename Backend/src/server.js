import express from "express";
import notesRoutes from "../src/routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 5001

connectDB();


app.use("/api/notes", notesRoutes);

app.listen(PORT, () =>{
    console.log("Server started on PORT:", PORT);
});

// qANmxkXVoBzVjTlN

//mongodb+srv://samarthmathur199:qANmxkXVoBzVjTlN@cluster0.d4wcqiw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0