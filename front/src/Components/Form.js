import React, { useState, useEffect } from 'react'
import './Form.css'
import axios from 'axios';
function Form() {

  const [formName, setFormName] = useState('')
  const [formLastName, setFormLastName] = useState('')
  const [formDateOfBirth, setFormDateOfBirth] = useState('')
  const [formSalary, setFormSalary] = useState('')
  const [formOffice, setFormOffice] = useState('')
  const [formOfficeDescription, setFormOfficeDescription] = useState('')

  const submitData = () =>{
    axios.post('https/localhost:3001/api/insert', 
    {formName: formName,                                   
     formLastName: formLastName,                                
     formDateOfBirth: formDateOfBirth,                                
     formSalary: formSalary,                                
     formOffice: formOffice,                                  
     formOfficeDescription: formOfficeDescription
    }).then(()=>{
      alert('sucesssssss')
    })
  }
  return (
    <div className="App">
      <form className="form">

        <h2 className="form_title">Cadastrar Funcionário</h2>
       
        <label>Nome:</label>
        <input type="text" name="name" onChange={(e)=>{
          setFormName(e.target.value)
        }}/>
   
        <label>Último nome:</label>
        <input type="text" name="lastName"onChange={(e)=>{
          setFormLastName(e.target.value)
        }}/>
       
        <label>Data de nascimento:</label>
        <input type="text" name="dateOfBirth"onChange={(e)=>{
          setFormDateOfBirth(e.target.value)
        }}/>
    
        <label>Salário</label>
        <input type="text" name="salary"onChange={(e)=>{
          setFormSalary(e.target.value)
        }}/>
      
        <label>Cargo</label>
        <input type="text" name="office"onChange={(e)=>{
          setFormOffice(e.target.value)
        }}/>
    
        <label>Descrição do cargo</label>
        <input type="text" className="form_officeDescription" name="officeDescription"onChange={(e)=>{
          setFormOfficeDescription(e.target.value)
        }}/>
    
        <button className="form_button" onClick={submitData}>Cadastrar</button>
      </form>  
    </div>
  );
}

export default Form;
