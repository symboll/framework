import axios from "./index";


export const isLoginApi = () => {
  return axios.request({
    method: "get",
    url: 'login-test'
  })
}