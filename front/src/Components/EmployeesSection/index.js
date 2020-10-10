import React, {useState, useEffect} from 'react'
import Axios from 'axios'

import FormLogo from './../../Assets/form_logo.svg'
import EmployeeImage from './../../Assets/employee_card_img.svg'

import { FaTrashAlt} from 'react-icons/fa';
import { IoMdPersonAdd } from "react-icons/io";

import './EmployeesSection.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

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
      <div className="App" >
        <div className="form_container" id="form" data-aos="fade-right" data-aos-duration="1500">
          <form className="form">
            <h2 className="form_title">New Employee</h2>
            <img className="form_logo" src={FormLogo} alt="Novo funcionário"/>
            <label>Name:</label>
            <input type="text" name="formName" autoComplete="off" maxLength="15" onChange={(e)=>{
              setFormName(e.target.value)
            }}/>
    
            <label>Last Name:</label>
            <input type="text" name="formLastName" autoComplete="off" maxLength="15" onChange={(e)=>{
              setFormLastName(e.target.value)
            }}/>
            
            <label>Date of birth:</label>
            <input type="date" name="formDateOfBirth" autoComplete="off" onChange={(e)=>{
              setFormDateOfBirth(e.target.value)
            }}/>
        
            <label>Salary</label>
            <input   name="formSalary" autoComplete="off" autoComplete="off" maxLength="10" onChange={(e)=>{
              setFormSalary(e.target.value)
            }}/>
          
            <label>Office</label>
            <input type="text" name="formOffice" autoComplete="off"  onChange={(e)=>{
              setFormOffice(e.target.value)
            }}/>
        
            <button className="form_button" onClick={submitData}><IoMdPersonAdd color="white"/></button>
          
          </form>
        </div>  
        <div className="employees_container" data-aos="fade-left" data-aos-duration="2000">{formList.map((val)=>{ 
            return  <div className="employees_card">
                      <h2>Employee:</h2>
                      <img className="employees_image" src={EmployeeImage} alt=""/>
                      <p><strong>Name:</strong>  {val.form_name + " " + val.form_lastName }</p>
                      <p><strong>Date of birth:</strong> {val.form_dateOfBirth}</p>
                      <p><strong>Salary:</strong> R$ {val.form_salary}</p>
                      <p><strong>Office:</strong> {val.form_office}</p>
                      <button className="employees_button" onClick={() => {deleteForm(val.form_name)}}><FaTrashAlt color="white"/></button>
                   
                    </div> 
                  })}           
        </div>        
      </div>
  );
} 
export default Form 
  
  