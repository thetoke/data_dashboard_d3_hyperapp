import { h } from "hyperapp"
import GraphBarGrouped from '../graphs/GraphBarGrouped.js'


const BlockBarGrouped = ({apiurl,transform,title,value,currency,change,fn}) => (
  <p>
    <analyseBlock>
      <blockdown></blockdown>
      <blocktitle>{title}</blocktitle>
      <blockvalue>{value}</blockvalue>
      <blockcurrency>{currency}</blockcurrency>
      <blockchange>{change}</blockchange>
      <graphs oncreate={GraphBarGrouped(apiurl,transform,title)}></graphs>
    </analyseBlock>
  </p>
)


export default BlockBarGrouped
