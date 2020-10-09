import React, {useState} from 'react'
import Axios from 'axios'


const Form =() => {
  
    const [formName, setFormName] = useState('')
    const [formLastName, setFormLastName] = useState('')
    const [formDateOfBirth, setFormDateOfBirth] = useState('')
    const [formSalary, setFormSalary] = useState('')
    const [formOffice, setFormOffice] = useState('')
    const [formOfficeDescription, setFormOfficeDescription] = useState('')
  
    const submitData = () =>{
      Axios.post("http://localhost:3001/form/post/", 
      {formName: formName,                                   
      formLastName: formLastName,                                
      formDateOfBirth: formDateOfBirth,                                
      formSalary: formSalary,                                
      formOffice: formOffice,                                  
      formOfficeDescription: formOfficeDescription,
      }).then(()=>{
        console.log("sucesssssss")
      })
    }
    return (
      <div className="App">
        <form className="form">
  
          <h2 className="form_title">Cadastrar Funcionário</h2>
          
          <label>Nome:</label>
          <input type="text" name="formName" onChange={(e)=>{
            setFormName(e.target.value)
          }}/>
      
          <label>Último nome:</label>
          <input type="text" name="formLastName"onChange={(e)=>{
            setFormLastName(e.target.value)
          }}/>
          
          <label>Data de nascimento:</label>
          <input type="text" name="formDateOfBirth"onChange={(e)=>{
            setFormDateOfBirth(e.target.value)
          }}/>
      
          <label>Salário</label>
          <input type="text" name="formSalary"onChange={(e)=>{
            setFormSalary(e.target.value)
          }}/>
        
          <label>Cargo</label>
          <input type="text" name="formOffice"onChange={(e)=>{
            setFormOffice(e.target.value)
          }}/>
      
          <label>Descrição do cargo</label>
          <input type="text" className="form_officeDescription" name="formOfficeDescription"onChange={(e)=>{
            setFormOfficeDescription(e.target.value)
          }}/>

          <button className="form_button" onClick={submitData}>Cadastrar</button>
        </form>  
      </div>
      
    );
  }
  
  export default Form;
  