import { Profile } from '../models/profile.js'
import {v2 as cloudinary } from 'cloudinary'

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

function update(req, res) {
  if (req.body.photo === 'undefined' || !req.files['photo']) {
    delete req.body['photo']
    Profile.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(profile => {
        res.status(201).json(profile)
      })
    
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
  } else {
    const imageFile = req.files.photo.path
    console.log(imageFile)
    console.log(req.body)
    cloudinary.uploader.upload(imageFile, {tags: `${req.body.name}`})
    .then(image => {
      console.log(image.url)
      req.body.photo = image.url
      Profile.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(profile => {
          console.log('Profile: !!!!!', profile)
          res.status(201).json(profile)
        })
      })
      .catch(err => {
        console.log(err)
        res.status(500).json(err)
      })
    }
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

function addBoardGame(req, res) {
  Profile.findById(req.user.profile)
  .then(profile => {
    profile.boardGame.push(req.body)
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

function addMovie(req, res) {
  Profile.findById(req.user.profile)
  .then(profile => {
    profile.movie.push(req.body)
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
  update,
  addVideoGame,
  addBoardGame,
  addMovie
}
