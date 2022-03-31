import axios from "axios"
import { response } from "express"

const baseUrl = 'https://api.rawg.io/api'

function getVideoGame(req, res) {
  axios.get(`${baseUrl}/games?key=${process.env.VG_KEY}&search=${req.params.name}`)
  .then(response => {
    res.json(response.data)
  })
}

export {
  getVideoGame,
}