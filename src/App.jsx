import { useState } from "react"
import "./App.css"

function App() {

  const [form , setForm] = useState({
    name : "",
    email : "",
    course : "BTech",
    terms : false
  })

  const[error, setError] = useState("")

  function handleChange(e){
    const {name , value , type , checked} = e.target;

    setForm({...form , [name] : type == "checkbox" ? checked : value})
  }

  function handleForm(e){
    e.preventDefault();

    if(!form.name.trim() || !form.email.trim() || !form.terms){
      setError("Please Enter All Details !!!");
      return
    }

    console.log(form);
  }


  return (
    <main className="container">
      <h2>Student Registration Form</h2>
      <form onSubmit={handleForm}>

        
        <input type="text"
        placeholder="Enter your name"
        name="name"
        value={form.name}
        onChange={handleChange} />

        <input type="email" name="email"
        placeholder="Enter emaail"
        value={form.email}
        onChange={handleChange} />

        <select name="course" value={form.course} onChange={handleChange}>
          <option value="BTech">BTech</option>
          <option value="MTech">MTech</option>
          <option value="PHD">PHD</option>
          </select> 
          
          <label>
            <input type="checkbox" name="terms" 
            checked={form.terms} onChange={handleChange} />
            I Accept terms and conditions
          </label>

          <button type="submit">Submit</button>

      </form>
      {error && <p className="error">{error}</p>}
    </main>
  )
}

export default App