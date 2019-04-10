import { h } from "hyperapp"
import GraphLine from '../graphs/GraphLine.js'


const BlockLine = ({title,value,currency,change,fn}) => (
  <p>
    <analyseBlock>
      <blockdown></blockdown>
      <blocktitle>{title}</blocktitle>
      <blockvalue>{value}</blockvalue>
      <blockcurrency>{currency}</blockcurrency>
      <blockchange>{change}</blockchange>
      <graph oncreate={GraphLine()}></graph>
    </analyseBlock>
  </p>
)


export default BlockLine
