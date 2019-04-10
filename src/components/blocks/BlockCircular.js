import { h } from "hyperapp"
import GraphCircular from '../graphs/GraphCircular.js'
import GraphDestroy from '../graphs/GraphDestroy.js'

const BlockCircular = ({title,overall,spent,labeloverall,labelspent,change,apiurl,transform}) => (
  <p>
    <circularBlock>
      <blocktitle>{title}</blocktitle>
      <blockoverall>{overall}</blockoverall>
      <blockspent>{spent}</blockspent>
      <blocklabeloverall>{labeloverall}</blocklabeloverall>
      <blocklabelspent>{labelspent}</blocklabelspent>
      <graph oncreate={GraphCircular(apiurl,transform,title)} onremove={GraphDestroy}></graph>
    </circularBlock>
  </p>
)


export default BlockCircular
