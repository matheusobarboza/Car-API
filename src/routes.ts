import { Router } from 'express'
import CarController from './controllers/CarController'

const routes = Router()

routes.get('/cars', CarController.index)
routes.get('/cars/:id', CarController.findById)
routes.post('/cars/', CarController.store)
routes.put('/cars/:id', CarController.update)
routes.delete('/cars/:id', CarController.delete)

export default routes
