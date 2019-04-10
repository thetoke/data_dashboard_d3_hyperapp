import { h } from "hyperapp"
import GraphBar from '../graphs/GraphBar.js'


const BlockBar = ({title,value,currency,change,fn}) => (
  <p>
    <analyseBlock>
      <blockdown></blockdown>
      <blocktitle>{title}</blocktitle>
      <blockvalue>{value}</blockvalue>
      <blockcurrency>{currency}</blockcurrency>
      <blockchange>{change}</blockchange>
      <graph oncreate={GraphBar()}></graph>
    </analyseBlock>
  </p>
)


export default BlockBar
