import mongoose from 'mongoose'


const videogameSchema = new mongoose.Schema({
  name: {type: String, required: true},
  // multiplayer: Boolean,
  // videoGameReviews: { type: mongoose.Schema.Types.ObjectId, ref: 'Review' }
})

const profileSchema = new mongoose.Schema({
  email: {type: String, required: true, lowercase: true, unique: true},
  name: String,
  videoGame: [videogameSchema]
},{
    timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile,
}
