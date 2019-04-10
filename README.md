# IKK Dashboard

Modular Marketing Dashboard Web Application Front-End<br/>
Stack: ES6/d3.js/Hyperapp.js/Picostyle/Parcel

![Screenshot](screenshot.png)


## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ sudo npm install
```


## Running

Before running install [parcel] (https://parceljs.org/)</br>
Start server:

```sh
$ sudo npm start
```


## Deploying

Clone Repository:

```sh
$ git clone <https://git.c3.co/c3mi/ikk-dashboard_frontend_js.git>
```

Start server:

```sh
$ sudo npm start
```

## Dependencies

[D3.JS] - Chart drawing:<br/>
          Line Chart<br/>
          Bar Chart<br/>
          Pie Chart<br/>
          Force Graph<br/><br/>

[HYPERAPP.JS] - Framework<br/><br/>

[PARCEL.JS] (https://parceljs.org/) - Bundler<br/><br/>

## Architecture

APP ← PAGE ← LAYOUT ← BLOCK ← GRAPH <br/><br/>

![Model](app_architecture.png)

<br/>

![Model](app_diagram.png)

<br/>

components<br/>
-- blocks<br/>
---- BlockLine<br/>
---- BlockLineComparative<br/>
---- BlockBar<br/>
---- BlockBarGrouped<br/>
---- BlockCircular<br/>
---- BlockValue<br/>
---- BlockValueEmpty<br/>
---- BlockList<br/>
---- BlockSubmenuItem<br/>
-- form<br/>
---- FormInput<br/>
---- FormInputPassword<br/>
---- FormDatePicker<br/>
---- FormDropdown<br/>
-- graphs<br/>
---- GraphLine<br/>
---- GraphLineComparative<br/>
---- GraphBar<br/>
---- GraphCircular<br/>
---- GraphBarGrouped<br/>
---- GraphLineMultiple<br/>
-- layouts<br/>
---- LayoutAnalyseFacebook<br/>
---- LayoutAnalyseInstagram<br/>
---- LayoutAnalyseYouTube<br/>
---- LayoutAnalyseSea<br/>
---- LayoutAnalyseNative<br/>
---- LayoutLogin<br/>
---- LayoutRegister<br/>
---- LayoutSummary<br/>
---- LayoutUberblick<br/>
-- navigation<br/>
---- NavigationBar<br/>
---- SubNavigationBar<br/>
-- themes<br/>
---- ThemeLight<br/>
---- ThemeDark<br/>
pages<br/>
-- Login<br/>
-- Register<br/>
-- Analyse<br/>
-- Uberblick<br/>
-- Summary<br/>
service<br/>
-- ResizeManager<br/>


## Author

Darek Nyckowiak<br/>
darek.nyckowiak@c3.co
