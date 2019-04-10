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
        h("splitLeft", {}, [
        h("header", {}, LANGUAGE_DE.layout.title.login ),
        h("description", {}, LANGUAGE_DE.layout.description.login ),
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
        h("button", { onclick: () => actions.up(1) }, "Sign In"),
        h("additional", {},"Dont’ have an account? Sign up"),
      ]),
        h("split", {}, [
          h("photo", {},"")
        ])
      ])
      ])


export default Layout
