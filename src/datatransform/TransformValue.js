import { h } from "hyperapp"
import * as d3 from 'd3'
import Log from "../utils/Log.js"


/**
 * Data Transformation Class / Value
 * Gets Raw API input and transformes it into D3 objects
 *
 * @param object|number|string     $value   raw API response
 *
 * @return object with D3 ready data
 */


const TransformValue = (response) => {

  try {

  // Logging the response
  Log('API', '☻ API RESPONSE ➜', response)

  // Data Transformation
  return response

  }
  catch (err) {}

}


export default TransformValue
