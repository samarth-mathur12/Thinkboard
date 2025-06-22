import express from "express";

const router = express.Router();


router.get("/", (req, res)=>{
    res.status(200).send("you got fetched notes");
});

router.post("", (req, res)=>{
    res.status(201).json({message : "post created successfully!"});
});

router.put("/:id", (req, res)=>{
    res.status(201).json({message: "Post updated successfully !"});
});

router.delete("/:id", (req, res)=>{
    res.status(201).json({message: "Post deleted successfully !"});
});



export default router;

