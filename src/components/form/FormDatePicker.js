import { app, h } from "hyperapp";
import TinyPicker from 'tiny-picker'
import Log from "../../utils/Log.js"


const FormDatePicker = ({startdate,enddate,change,fn}) => {


    function DatePicked(startDate, endDate) {
      //app.setdate(startDate)
      Log('INFO', '☻ DATE SET ➜', {'startdate': startDate, 'enddate': endDate})
    }

    const oncreate = (e) => {
      new TinyPicker({
        firstBox:e.querySelector('#startDate'),
        startDate: new Date(startdate),
        endDate: new Date(enddate),
        lastBox: e.querySelector('#endDate'),
        success: (s, e) => {
          Log('INFO', '☻ DATE SET ➜', {'startdate': s, 'enddate': e})
          console.log(app); //setdate( s )
        }
      }).init()
    }

    const ondestroy = () => {

    }

    return (
      <datePicker oncreate={oncreate} ondestroy={ondestroy}>
        <input type="text" class="TinyPicker" id="startDate"/>
        <input type="text" class="TinyPicker" id="endDate"/>
      </datePicker>
    )
}

export default FormDatePicker
