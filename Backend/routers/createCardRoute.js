import express from 'express'

import { createCard } from '../controller/createCard.js'

const createCardRoute = express.Router()

createCardRoute.post('/createcard',createCard)

export default createCardRoute;