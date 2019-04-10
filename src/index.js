import { h, app } from "hyperapp";
import { Route, location } from "@hyperapp/router";

// LOG
import Log from "./utils/Log.js"

// Layouts
import LayoutLogin from "./components/layouts/LayoutLogin.js";
import LayoutRegister from "./components/layouts/LayoutRegister.js";
import LayoutUberblick from "./components/layouts/LayoutUberblick.js";
import LayoutAnalyseFacebook from "./components/layouts/LayoutAnalyseFacebook.js";
import LayoutAnalyseYouTube from "./components/layouts/LayoutAnalyseYouTube.js";
import LayoutAnalyseInstagram from "./components/layouts/LayoutAnalyseInstagram.js";
import LayoutAnalyseSea from "./components/layouts/LayoutAnalyseSea.js";
import LayoutAnalyseNative from "./components/layouts/LayoutAnalyseNative.js";
import LayoutSummary from "./components/layouts/LayoutSummary.js";

// Pages
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import Summary from "./pages/Summary.js";
import Uberblick from "./pages/Uberblick.js";
import Analyse from "./pages/Analyse.js";


const state = {
    location: location.state,
    date: ""
}

const actions = {
    location: location.actions,
    setdate: () => date => ({ date })
}


// Route Definition
const view = () => h("div", {class:"main"}, [
    h(Route, { path: "/", render: () => LayoutLogin({}, Login) }),
    h(Route, { path: "/register", render: () => LayoutRegister({}, Register) }),
    h(Route, { path: "/summary", render: () => LayoutSummary({}, Summary) }),
    h(Route, { path: "/uberblick", render: () => LayoutUberblick({}, Uberblick) }),
    h(Route, { path: "/analyse/facebook", render: () => LayoutAnalyseFacebook({}, Analyse) }),
    h(Route, { path: "/analyse/youtube", render: () => LayoutAnalyseYouTube({}, Analyse) }),
    h(Route, { path: "/analyse/instagram", render: () => LayoutAnalyseInstagram({}, Analyse) }),
    h(Route, { path: "/analyse/sea", render: () => LayoutAnalyseSea({}, Analyse) }),
    h(Route, { path: "/analyse/native", render: () => LayoutAnalyseNative({}, Analyse) })
])

Log('START', 'APP ➜ MARKETING DASHBOARD ☻ IKK LOG')

const main = app(state, actions, view, document.body)
const unsubscribe = location.subscribe(main.location);
