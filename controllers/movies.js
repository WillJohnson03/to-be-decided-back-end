import { BoardGame } from '../models/board-game.js'
import axios from 'axios'
import { response } from 'express'

const baseUrl = 'https://api.themoviedb.org'


// https://api.themoviedb.org/3/search/movie?api_key=974467c52e639e64c7b32f9a38b1c811&language=en-US&query=avenger&page=1&include_adult=false

function index(req, res) {
  req.params.title = req.param.name
  axios.get(`${baseUrl}/3/search/movie?api_key=${process.env.MV_API_KEY}&language=en-US&query=${req.params.title}&page=1&include_adult=false`)
  .then(response => {
    res.json(response.data)
  })
}

export {
  index,
}