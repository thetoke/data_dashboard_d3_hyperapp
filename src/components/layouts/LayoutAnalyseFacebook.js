import { h } from "hyperapp"
import { LANGUAGE_DE } from '../../language/DE.js'
import NavigationBar from '../navigation/NavigationBar.js'
import SubNavigationBar from '../navigation/SubNavigationBar.js'
import BlockBar from '../blocks/BlockBar.js'
import BlockLine from '../blocks/BlockLine.js'
import BlockLineMultiple from '../blocks/BlockLineMultiple.js'
import BlockLineComparative from '../blocks/BlockLineComparative.js'
import BlockBarGrouped from '../blocks/BlockBarGrouped.js'


const LayoutAnalyseFacebook = (state, actions) =>

        h("wrapper", {}, [
        h(NavigationBar),
        h(SubNavigationBar),
        h("Blockwrapper", {}, [
        h("header", {}, LANGUAGE_DE.layout.title.analysefacebook ),
        h("description", {}, LANGUAGE_DE.layout.description.analysefacebook ),
        h("Blockgroupline", {}, [
          <blockheader>AWARENESS</blockheader>,
          <BlockBarGrouped
              transform="TransformAwareness"
              title="REACH"
              value="0,091"
              currency="% Percent"
              change="-6,7"
              fn={actions.chg_title}
          />,
          <BlockBarGrouped
              transform="TransformAwareness"
              title="CPM"
              value="0,091"
              currency="% Percent"
              change="-6,7"
              fn={actions.chg_title}
          />,
        ]),
        h("Blockgroupline", {}, [
          <blockheader>CONSIDERATION / ENGAGEMENT</blockheader>,
          <BlockBarGrouped
              transform="TransformAwareness"
              title="SHARES"
              value="0,091"
              currency="% Percent"
              change="-6,7"
              fn={actions.chg_title}
          />,
          <BlockBarGrouped
              transform="TransformAwareness"
              title="COMMENTS"
              value="0,091"
              currency="% Percent"
              change="-6,7"
              fn={actions.chg_title}
          />,
          <BlockBarGrouped
              transform="TransformAwareness"
              title="LIKES"
              value="0,091"
              currency="% Percent"
              change="-6,7"
              fn={actions.chg_title}
          />,
        ]),
        h("Blockgroupline", {}, [
          <blockheader>ACQISITION / CONVERSION</blockheader>,
          <BlockBarGrouped
              apiurl=""
              transform="TransformAwareness"
              title="CPC"
              value="0,091"
              currency="% Percent"
              change="-6,7"
              fn={actions.chg_title}
          />,
          <BlockBarGrouped
              apiurl=""
              transform="TransformAwareness"
              title="CTR"
              value="0,091"
              currency="% Percent"
              change="-6,7"
              fn={actions.chg_title}
          />,
          <BlockBarGrouped
              apiurl=""
              transform="TransformAwareness"
              title="CONVERSIONS"
              value="0,091"
              currency="% Percent"
              change="-6,7"
              fn={actions.chg_title}
          />,
        ]),
        ]),
        h("split", {}, [
          h("div", {},"")
        ])
      ])


export default LayoutAnalyseFacebook
