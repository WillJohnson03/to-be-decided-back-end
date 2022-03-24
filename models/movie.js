import mongoose from 'mongoose'

const Schema = mongoose.Schema

const movieSchema = new Schema({
  title: String,
  overview: String,

})

const Movie = mongoose.model('Model', movieSchema)

export { 
  Movie 
}