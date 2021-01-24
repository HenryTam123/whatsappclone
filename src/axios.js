import axios from 'axios'

const instance = axios.create({
    baseURL:"https://wtsappmern.herokuapp.com",
})

export default instance