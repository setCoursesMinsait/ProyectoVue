//https://vue-banco-42d51-default-rtdb.firebaseio.com

import axios from "axios"

const vueApi = axios.create({
  baseURL: 'https://vue-banco-42d51-default-rtdb.firebaseio.com'
})

export default vueApi