import mongoose from 'mongoose'


const videogameSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: String,
  background_image: String,
  released: String,
}, {
  timestamps: true
})

const movieSchema = new mongoose.Schema({
  title: String,
  poster_path: String,
  overview: String,
  release_date: String,
}, {
  timestamps: true
})

const boardGameSchema = new mongoose.Schema({
  name: String,
  description: String,
  image_url: String,
  min_players: Number,
  max_players: Number,
  min_playtime: Number,
  max_playtime: Number,
  rules_url: String,
  year_published: String,
}, {
  timestamps: true
})

const profileSchema = new mongoose.Schema({
  email: { type: String, required: true, lowercase: true, unique: true },
  name: String,
  photo: {type: String},
  videoGame: [videogameSchema],
  movie: [movieSchema],
  boardGame: [boardGameSchema]
}, {
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile,
}
