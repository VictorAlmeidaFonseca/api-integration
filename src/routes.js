import express from 'express'
import { mockApi } from  './controllers/pipeDriveController'

const routes = express.Router()

routes.get('/mock', mockApi)

export { routes }
