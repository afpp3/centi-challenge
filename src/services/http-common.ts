import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.imgur.com/3',
  headers: {
    Authorization: `Client-ID ${import.meta.env.VITE_CLIENT_ID}`
  }
})
