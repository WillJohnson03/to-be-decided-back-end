import axios from 'axios'
import { response } from 'express'

const baseUrl = 'https://api.themoviedb.org'

function getMovie(req, res) {
  axios.get(`${baseUrl}/3/search/movie?api_key=${process.env.MV_API_KEY}&language=en-US&query=${req.params.name}&page=1&include_adult=false`)
  .then(response => {
    res.json(response.data)
  })
}


export {
  getMovie,
}