import express from 'express'
import { mockApi, getDealsByStatusWon } from  './controllers/pipeDriveController'

const routes = express.Router()

routes.get('/mock', mockApi)
routes.get('/won', getDealsByStatusWon)

export default routes
