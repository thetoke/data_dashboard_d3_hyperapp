import { h } from "hyperapp"
import { LANGUAGE_DE } from '../../language/DE.js'
import NavigationBar from '../navigation/NavigationBar.js'
import BlockBarGrouped from '../blocks/BlockBarGrouped.js'
import BlockLine from '../blocks/BlockLine.js'
import BlockCircular from '../blocks/BlockCircular.js'
import BlockValue from '../blocks/BlockValue.js'
import BlockList from '../blocks/BlockList.js'


const LayoutSummary = (state, actions) =>

        h("wrapper", {}, [
        h(NavigationBar),
        h("Blockwrapper", {}, [
        h("header", {}, LANGUAGE_DE.layout.title.summary ),
        h("description", {}, LANGUAGE_DE.layout.description.summary ),
        h("Blockgroup", {}, [
          <BlockBarGrouped
              apiurl=""
              transform="TransformAwareness"
              title="OVERALL AWARENESS"
              value="0,091"
              currency="%"
              change="-6,7"
              fn={actions.chg_title}
          />,
        ]),
        h("Blockgroup", {}, [
          <BlockBarGrouped
              apiurl=""
              transform="TransformAwareness"
              title="WEBSITE CONVERSTIONS"
              value="0,091"
              currency="%"
              change="-6,7"
              fn={actions.chg_title}
          />,
        ]),
        h("Blockgroup", {}, [
          <BlockBarGrouped
              apiurl=""
              transform="TransformAwareness"
              title="ENGAGEMENT"
              value="0,091"
              currency="%"
              change="-6,7"
              fn={actions.chg_title}
          />,
        ]),
        h("Blockgroup", {}, [
          <BlockList
              title="WEBSITE KPIs"
              list={[{title:'This will always work', titlevalue:"897547", subtitle:"The best way to make the border", subtitlevalue:"548754"},
                     {title:'This will always work', titlevalue:"897547", subtitle:"The best way to make the border", subtitlevalue:"548754"},
                     {title:'This will always work', titlevalue:"897547", subtitle:"The best way to make the border", subtitlevalue:"548754"}]}
          />,
        ]),
        h("Blockgroup", {}, [
          <BlockCircular
              apiurl=""
              transform="TransformMediaBudget"
              title="MEDIA BUDGET"
              overall="30,000"
              spent="17,539"
              labeloverall="Overall"
              labelspent="Spent"
              change="-6,7"
          />,
        ]),
        h("Blockgroup", {}, [
          <BlockValue
              apiurl=""
              transform="TransformValue"
              title="REACH"
              value="0,091"
              currency="Views"
              change="-6,7"
              fn={actions.chg_title}
          />
        ]),
        h("Blockgroup", {}, [
          <BlockValue
              apiurl=""
              transform="TransformValue"
              title="COST PER RESULT"
              value="0,091"
              currency="Cent / Result"
              change="-6,7"
              fn={actions.chg_title}
          />
        ]),
        h("Blockgroup", {}, [
          <BlockValue
              apiurl=""
              transform="TransformValue"
              title="SUCCESS RATE"
              value="0,091"
              currency="Percent"
              change="-6,7"
              fn={actions.chg_title}
          />
        ]),
        ]),
        h("split", {}, [
          h("div", {},"")
        ])
      ])


export default LayoutSummary
