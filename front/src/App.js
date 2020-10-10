import React from "react"

import Form from "./Components/EmployeesSection"
import Office from "./Components/OfficeSection"
import Navbar from "./Components/Navbar"

const App =() => {
  return (
    <div>
      <Navbar/>
      <Form/>
      <Office/>
    </div>
    
  );
}

export default App;
