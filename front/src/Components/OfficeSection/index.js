import React, {useState, useEffect}from 'react'
import Axios from 'axios'
import './OfficeSection.css'
import officeLogo from "./../../Assets/office_logo.svg"
import officeImage from "./../../Assets/office_card_img.svg"
import { FaTrashAlt } from 'react-icons/fa';
import { IoMdPersonAdd } from "react-icons/io";
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
            <div className="office_form_container" data-aos="fade-right" data-aos-duration="2000">
                <form className="office_form" id="office">
                    <h2 className="office_title" >New Office</h2>
                    <img className="office_logo" src={officeLogo} alt=""/>
                    <label className="office_label">Name:</label>
                    <input className="office_input" type="text" name="officeName" autoComplete="off" maxLength="30" onChange={(e)=>{
                        setOfficeName(e.target.value)
                    }}/>
                    <label className="office_label">Description:</label>
                    <input className="office_input office_description" type="text" autoComplete="off" maxLength="45" name="officeDescription" onChange={(e)=>{
                        setOfficeDescription(e.target.value)
                    }}/>  

                    <button className="office_button" onClick={submitData}><IoMdPersonAdd color="white"/></button>
                </form> 
            </div>    
            <div className="office_card_container" data-aos="fade-left" data-aos-duration="2000">{officeList.map((val)=>{ 
                return  <div className="office_card">
                            <strong>Office:</strong> 
                            <p>{val.office_name}</p>
                            <img className="office_image" src={officeImage} alt="office"/>
                            <strong>Description:</strong>
                            <p>{val.office_description}</p>
                            <button className="office_button" onClick={() => {deleteOffice(val.office_name)}}><FaTrashAlt color="white"/></button>
                            
                        </div> 
                    })} 
            </div>        
        </div>
    )
}

export default Office