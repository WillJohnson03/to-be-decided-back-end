import mongoose from 'mongoose'

const Schema = mongoose.Schema

const boardGameSchema = new Schema({
  name: {type: String, required: true},
  multiplayer: Boolean
})

const BoardGame = mongoose.model('BoardGame', boardGameSchema)

export { BoardGame } 