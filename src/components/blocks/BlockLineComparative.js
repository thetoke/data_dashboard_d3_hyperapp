import { h } from "hyperapp"
import GraphLineComparative from '../graphs/GraphLineComparative.js'


const BlockLineComparative = ({title,value,currency,change,fn}) => (
  <p>
    <analyseBlock>
      <blockdown></blockdown>
      <blocktitle>{title}</blocktitle>
      <blockvalue>{value}</blockvalue>
      <blockcurrency>{currency}</blockcurrency>
      <blockchange>{change}</blockchange>
      <graph oncreate={GraphLineComparative()}></graph>
    </analyseBlock>
  </p>
)


export default BlockLineComparative
