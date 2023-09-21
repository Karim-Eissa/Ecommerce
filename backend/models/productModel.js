const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const product=new Schema({
	image:{
		type: String,
	},
	name:{
		type: String,
		required: true
	},
	description:{
		type: String,
		required: true
	},
	price:{
		type: Number,
		required: true
	},
	condition:{
		type: String,
		required: true
	},
	category:{
		type: String,
		required: true
	},
	type:{
		type: String,
		required: true
	},
	brand:{
		type:String,
		required:true
	},
	color:{
		type:String,
		required:false
	},
	user_id:{
		type:String,
		required:true
	},
},{timestamps:true});
const Product=mongoose.model('product',product);
module.exports=Product;
