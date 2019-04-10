import { h, app } from "hyperapp"
import * as d3 from 'd3'


const GraphDestroy=(id)=>el=>{
  d3.select(el).selectAll('svg').remove()
  el.remove()
  line.remove()

  console.log('DESTROY');
}


export default GraphDestroy
