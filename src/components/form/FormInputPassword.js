import { h } from "hyperapp";


const InputPassword = ({title,desc,fn}) => (
  <p>
    <label>{title}</label>
    <input type="password"
      placeholder={desc}
      oninput={e => fn(e.target.value)}/>
  </p>
)


export default InputPassword
