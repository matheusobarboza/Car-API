import { Request, Response } from 'express'

import Car from '../schemas/Car'

const CarController = {
  async index (req: Request, res: Response): Promise<Response> {
    const cars = await Car.find()
    return res.json(cars)
  },

  async findById (req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const car = await Car.findById(id)

    return res.json(car)
  },

  async store (req: Request, res: Response): Promise<Response> {
    const car = await Car.create(req.body)

    return res.json(car)
  },

  async update (req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const car = await Car.findByIdAndUpdate(id, req.body)

    return res.json(car)
  },

  async delete (req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const car = await Car.findByIdAndDelete(id)

    return res.json(car)
  }
}

export default CarController
