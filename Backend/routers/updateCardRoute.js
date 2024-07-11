import express from "express";

import { updateCard } from "../controller/updateCrad.js";

const updateCardRoute = express.Router()

updateCardRoute.post('/updatecard', updateCard)

export default updateCardRoute;