import { useState } from "react"
import "./formStyles.scss"

const Form = (props) => {
  const [name, setname] = useState("")
  const [loc, setloc] = useState("")

  const inputChange = (e) => {
    // Change name input value
    if(e.target.id === "nameInput")
      setname(e.target.value)
    // Change location input value
    else if(e.target.id === "locInput")
      setloc(e.target.value)
  }

  const additem = (e) => {
    if(name !== "" && loc !== "") {
      props.addItem(name, loc)

      setname("")
      setloc("")
    }
    else {
      const alertEle = document.getElementById("errAlert");
      alertEle.setAttribute("style", "display: block;")
      setTimeout(() => alertEle.setAttribute("style", "display: none;"), 2000)
    }
  }

  return <div className="inputFormCntr">
    <input className="input-group mb-3" 
      id="nameInput"
      placeholder="Enter name"
      value={name}
      onChange={inputChange}
    />

    <input className="input-group mb-3" 
      id="locInput"
      placeholder="Enter location"
      value={loc}
      onChange={inputChange}
    />

  <button 
    type="button" 
    className="btn btn-primary"
    onClick={additem}
  >
    Add Item
  </button>

  <div id="errAlert" className="alert alert-danger alertStyles" role="alert">
    Fill all input fields
  </div>

  </div>
}

export default Form;