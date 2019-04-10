import { h } from "hyperapp"
import GraphLineMultiple from '../graphs/GraphLineMultiple.js'


const BlockLineMultiple = ({title,value,currency,change,fn}) => (
  <p>
    <analyseBlock>
      <blockdown></blockdown>
      <blocktitle>{title}</blocktitle>
      <blockvalue>{value}</blockvalue>
      <blockcurrency>{currency}</blockcurrency>
      <blockchange>{change}</blockchange>
      <graph oncreate={GraphLineMultiple()}></graph>
    </analyseBlock>
  </p>
)


export default BlockLineMultiple
