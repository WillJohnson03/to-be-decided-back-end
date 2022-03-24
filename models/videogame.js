import mongoose from 'mongoose'

const Schema = mongoose.Schema

const videogameSchema = new Schema({
  name: {type: String, required: true},
  multiplayer: Boolean
})

const Videogame = mongoose.deleteModel('Videogame', videogameSchema)

export {
  Videogame
}