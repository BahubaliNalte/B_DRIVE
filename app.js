const express = require('express');
const userRouter = require('./routes/user.routes');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cookieParser = require('cookie-parser');
const connectToDB= require('./config/db')
const indexRouter = require('./routes/index.routes')
connectToDB();

app.set('view engine', 'ejs');
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended:true}))

app.use('/', indexRouter)
app.use('/user', userRouter)


app.listen(3000, () => {
    console.log('Server is running on port 3000');
})
