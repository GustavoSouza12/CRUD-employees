import React, { useState, useEffect } from "react"
import './FormList.css'
import Axios from 'axios'

const FormList = () =>{

    const [formList, setFormList2] = useState([])

    useEffect(()=>{
        Axios.get('http://localhost:3001/sos/')
        .then((response)=>{
          setFormList2(response.data)
        })
      }, [])

    return (
        <div className="employees_container">{formList.map((form, )=>{ 
            return  <div className="employees_card">
                      <h2>Funcionário(a) {form.id}: </h2>
                      <p><strong>Nome:</strong>  {form.form_name + " " + form.form_lastName }</p>
                      <p>Nascimento: {form.form_dateOfBirth}</p>
                      <p>Salário: R${form.form_salary}</p>
                      <p>Cargo: {form.form_office}</p>
                      <p>Descrição: {form.form_officeDescription}</p>
                    </div> 
                 
                  })
                  }
          </div>        
    )
}

export default FormList