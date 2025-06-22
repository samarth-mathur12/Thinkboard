export function getAllNotes(res, req){
    res.status(200).send("you got fetched notes");
}

export function createNotes(res, req){
    res.status(201).json({message : "post created successfully!"});
}

export function updateNotes(res, req){
    res.status(201).json({message: "Post updated successfully !"});
}

export function deleteNotes(res, req){
    res.status(201).json({message: "Post deleted successfully !"});
}