const User = require('../models/usersModel')
const jwt = require('jsonwebtoken')
const createToken=(_id)=>{
	console.log('id: ',_id)
	const token=jwt.sign({_id},process.env.secret,{expiresIn:'3d'})
	return token
}
module.exports = {
	loginUser_post : async (req, res) => {
		console.log('login backend')
		const {email, password} = req.body
		try {
		  const user = await User.login(email, password)
		  const token = createToken(user._id)
		  const userData = await User.findOne({ email:email});
		  console.log('userData: ',userData)
		  const username=userData.username;
		  const number=userData.number;
		  res.status(200).json({username,number,email,token})
		} catch (error) {
		  res.status(400).json({error: error.message})
		}	
	},

	signupUser_post: async (req, res) => {
	const {username,email, password,number} = req.body
	try {
		const user = await User.signup(username,email, password,number)
		const token = createToken(user._id)
		console.log('token: ',token)
    	res.status(200).json({username,email,token})
	} catch (error) {
		res.status(400).json({error: error.message})
	}
	}
}

