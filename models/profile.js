import mongoose from 'mongoose'

const profileSchema = new mongoose.Schema({
  email: {type: String, required: true, lowercase: true, unique: true},
  name: String,
  boardGameColl: { type: mongoose.Schema.Types.ObjectId, ref: 'BoardGame' },
  movieColl: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
  squadMates: { type: mongoose.Schema.Types.ObjectId, ref: 'Squad' },
  videoGameColl: { type: mongoose.Schema.Types.ObjectId, ref: 'VideoGame' }
},{
    timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export {Profile}
