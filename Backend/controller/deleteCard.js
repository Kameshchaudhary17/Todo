import db from "./db.js";

export const deleteCard = (req,res)=>{

    const {id} = req.params;

    const sql = "DELETE from card WHERE id = ?";

    db.query(sql,id,(err,result)=>{
        if(err) return res.status(500).send(err);
        return res.status(200).send({message: "value deleted", result})
    })
};