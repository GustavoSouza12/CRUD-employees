import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <form className="form">
        <h2 className="form_title">Cadastrar Funcionário</h2>
        <div className="form_div">
          <h3>Nome</h3>
          <input type="text" name="name"/>
        </div>  
        <div className="form_div">
        <h3>Último nome</h3>
        <input type="text" name="lastName"/>
        </div>
        <div className="form_div">
          <h3>Data de nascimento</h3>
          <input type="text" name="dateOfBirth"/>
        </div>  
        <div className="form_div">
          <h3>Salário</h3>
          <input type="text" name="salary"/>
        </div>
        <div className="form_div">
          <h3>Cargo</h3>
          <input type="text" name="office"/>
        </div>  
        <div className="form_div">
        <h3>Descrição do cargo</h3>
        <input type="text" name="officeDescription"/>
        </div> 
      </form>  
    </div>
  );
}

export default App;
