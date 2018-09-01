'use strict'

// Packages
import axios from 'axios'

// Config
import config from '../config'

const api = axios.create({
  baseURL: config.api.url,
  headers: {
    Accept: 'application/json'
  }
})

api.interceptors.request.use(cfg => {
  cfg.headers.authorization = config.api.token

  return cfg
})

api.interceptors.response.use(
  response => {
    if (response.data) {
      return response.data
    }

    return response
  },
  error => {
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data.error)
    }

    return Promise.reject(error)
  }
)

export default api
