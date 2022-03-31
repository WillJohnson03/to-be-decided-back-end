import mongoose from 'mongoose'

const Schema = mongoose.Schema

const squadSchema = new Schema({
  name: { type: String },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" },
  squadMembers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }],
  avatar: { type: String }
}, {
  timestamps: true
})

const Squad = mongoose.model('Squad', squadSchema)

export {
  Squad
}