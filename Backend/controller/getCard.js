import db from './db.js'

export const getCard = (req, res)=>{
    const sql = "SELECT * from card"

    db.query(sql,(err,result)=>{
        if(err) return res.status(500).send(err);
        return res.status(200).send({message:"get details", result})
    });
};
