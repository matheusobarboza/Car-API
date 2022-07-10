import { Schema, model, Document } from 'mongoose'

interface CarInterface extends Document {
  marca: string,
  modelo: string,
  versao: string,
  ano: number,
  quilometragem: string,
  cambio: string,
  price: string,
}

const CarSchema = new Schema({
  // _id: Schema.Types.ObjectId,
  marca: String,
  modelo: String,
  versao: String,
  ano: Number,
  quilometragem: Number,
  cambio: String,
  price: Number
}, {
  timestamps: true
})

export default model<CarInterface>('Car', CarSchema)
