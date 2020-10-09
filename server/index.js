const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'register_form',
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))



app.get('/sos/', (req,res) =>{
    const sqlSelect = "SELECT * FROM form"
    db.query(sqlSelect, (err,result)=>{
        res.send(result)
        console.log(result)
    })
})


app.post("/form/post/",(req, res) => {

    const formName = req.body.formName
    const formLastName = req.body.formLastName
    const formDateOfBirth = req.body.formDateOfBirth
    const formSalary = req.body.formSalary
    const formOffice = req.body.formOffice
    const formOfficeDescription = req.body.formOfficeDescription
    
    

    const sqlInsert = "INSERT INTO form (form_name, form_lastName, form_dateOfBirth, form_salary, form_office, form_officeDescription) VALUES (?,?,?,?,?,?)"
        db.query(sqlInsert, [formName, formLastName, formDateOfBirth, formSalary, formOffice, formOfficeDescription], (err,result)=>{
        console.log(err)
    })
   
})

app.listen(3001), () => {
    console.log('running on port 3001')
}
