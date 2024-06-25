import axios from 'axios'
import qs from 'query-string'

import { API_URL } from './common'

const axiosService = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  paramsSerializer: (params) =>
    qs.stringify(params, {
      skipEmptyString: true,
      skipNull: true,
      encode: true,
    }),
})

axiosService.interceptors.response.use((response) => {
  if (response.data) return response.data

  return response
})

export default axiosService
