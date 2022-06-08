import axios from 'axios'

interface IConfigAxios {
  baseURL: string
  timeout: number
  headers: {
    'Content-Type': string
    accept: string
    Authorization?: string
  }
}

const axiosConfig = (cookie?: string) => {
  const config : IConfigAxios = {
    baseURL: 'http://localhost:8090',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json'
    }
  }
  if (cookie) {
    config.headers.Authorization = `Bearer ${cookie}`
  }

  return config
}

export const authorizedApi = (cookie: string) => axios.create(axiosConfig(cookie))
export const unauthorizedApi = () => axios.create(axiosConfig())
