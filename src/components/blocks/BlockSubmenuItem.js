import { h } from "hyperapp"


const BlockSubmenuItem = ({title,icon}) => (
    <subnavBlock>
      <submenuTitle>{title}</submenuTitle>
      <submenuIcon class={icon}></submenuIcon>
    </subnavBlock>
)


export default BlockSubmenuItem
