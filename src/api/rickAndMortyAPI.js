import axios from "axios"

const rickandmortyApi = axios.create({
  baseURL: 'https://rickandmortyapi.com/api'
})

export default rickandmortyApi