import axios from 'axios'
import { loadProgressBar } from 'axios-progress-bar'

loadProgressBar()
axios.defaults.baseURL = process.env.API_HOST
// axios.defaults.baseURL = 'http://localhost:3001'
window.axios = axios
