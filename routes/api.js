const express = require('express')
const router = express.Router()
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('../models/user')

app.use(bodyParser.json());
app.use(cors());


router.get('/', (req , res) => {
    res.send('from api route')
  })

router.post('/signUp', (req,res)=>{
    let userData = req.body
    let user = new User(userData)
    user.save((error, registeredUser)=>{
        if (error){
            console.error(error)
        }
        else
        {
            res.status(200).send(registeredUser)
        }
    })

})
  
module.exports = router