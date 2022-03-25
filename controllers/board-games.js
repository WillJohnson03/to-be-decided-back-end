import { BoardGame } from '../models/board-game.js'
import axios from 'axios'
import { response } from 'express'

const baseBoardGameUrl = 'https://api.boardgameatlas.com/api'

function index(req, res) {
  axios.get(`${baseBoardGameUrl}/search?name=Catan&client_id=${process.env.CLIENT_ID}`)
  .then(response => {
    console.log(response.data)
    res.json(response.data)
  })
}

export {
  index,
}