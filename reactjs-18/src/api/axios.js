import axios from "axios"

const axiosClient = axios.create({
  baseURL: "https://nemo.com/",
})

export default axiosClient
