import { BoardGame } from '../models/board-game.js'
import axios from 'axios'
import { response } from 'express'

const baseUrl = 'https://api.themoviedb.org'

function index(req, res) {
  axios.get(`${baseBoardGameUrl}https://api.themoviedb.org${process.env.MV_API_KEY}`)
  .then(response => {
    console.log(response.data)
    res.json(response.data)
  })
}

export {
  index,
}