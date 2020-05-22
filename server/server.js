const express = require('express')

const app = express();
const PORT = process.env.PORT || 3005;
require('dotenv').config();

const emailRouter = require('./routers/email')



// connect to DB
const mongoose = require('mongoose');
mongoose.connect(process.env.REACT_APP_MONGO_URL,{useUnifiedTopology: true, useNewUrlParser: true});

const PageVar = require('./models/pageVar')
const CheckIn = require('./models/checkIn')


//middleware
const cors = require('cors')({origin: true,credentials: true});
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const morgan = require('morgan');
app.use(cors);
app.use(bodyParser.json());
app.use(errorHandler());
app.use(morgan('dev'));

//routes
app.get('/get-data',(req,res,next) => {
    PageVar.findOne({active: true}, (err, response) => {
        if(err){
            return next(err)
        }else{
            return res.json(response)
        }
    })
})

app.post('/check-in',(req,res,next)=> {
    console.log(req.body)
    CheckIn(req.body).save((err,response) => {
        if(err){
            return next(err)
        }
        res.sendStatus(201)
    })

})

app.use('/email',emailRouter)


app.listen(PORT, () => {
    console.log(`Server is up and running on ${PORT}!`)
})