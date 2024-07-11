import db from "./db.js";

export const updateCard = (req,res)=>{
    
    const sql ="UPDATE card set title = ?, description = ? WHERE id = ?";
    const value = req.body
    console.log(value);

    db.query(sql,[value.title, value.description, value.id],(err,result)=>{
        if(err) return res.status(500).send(err);
        return res.status(200).send({message: "Value Updated", result})
    })

}