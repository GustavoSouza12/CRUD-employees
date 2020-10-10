import React, {useState, useEffect}from 'react'
import Axios from 'axios'
import './OfficeSection.css'
import officeLogo from "./../../Assets/office_logo.svg"

const Office = () => {

    const [officeName, setOfficeName] = useState('')
    const [officeDescription, setOfficeDescription] = useState('')

    const [officeList, setOfficeList] = useState([])


    const submitData = () =>{
        Axios.post("http://localhost:3001/office/post/", 
        {officeName: officeName,                                   
        officeDescription: officeDescription,                                
        }).then(()=>{
        })
    }
    useEffect(()=>{
        Axios.get('http://localhost:3001/sos2/')
        .then((response)=>{
          setOfficeList(response.data)
        })
    }, [])
    const deleteOffice = (office) =>{
        Axios.delete(`http://localhost:3001/delete1/${office}/`)
      }  
    return ( 
        <div class="office_container">
            <div className="office_form_container">
                <form className="office" id="office">
    
                    <h2 className="office_title">Novo Cargo</h2>
                    <img className="office_logo" src={officeLogo} alt=""/>
                    <label className="office_label">Nome:</label>
                    <input className="office_input" type="text" name="officeName" maxLength="50" onChange={(e)=>{
                        setOfficeName(e.target.value)
                    }}/>
                    <label className="office_label">Descrição:</label>
                    <input className="office_input office_description"type="text" name="officeDescription" maxLength="500" onChange={(e)=>{
                        setOfficeDescription(e.target.value)
                    }}/>  

                    <button className="office_button" onClick={submitData}>Cadastrar</button>
                </form> 
            </div>    

            <div className="office_container">{officeList.map((val)=>{ 
                return  <div className="office_card">
                            <p><strong>Cargo:</strong> {val.office_name}</p>
                            <p><strong>Descrição:</strong> {val.office_description}</p>
                            <button className="office_button" onClick={() => {deleteOffice(val.office_name)}}>Apagar</button>
                        </div> 
                    })} 
            </div>      
        </div>
    )
}

export default Office