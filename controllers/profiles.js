import { Profile } from '../models/profile.js'
import { update } from './squads.js';

function index(req, res) {
  Profile.find({})
  .then(profiles => res.json(profiles))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function show (req, res){
  console.log(req.params.id);
  Profile.findById(req.params.id)
  .then(profile => res.json(profile))
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  })
}

function addVideoGame(req, res) {
  Profile.findById(req.user.profile)
  .then(profile => {
    profile.videoGame.push(req.body)
    profile.save()
    .then(updateProfile => {
      res.json(updateProfile)
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

export {
  index,
  show,
  addVideoGame
}
