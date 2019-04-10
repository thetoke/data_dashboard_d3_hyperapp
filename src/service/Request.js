import axios from 'axios'
import { API_SERVER_URL } from '../constants/Constants.js'
import Log from '../utils/Log.js'

/**
 * API Request Method
 *
 * @param string     $url          Second part of an URL
 *
 * @export getAll     Fetches whole
 * @export getQuery   Console Log with given input data
 */


const getRequest = url => {

  return axios.get(url, {
    //headers: {'Authorization': `Token token="XXXXXXXX"`}

  }).catch(

    err => {
      Log('ERROR', 'API ☻ ERROR', err)
    }

  )
}

export default {
  getAll: _ => getRequest(API_SERVER_URL),
  getQuery: query => getRequest(API_SERVER_URL + `${query}`)
}
