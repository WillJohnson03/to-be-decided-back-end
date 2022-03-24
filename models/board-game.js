import mongoose from 'mongoose'

const Schema = mongoose.Schema

const boardGameSchema = new Schema({
  name: String,
  min_players: Number,
  max_players: Number,
  descriptions: String,
  image_url: String,
})

const BoardGame = mongoose.model('BoardGame', boardGameSchema)

export { BoardGame } 