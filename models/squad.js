import mongoose from 'mongoose'

const Schema = mongoose.Schema

const squadSchema = new Schema({
  name: {type: String, required: true},
  squadMembers: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }
},{
  timestamps: true
})

const Squad = mongoose.model('Squad', squadSchema)

export {
  Squad
}