import { h } from "hyperapp"


const BlockList = ({title,list}) => (
  <p>
    <listBlock>
      <blocktitle>{title}</blocktitle>
        <listWrapper>
        { list.map(item => (
          <listItem>
            <listCircle></listCircle>
            <listCircleNumber></listCircleNumber>
            <listItems>
              <listLine><listTitle>{item.title}</listTitle><listTitleValue>{item.titlevalue}</listTitleValue></listLine>
              <listLine><listSubtitle>{item.subtitle}</listSubtitle><listSubtitleValue>{item.subtitlevalue}</listSubtitleValue></listLine>
            </listItems>
          </listItem>
        )) }
        </listWrapper>
    </listBlock>
  </p>
)


export default BlockList
