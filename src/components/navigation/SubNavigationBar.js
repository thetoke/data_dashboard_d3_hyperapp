import { h } from "hyperapp";
import { Link } from "@hyperapp/router";
import { LANGUAGE_DE } from '../../language/DE.js'
import BlockSubmenuItem from '../blocks/BlockSubmenuItem.js'
import FormDropdown from '../form/FormDropdown.js'
import FormDatePicker from '../form/FormDatePicker.js'


const SubNavigationBar = () => h("subnav", {}, [
    h(Link, {"to": "/analyse/facebook" }, [
    <BlockSubmenuItem
        title={ LANGUAGE_DE.navigation.facebook }
        icon="facebookIcon"
    />
    ]),
    h(Link, {"to": "/analyse/youtube" }, [
      <BlockSubmenuItem
          title={ LANGUAGE_DE.navigation.youtube }
          icon="youtubeIconSmall"
      />
    ]),
    h(Link, {"to": "/analyse/instagram" }, [
      <BlockSubmenuItem
          title={ LANGUAGE_DE.navigation.instagram }
          icon="instagramIcon"
      />
    ]),
    h(Link, {"to": "/analyse/sea" }, [
      <BlockSubmenuItem
          title={ LANGUAGE_DE.navigation.sea }
          icon="seaIcon"
      />
    ]),
    h(Link, {"to": "/analyse/native" }, [
      <BlockSubmenuItem
          title={ LANGUAGE_DE.navigation.native }
          icon="nativeIcon"
      />
    ]),
    <subnavdescription>{ LANGUAGE_DE.navigation.filter }</subnavdescription>,
    h("Filters", {}, [
      <FormDropdown
          text={ LANGUAGE_DE.navigation.dropdownone[0] }
          items={ LANGUAGE_DE.navigation.dropdownone }
      />,
      <FormDropdown
          text={ LANGUAGE_DE.navigation.dropdowntwo[0] }
          items={ LANGUAGE_DE.navigation.dropdowntwo }
      />,
    ]),
    <subnavdescription>{ LANGUAGE_DE.navigation.date }</subnavdescription>,
    <FormDatePicker
          startdate="2018/12/12"
          enddate="2019/12/12"
    />
])


export default SubNavigationBar
