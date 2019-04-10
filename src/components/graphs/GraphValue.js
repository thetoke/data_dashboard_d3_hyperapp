import { h } from "hyperapp";
import ResizeManager from "../../service/ResizeManager.js"
import Log from "../../utils/Log.js"
import transforms from "../../datatransform/*.js"
import request from "../../service/Request.js"


const GraphValue=(apiurl,transform,title)=>el=>{

  function recivedData( response ) {

    // Logging the response
    Log('INFO', 'SUMMARY ➜ '+ title +' ☻ DATA TRANSFORM', response)

    if(response.data.amount) el.parentElement.querySelector("blockvalue").innerText = response.data.amount.toLocaleString('de-DE')
    if(response.data.change) el.parentElement.querySelector("blockchange").innerText = response.data.change.toLocaleString('de-DE')
  }

  // Ask API for data, Transform data, call response
  if(transform) { let quote = request.getQuery(apiurl).then(transforms[transform].default).then(recivedData) }

}

export default GraphValue
