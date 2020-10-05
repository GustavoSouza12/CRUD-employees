import React from 'react';
import './Form.css';

function Form() {
  return (
    <div className="App">
      <form className="form">

        <h2 className="form_title">Cadastrar Funcionário</h2>
       
        <label>Nome:</label>
        <input type="text" name="name"/>
   
        <label>Último nome:</label>
        <input type="text" name="lastName"/>
       
        <label>Data de nascimento:</label>
        <input type="text" name="dateOfBirth"/>
    
        <label>Salário</label>
        <input type="text" name="salary"/>
      
        <label>Cargo</label>
        <input type="text" name="office"/>
    
        <label>Descrição do cargo</label>
        <input type="text" className="form_officeDescription" name="officeDescription"/>
    
        <button className="form_button">Cadastrar</button>
      </form>  
    </div>
  );
}

export default Form;
