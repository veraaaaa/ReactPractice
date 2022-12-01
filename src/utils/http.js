import axios from 'axios'
// 这里接收一个对象方便传参
export const get = ({
  url
}) => {
  return axios({
    method: 'get',
    url
  })
  .then((result) => {
    return result.data
  })
  .catch((err) => {
    return err.message
  })
}