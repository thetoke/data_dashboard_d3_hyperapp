import { h } from "hyperapp"
import { LANGUAGE_DE } from '../../language/DE.js'
import NavigationBar from '../navigation/NavigationBar.js'
import SubNavigationBar from '../navigation/SubNavigationBar.js'
import BlockBar from '../blocks/BlockBar.js'
import BlockLine from '../blocks/BlockLine.js'
import BlockLineMultiple from '../blocks/BlockLineMultiple.js'
import BlockLineComparative from '../blocks/BlockLineComparative.js'
import BlockBarGrouped from '../blocks/BlockBarGrouped.js'


const LayoutAnalyseInstagram = (state, actions) =>

        h("wrapper", {}, [
          h(NavigationBar),
          h(SubNavigationBar),
          h("Blockwrapper", {}, [
          h("header", {}, LANGUAGE_DE.layout.title.analyseinstagram ),
          h("description", {}, LANGUAGE_DE.layout.description.analyseinstagram ),
          h("Blockgroupline", {}, [
            <blockheader>AWARENESS</blockheader>,
            <BlockBarGrouped
                transform="TransformAwareness"
                title="IMPRESSIONS"
                value="0,091"
                currency="% Percent"
                change="-6,7"
                fn={actions.chg_title}
            />,
            <BlockLineComparative
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
            <BlockLineComparative
                title="CPC"
                value="0,091"
                currency="% Percent"
                change="-6,7"
                fn={actions.chg_title}
            />,
            <BlockBar
                title="CTR"
                value="0,091"
                currency="% Percent"
                change="-6,7"
                fn={actions.chg_title}
            />,
            <BlockBarGrouped
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


export default LayoutAnalyseInstagram
