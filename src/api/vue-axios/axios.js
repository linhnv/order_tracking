import axios from 'axios'

const API_URL = process.env.API_URL

var instance = axios.create({
  baseURL: API_URL
})

export default instance
