import express from "express";
import { getAllNotes, createNotes, deleteNotes, updateNotes } from "../controllers/notesController.js";

const router = express.Router();


router.get("/", getAllNotes);
router.post("", createNotes);
router.put("/:id", updateNotes);
router.delete("/:id", deleteNotes);



export default router;

