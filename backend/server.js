const express= require('express');
const morgan=require('morgan');
const cors=require('cors');
const mongoose=require('mongoose');
const appRoutes=require('./routes/appRoutes');
const authRoutes=require('./routes/authRoutes');
require('dotenv').config();

const app=express()
app.use(cors());
app.use(morgan('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.dbURL)
.then(()=>{
	app.listen(process.env.PORT,()=>{
		console.log('db connected and listening to port',process.env.PORT);
	})
})
.catch((err)=>{
	console.log(err)
})

//routes
app.use('/api',appRoutes);
app.use('/user',authRoutes);

app.use((req,res)=>{
	res.json({error:'404 page not found'});
})

