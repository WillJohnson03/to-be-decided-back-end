import mongoose from 'mongoose'

const Schema = mongoose.Schema

const videogameSchema = new Schema({
  name: {type: String, required: true},
  multiplayer: Boolean,
  videoGameReviews: { type: mongoose.Schema.Types.ObjectId, ref: 'Review' }
})

const VideoGame = mongoose.model('Videogame', videogameSchema)

export {
  VideoGame
}