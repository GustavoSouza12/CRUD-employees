import React from "react"

import Form from "./Components/EmployeesSection"
import Office from "./Components/OfficeSection"
import Navbar from "./Components/Navbar"
import Footer from './Components/Footer'

const App =() => {
  return (
    <div>
      <Navbar/>
      <Form/>
      <Office/>
      <Footer/>
    </div>
  );
}

export default App;
