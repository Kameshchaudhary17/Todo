import express from 'express'

import { getCard } from '../controller/getCard.js'

const getCardRoute = express.Router()

getCardRoute.get('/getcard',getCard)

export default getCardRoute;