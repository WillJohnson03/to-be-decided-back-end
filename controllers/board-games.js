import { BoardGame } from '../models/board-game.js'
import axios from 'axios'
import { response } from 'express'

const baseBoardGameUrl = 'https://api.boardgameatlas.com/api'

function index(req, res) {
  axios.get(`${baseBoardGameUrl}/search?name=${req.params.name}&client_id=${process.env.BG_CLIENT_ID}&fuzzy_match=true`)
  .then(response => {
    res.json(response.data)
  })
}

export {
  index,
}