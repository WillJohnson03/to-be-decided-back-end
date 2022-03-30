import mongoose from 'mongoose'

const Schema = mongoose.Schema



const Movie = mongoose.model('Model', movieSchema)

export { 
  Movie 
}