import { h } from "hyperapp"
import { LANGUAGE_DE } from '../../language/DE.js'
import NavigationBar from '../navigation/NavigationBar.js'
import BlockValue from '../blocks/BlockValue.js'
import BlockValueEmpty from '../blocks/BlockValueEmpty.js'
import BlockHeadline from '../blocks/BlockHeadline.js'


const Layout = (state, actions) =>

        h("wrapper", {}, [
        h(NavigationBar),
        h("Blockwrapper", {}, [
        h("header", {}, LANGUAGE_DE.layout.title.overview ),
        h("description", {}, LANGUAGE_DE.layout.description.overview ),
        h("Blockgroup", {}, [
          <BlockHeadline
              title="Facebook"
              icon="facebookIcon"
          />,
          <BlockValue
              apiurl=""
              transform="TransformValue"
              title="IMPRESSIONS"
              value="0,091"
              currency="Cent / Click"
              change="-6,7"
              fn={actions.chg_title}
          />,
          <BlockValue
              apiurl=""
              transform="TransformValue"
              title="INTERACTIONS"
              value="0,091"
              currency="Cent / Click"
              change="-6,7"
              fn={actions.chg_title}
          />,
          <BlockValue
              apiurl=""
              transform="TransformValue"
              title="CPC"
              value="0,091"
              currency="Cent / Click"
              change="-6,7"
              fn={actions.chg_title}
          />,
          <BlockValue
              apiurl=""
              transform="TransformValue"
              title="CTR"
              value="0,091"
              currency="Cent / Click"
              change="-6,7"
              fn={actions.chg_title}
          />,
          <BlockValue
              apiurl=""
              transform="TransformValue"
              title="CONVERTIONS"
              value="0,091"
              currency="Cent / Click"
              change="-6,7"
              fn={actions.chg_title}
          />
        ]),
        h("Blockgroup", {}, [
          <BlockHeadline
              title="YouTube"
              icon="youtubeIcon"
          />,
          <BlockValue
              apiurl=""
              transform="TransformValue"
              title="VIEWS"
              value="0,091"
              currency="Cent / Click"
              change="-6,7"
              fn={actions.chg_title}
          />,
          <BlockValue
              apiurl=""
              transform="TransformValue"
              title="VIEWRATE"
              value="0,091"
              currency="Cent / Click"
              change="-6,7"
              fn={actions.chg_title}
          />,
          <BlockValue
              apiurl=""
              transform="TransformValue"
              title="100% COMPLETE RATE"
              value="0,091"
              currency="Cent / Click"
              change="-6,7"
              fn={actions.chg_title}
          />,
          <BlockValue
              apiurl=""
              transform="TransformValue"
              title="CTR"
              value="0,091"
              currency="Cent / Click"
              change="-6,7"
              fn={actions.chg_title}
          />,
          <BlockValue
              apiurl=""
              transform="TransformValue"
              title="SUBSCRIBERS"
              value="0,091"
              currency="Cent / Click"
              change="-6,7"
              fn={actions.chg_title}
          />
        ]),
        h("Blockgroup", {}, [
          <BlockHeadline
              title="Instagram"
              icon="instagramIcon"
          />,
          <BlockValue
              apiurl=""
              transform="TransformValue"
              title="IMPRESSIONS"
              value="0,091"
              currency="Cent / Click"
              change="-6,7"
              fn={actions.chg_title}
          />,
          <BlockValue
              apiurl=""
              transform="TransformValue"
              title="INTERACTIONS"
              value="0,091"
              currency="Cent / Click"
              change="-6,7"
              fn={actions.chg_title}
          />,
          <BlockValue
              apiurl=""
              transform="TransformValue"
              title="CPC"
              value="0,091"
              currency="Cent / Click"
              change="-6,7"
              fn={actions.chg_title}
          />,
          <BlockValue
              apiurl=""
              transform="TransformValue"
              title="CTR"
              value="0,091"
              currency="Cent / Click"
              change="-6,7"
              fn={actions.chg_title}
          />,
          <BlockValue
              apiurl=""
              transform="TransformValue"
              title="CONVERSIONS"
              value="0,091"
              currency="Cent / Click"
              change="-6,7"
              fn={actions.chg_title}
          />
        ]),
        h("Blockgroup", {}, [
          <BlockHeadline
              title="SEA"
              icon="seaIcon"
          />,
          <BlockValue
              apiurl=""
              transform="TransformValue"
              title="IMPRESIONS"
              value="0,091"
              currency="Cent / Click"
              change="-6,7"
              fn={actions.chg_title}
          />,
          <BlockValueEmpty/>,
          <BlockValue
              apiurl=""
              transform="TransformValue"
              title="CPC"
              value="0,091"
              currency="Cent / Click"
              change="-6,7"
              fn={actions.chg_title}
          />,
          <BlockValue
              apiurl=""
              transform="TransformValue"
              title="CTR"
              value="0,091"
              currency="Cent / Click"
              change="-6,7"
              fn={actions.chg_title}
          />,
          <BlockValue
              apiurl=""
              transform="TransformValue"
              title="CONVERSIONS"
              value="0,091"
              currency="Cent / Click"
              change="-6,7"
              fn={actions.chg_title}
          />
        ]),
        h("Blockgroup", {}, [
          <BlockHeadline
              title="Native"
              icon="nativeIcon"
          />,
          <BlockValue
              apiurl=""
              transform="TransformValue"
              title="IMPRESIONS"
              value="0,091"
              currency="Cent / Click"
              change="-6,7"
              fn={actions.chg_title}
          />,
          <BlockValueEmpty/>,
          <BlockValue
              apiurl=""
              transform="TransformValue"
              title="CPC"
              value="0,091"
              currency="Cent / Click"
              change="-6,7"
              fn={actions.chg_title}
          />,
          <BlockValue
              apiurl=""
              transform="TransformValue"
              title="CTR"
              value="0,091"
              currency="Cent / Click"
              change="-6,7"
              fn={actions.chg_title}
          />,
          <BlockValue
              apiurl=""
              transform="TransformValue"
              title="CONVERSIONS"
              value="0,091"
              currency="Cent / Click"
              change="-6,7"
              fn={actions.chg_title}
          />
        ]),
        ]),
        h("split", {}, [
          h("div", {},"")
        ])
      ])


export default Layout
