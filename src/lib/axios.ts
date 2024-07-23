import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3333',
})

export const vercelApi = axios.create({
  baseURL: 'https://api.vercel.com',
})