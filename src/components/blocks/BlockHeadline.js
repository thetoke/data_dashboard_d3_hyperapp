import { h } from "hyperapp"


const BlockHeadline = ({title,icon}) => (
  <p>
    <headlineBlock>
      <headlineTitle>{title}</headlineTitle>
      <headlineIcon class={icon}></headlineIcon>
    </headlineBlock>
  </p>
)


export default BlockHeadline
