import axios from 'axios'
import App from './App.vue'
import router from './router'
const http =axios.create({
  baseURL:'http://localhost:3000/admin/api'
})

export default http