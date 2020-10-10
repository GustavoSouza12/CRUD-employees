import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import './EmployeesSection.css'
import FormLogo from './../../Assets/form_logo.svg'
const Form =() => {
  
    const [formName, setFormName] = useState('')
    const [formLastName, setFormLastName] = useState('')
    const [formDateOfBirth, setFormDateOfBirth] = useState('')
    const [formSalary, setFormSalary] = useState('')
    const [formOffice, setFormOffice] = useState('')
  
    const [formList, setFormList] = useState([])



    const submitData = () =>{
      Axios.post("http://localhost:3001/form/post/", 
      {formName: formName,                                   
      formLastName: formLastName,                                
      formDateOfBirth: formDateOfBirth,                                
      formSalary: formSalary,                                
      formOffice: formOffice                                
      }).then(()=>{
        setFormList([...formList, {
          formName: formName,
          formLastName: formLastName,
          formDateOfBirth: formDateOfBirth,
          formSalary: formSalary,
          formOffice: formOffice
        }])
      })
    }
    useEffect(()=>{
      Axios.get('http://localhost:3001/sos/')
      .then((response)=>{
        setFormList(response.data)
      })
    }, [])

    const deleteForm = (form) =>{
      Axios.delete(`http://localhost:3001/delete/${form}/`)
    }  

    
  
 
    return (
      <div className="App">
        <div className="form_container">
          <form className="form" id="form">
    
            <h2 className="form_title">Novo Funcionário</h2>
            <img className="form_logo" src={FormLogo} alt="Novo funcionário"/>
            <label>Nome:</label>
            <input type="text" name="formName" autocomplete="off" maxLength="15" onChange={(e)=>{
              setFormName(e.target.value)
            }}/>
        
            <label>Último nome:</label>
            <input type="text" name="formLastName" autocomplete="off" maxLength="15" onChange={(e)=>{
              setFormLastName(e.target.value)
            }}/>
            
            <label>Data de nascimento:</label>
            <input type="date" name="formDateOfBirth" autocomplete="off" onChange={(e)=>{
              setFormDateOfBirth(e.target.value)
            }}/>
        
            <label>Salário</label>
            <input   name="formSalary" autocomplete="off" onChange={(e)=>{
              setFormSalary(e.target.value)
            }}/>
          
            <label>Cargo</label>
            <input type="text" name="formOffice" autocomplete="off"  onChange={(e)=>{
              setFormOffice(e.target.value)
            }}/>
        

            <button className="form_button" onClick={submitData}>Cadastrar</button>
          </form>
        </div>  

        <div className="employees_container">{formList.map((val)=>{ 
            return  <div className="employees_card">
                      <h2>Funcionário(a):</h2>
                      <p><strong>Nome:</strong>  {val.form_name + " " + val.form_lastName }</p>
                      <p><strong>Nascimento:</strong> {val.form_dateOfBirth}</p>
                      <p><strong>Salário:</strong> R${val.form_salary}</p>
                      <p><strong>Cargo:</strong> {val.form_office}</p>
                      <button className="employees_button" onClick={() => {deleteForm(val.form_name)}}>Deletar</button>
                   
                    </div> 
                  })}           
        </div>        
      </div>
    );
  }

  
  export default Form 
  
  