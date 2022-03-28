import { BoardGame } from '../models/board-game.js'
import axios from 'axios'
import { response } from 'express'

const BASE_URL = 'https://api.boardgameatlas.com/api'

function getBoardGame(req, res) {
  axios.get(`${BASE_URL}/search?name=${req.params.name}&client_id=${process.env.BG_CLIENT_ID}`)
  .then(apiResponse => {
    res.json(apiResponse.data)
  })
}

export {
  getBoardGame
}