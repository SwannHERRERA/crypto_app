import axios from 'axios'

export default {
  index(search) {
    return axios.get('user', {
      params: {
        search
      }
    })
  },
  get(userId) {
    return axios.get(`api/user/${userId}`)
  },
  getAll() {
    return axios.get('api/user/listing')
  },
  post(user) {
    return axios.post('api/user', user)
  },
  put(user) {
    return axios.put(`api/user/${user.id}`, user)
  }
}
