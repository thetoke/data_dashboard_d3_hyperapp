import { h } from "hyperapp"
import * as d3 from 'd3'
import Log from "../utils/Log.js"


/**
 * Data Transformation Class / Media Budget Module
 * Gets Raw API input and transformes it into D3 objects
 *
 * @param object|number|string     $value   raw API response
 *
 * @return object with D3 ready data
 */


const TransformMediaBudget = (response) => {

  try {
  // Logging the response
  Log('API', '☻ API RESPONSE ➜', response)

  // Data Transformation
  let tmp1=[]
  tmp1.push(response.data.sea.budget)
  tmp1.push(response.data.native.budget)
  tmp1.push(response.data.youtube.budget)
  tmp1.push(response.data.facebook.budget)

  let tmp2=[]
  tmp2.push(response.data.sea.spent)
  tmp2.push(response.data.sea.budget - response.data.sea.spent)
  tmp2.push(response.data.native.spent)
  tmp2.push(response.data.native.budget - response.data.native.spent)
  tmp2.push(response.data.youtube.spent)
  tmp2.push(response.data.youtube.budget - response.data.youtube.spent)
  tmp2.push(response.data.facebook.spent)
  tmp2.push(response.data.facebook.budget - response.data.facebook.spent)

  let tmp3=[]
  tmp3.push(response.data.overall.budget.toLocaleString('de-DE'))
  let spent = String(response.data.overall.spent).split('.')[0].toLocaleString('de-DE')
  spent = Number(Number(spent).toFixed(0)) //.toLocaleString().split(/\s/).join(',')
  tmp3.push(spent)

  var dataset = d3.range(4).map((d, i)=>{ return {"x": tmp1[i] } })
  var dataset2 = d3.range(8).map((d, i)=>{ return {"x": tmp2[i] } })
  var datasetInverted = d3.range(4).map((d, i)=>{ return {"x": tmp1[i].x } })
  var overall = tmp3

  return { dataset:dataset, dataset2:dataset2, datasetInverted:datasetInverted, overall:overall }

  } catch (err) {}

}


export default TransformMediaBudget
