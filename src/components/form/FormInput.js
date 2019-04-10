import { h } from "hyperapp";


const FormInput = ({title,desc,fn}) => (
  <p>
    <label>{title}</label>
    <input type="text"
      placeholder={desc}
      oninput={e => fn(e.target.value)}/>
  </p>
)


export default FormInput
