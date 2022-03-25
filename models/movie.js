import mongoose from 'mongoose'

const Schema = mongoose.Schema

const movieSchema = new Schema({
  title: String,
  overview: String,
  movieReviews: { type: mongoose.Schema.Types.ObjectId, ref: 'Review' }
}, {
  timestamps: true
})

const Movie = mongoose.model('Model', movieSchema)

export { 
  Movie 
}