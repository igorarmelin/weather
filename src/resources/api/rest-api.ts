import axios from 'axios'

const restApi = (baseURL: string) => {
  const axiosApi = axios.create({
    baseURL
  })

  return {
    get: async <T>(url: string, params?: any) => {
      return axiosApi
        .get<T>(url, { params })
        .then((resp) => {
          return resp.data
        })
        .catch((error) => {
          throw error
        })
    }
  }
}

export default restApi
