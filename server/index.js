const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'register_form'
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.post("/api/insert",(req, res) => {

    const formName = req.body.formName
    const formLastName = req.body.formLastName
    const formDateOfBirth = req.body.formName
    const formSalary = req.body.formSalary
    const formOffice = req.body.formOffice
    const formOfficeDescription = req.body.formOfficeDescription
    
    const sqlInsert = "INSERT INTO register_form (formName) VALUES ("
    db.query(sqlInsert,
        [formName, 
        formLastName,
        formDateOfBirth, 
        formSalary, 
        formOffice, 
        formOfficeDescription], 
        (err, result) =>{
            console.log(result)
        })
})

app.listen(3001), () => {
    console.log('running on port 3001')
}