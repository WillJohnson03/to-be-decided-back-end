import { Squad } from "../models/squad.js"
import {v2 as cloudinary} from 'cloudinary'

function index(req, res) {
  console.log('yeetus')
}

function show(req, res) {
  console.log('hello')
}

function create(req, res) {
  console.log(req.params)
  req.body.creator = req.user.profile
  if (req.body.photo === 'undefined' || !req.files['avatar']) {
    delete req.body['avatar']
    Squad.create(req.body)
    .then(squad => {
      squad.populate('creator')
      .then(populatedSquad =>{
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
      req.body.avatar = image.url
      Squad.create(req.body)
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
    })
  }
}

export {
  index,
  show,
  create
}