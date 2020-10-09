import React, {useState, useEffect}from 'react'
import Axios from 'axios'
import './Office.css'
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
        <div>
            <form className="office">
  
                <h2 className="office_title">Cadastrar Cargo</h2>
                
                <label>Nome:</label>
                <input type="text" name="officeName" maxLength="50" onChange={(e)=>{
                    setOfficeName(e.target.value)
                }}/>
                <label>Descrição:</label>
                <input type="text" name="officeDescription" maxLength="500" onChange={(e)=>{
                    setOfficeDescription(e.target.value)
                }}/>  

                <button className="office_button" onClick={submitData}>Cadastrar</button>
            </form> 

            <div className="office_container">{officeList.map((val)=>{ 
                return  <div className="office_card">
                            <p><strong>Cargo:</strong> {val.office_name}</p>
                            <p><strong>Descrição:</strong> {val.office_description}</p>
                            <div>
                                <button onClick={() => {deleteOffice(val.office_name)}}>Deletar</button>
                            </div> 
                        </div> 
                    })} 
            </div>      
        </div>
    )
}

export default Office