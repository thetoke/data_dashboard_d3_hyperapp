import { h } from "hyperapp"
import request from "../../service/Request.js"
import Log from "../../utils/Log.js"
import GraphValue from '../graphs/GraphValue.js'


const BlockValue = ({apiurl,transform,title,value,currency,change,fn}) => (
  <p>
    <block>
      <blockdown></blockdown>
      <blocktitle>{title}</blocktitle>
      <blockvalue>{value}</blockvalue>
      <blockcurrency>{currency}</blockcurrency>
      <blockchange>{change}</blockchange>
      <graph oncreate={GraphValue(apiurl,transform,title)}></graph>
    </block>
  </p>
)


export default BlockValue
