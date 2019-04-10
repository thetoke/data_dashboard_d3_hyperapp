import { h } from "hyperapp"
import { LANGUAGE_DE } from '../../language/DE.js'
import NavigationBar from '../navigation/NavigationBar.js'
import FormInput from '../form/FormInput.js'
import FormInputPassword from '../form/FormInputPassword.js'


const Layout = (state, actions) =>

        h("divs", {}, [
        h(NavigationBar),
        h("wrapperForm", {}, [
        h("logo", {},""),
        h("splitLeftRegister", {}, [
        h("header", {}, LANGUAGE_DE.layout.title.register ),
        h("description", {}, LANGUAGE_DE.layout.description.register ),
        <FormInput
            title="Full Name"
            desc="samplemail@mail.com"
            fn={actions.chg_title}
        />,
        <FormInput
            title="Email address"
            desc="samplemail@mail.com"
            fn={actions.chg_title}
        />,
        <FormInputPassword
            title="Password"
            desc="Password"
            fn={actions.chg_title}
        />,
        h("button", { onclick: () => actions.up(1) }, "Sign Up"),
        h("additional", {},"Already have an account? Sign In"),

      ]),
        h("split", {}, [
          h("photo", {},"")
        ])
      ])
      ])


export default Layout
