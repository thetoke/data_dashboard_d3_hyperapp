/**
 * Central Logger
 *
 * @param string     $type          Log message type 'START', 'API', 'INFO', 'ERROR'
 * @param string     $description   Log desctiption
 * @param object|number|string     $value   Logged value, default value in an empty string
 *
 * @return Console Log with given input data
 */


const Log = (type, description, value='') => {


  // Current mode can be 'DEBUG' or 'PRODUCTION'
  const CURRENT_MODE = 'DEBUG'
  let message
  let colors

  switch( type ) {
     case 'START': {
        colors = 'background:#FAD050 ; color:#2E384D'
        break
     }
     case 'API': {
        colors = 'background:#2E384D ; color: #FAD050'
        break
     }
     case 'INFO': {
        colors = 'background:#E0E7FF ; color: #8798AD'
        break
     }
     case 'ERROR': {
        colors = 'background:#FF0000 ; color: #FFFFFF'
        break
     }
     default: {
        colors = 'background:#FFFFFF ; color: #000000'
        break
     }
  }

  if (CURRENT_MODE == 'DEBUG') return console.log('%c  ' + description + '  ', colors, value)
}


export default Log
