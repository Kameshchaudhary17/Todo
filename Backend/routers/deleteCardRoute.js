import express from 'express';

import { deleteCard } from '../controller/deleteCard.js';

const deleteCardRoute = express.Router()

deleteCardRoute.delete('/deletecard/:id', deleteCard)

export default deleteCardRoute;