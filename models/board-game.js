import mongoose from 'mongoose'

const Schema = mongoose.Schema



const BoardGame = mongoose.model('BoardGame', boardGameSchema)

export { 
  BoardGame 
} 