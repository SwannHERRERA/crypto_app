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
    return axios.get(`api/users/${userId}`)
  },
  getAll() {
    return axios.get('api/users/listing')
  },
  post(user) {
    return axios.post('api/users', user)
  },
  put(user) {
    return axios.put(`api/users/${user.id}`, user)
  }
}
