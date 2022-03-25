import { VideoGame } from "../models/video-game.js"
import axios from "axios"
import { response } from "express"

const baseUrl = 'https://api.rawg.io/api'

function index(req, res) {
  axios.get(`${baseUrl}/games?key=${process.env.VG_KEY}`)
  .then(response => {
    console.log(response.data)
    res.json(response.data)
  })
}

export {
  index,
}