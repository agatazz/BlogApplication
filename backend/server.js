const express=require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors=require('cors');
const mongoose=require('mongoose');
require('dotenv').config();


const postRoutes=require('./routes/post');
const authRoutes=require('./routes/auth');

const app = express();

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser:true,useCreateIndex:true,useFindAndModify:false,useUnifiedTopology:true
})
.then(() =>console.log('DB connected'))
.catch(err => console.log(err));


app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());


app.use('/api/',postRoutes);
app.use('/api/',authRoutes);


const port=process.env.PORT || 8000;
app.listen(port,()=>console.log(`Sever is running on ${port}`));


