import db from './db.js'

export const createCard = (req,res)=>{
    const sql = "INSERT into card (`title`, `description`) value (?, ?)";

    const value = req.body

    db.query(sql,[value.title, value.description],(err,result)=>{
        if(err) return res.status(500).send(err);
        return res.status(200).send({message: "value inserted", result})
    })
}