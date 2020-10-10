const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql')



const db = mysql.createConnection({
    host: '192.168.15.101',
    user: 'TesteUser',
    password: 'Teste1679',
    database: 'register_form',
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))



// Form

app.get('/sos/', (req,res) =>{
    const sqlSelect = "SELECT * FROM form"
    db.query(sqlSelect, (err,result)=>{
        res.send(result)
    })
})


app.post("/form/post/",(req, res) => {

    const formName = req.body.formName
    const formLastName = req.body.formLastName
    const formDateOfBirth = req.body.formDateOfBirth
    const formSalary = req.body.formSalary
    const formOffice = req.body.formOffice
    
    
    const sqlInsert = "INSERT INTO form (form_name, form_lastName, form_dateOfBirth, form_salary, form_office) VALUES (?,?,?,?,?)"
        db.query(sqlInsert, [formName, formLastName, formDateOfBirth, formSalary, formOffice], (err,result)=>{
        console.log(err)
    })
   
})

app.delete('/delete/:formName',(req, res) => {
    const name = req.params.formName
    const sqlDelete = "DELETE FROM form WHERE form_name = ?"
    db.query(sqlDelete, name, (err, result)=>{
        if (err) console.log(err)
    })
})


// Office 

app.post("/office/post/",(req, res) => {

    const officeName = req.body.officeName
   
    const officeDescription = req.body.officeDescription
    
    const sqlInsert = "INSERT INTO office (office_name, office_description) VALUES (?,?)"
        db.query(sqlInsert, [officeName, officeDescription], (err,result)=>{
        console.log(err)
    })
   
})
app.get('/sos2/', (req,res) =>{
    const sqlSelect = "SELECT * FROM office"
    db.query(sqlSelect, (err,result)=>{
        res.send(result)
    })
})
app.delete('/delete1/:officeName',(req, res) => {
    const name = req.params.officeName
    const sqlDelete = "DELETE FROM office WHERE office_name = ?"
    db.query(sqlDelete, name, (err, result)=>{
        if (err) console.log(err)
    })
})




app.listen(3001), () => {
    console.log('running on port 3001')
}
