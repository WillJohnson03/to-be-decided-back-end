import { Squad } from "../models/squad.js"
import {v2 as cloudinary} from 'cloudinary'

function index(req, res) {
  Squad.find({})
  .populate('creator')
  .then(squads => res.json(squads))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function show (req, res){
  Squad.findById(req.params.id)
  .populate('creator')
  .then(squad => res.json(squad))
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  })
}

function create(req, res) {
  req.body.creator = req.user.profile
  req.body.squadMembers = req.user.profile
  if (req.body.avatar === 'undefined' || !req.files['avatar']) {
    delete req.body['avatar']
    Squad.create(req.body)
    .then(squad => {
      squad.populate('creator')
      .then(populatedSquad => {
        populatedSquad.populate('squadMembers')
          .then(fullPopulatedSquad => {
            res.status(201).json(fullPopulatedSquad)
          })
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
  } else {
    const imageFile = req.files.avatar.path
    cloudinary.uploader.upload(imageFile, {tags: `${req.body.name}`})
    .then(image => {
      req.body.avatar = image.url
      Squad.create(req.body)
      .then(squad => {
        squad.populate('creator')
        .then(populatedSquad => {
          populatedSquad.populate('squadMembers')
            .then(fullPopulatedSquad => {
              res.status(201).json(fullPopulatedSquad)
            })
        })
      })
      .catch(err => {
        console.log(err)
        res.status(500).json(err)
      })
    })
  }
}

function update(req, res) {
  if (req.body.avatar === 'undefined' || !req.files['avatar']) {
    delete req.body['avatar']
    Squad.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(squad => {
      squad.populate('creator')
      .then(populatedSquad => {
        res.status(201).json(populatedSquad)
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
  } else {
    const imageFile = req.files.avatar.path
    cloudinary.uploader.upload(imageFile, {tags: `${req.body.name}`})
    .then(image => {
      console.log(image)
      req.body.avatar = image.url
      Squad.findByIdAndUpdate(req.params.id, req.body, {new: true})
      .then(squad => {
        squad.populate('creator')
        .then(populatedSquad => {
          populatedSquad.populate('squadMembers')
            .then(fullPopulatedSquad => {
              res.status(201).json(fullPopulatedSquad)
            })
        })
      })
      .catch(err => {
        console.log(err)
        res.status(500).json(err)
      })
    })
  }
}

function deleteSquad(req, res) {
  Squad.findByIdAndDelete(req.params.id)
  .then(squad => res.json(squad))
  .catch(err => res.json(err))
}

function addUser(req, res) {
  
}
export {
  index,
  show,
  create,
  deleteSquad as delete,
  update,
  addUser
}