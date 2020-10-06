const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'register_form'
})

app.get("/",(req, res) => {

    const sqlInsert = "INSERT INTO register_new_employeer (form_name, form_lastName, form_dateOfBirth, form_salary, form_office, form_officeDescription) VALUES ('gustavo', 'silva', '31/05/2001','3,000','programador', 'html,css,js');"

    db.query(sqlInsert, (err, result)=>{
        res.send("OIIIIIII") 
    })
  
})

app.listen(3001), () => {
    console.log('running on port 3001')
}