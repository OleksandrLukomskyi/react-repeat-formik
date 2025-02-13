import { useState } from "react"
import { FaTshirt } from "react-icons/fa"

 const initialValues ={
      size: "md",
      color: "blue",
      
   }


export default function Form() {
const [state, setState] = useState(initialValues)

const handleSubmit = (e) => {
e.preventDefault()
console.log(state);
setState(initialValues);
}

const handleChange = (e) => {
   setState({
      ...state,
      [e.target.name]: e.target.value,
   })
}

console.log("STAN")

   return (
      <form autoComplete="off" onSubmit={handleSubmit}>
         <FaTshirt size="100" color={state.color}/>
        
         <select name="size" id="" value={state.size} onChange={handleChange}>
            <option value="sm">SM</option>
            <option value="md">MD</option>
            <option value="lg">LG</option>
         </select>

         <select name="color" id="" value={state.color} onChange={handleChange}>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
         </select>

         <button type="submit">Submit</button>
      </form>
   )
}