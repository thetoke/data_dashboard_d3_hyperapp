import { h } from "hyperapp";
import { Link } from "@hyperapp/router";
import { LANGUAGE_DE } from '../../language/DE.js'


/**
 * Navigation Class with link routes
 */


const NavigationBar = () => h("nav", {}, [
    h(Link, {"to": "/" }, LANGUAGE_DE.navigation.login),
    h(Link, {"to": "/register" }, LANGUAGE_DE.navigation.register),
    h(Link, {"to": "/summary" }, LANGUAGE_DE.navigation.summary),
    h(Link, {"to": "/uberblick" }, LANGUAGE_DE.navigation.overview),
    h(Link, {"to": "/analyse/facebook" }, LANGUAGE_DE.navigation.analyse)
])


export default NavigationBar
