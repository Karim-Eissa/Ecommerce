const express=require('express');
const Product=require('../models/productModel');
const User = require('../models/usersModel')

  module.exports={	
	myads_get: async (req, res) => {
		const id=req.user._id
		if(id==='650876d544c78ab9d3c0078e'){
			try {
				const data = await Product.find({}).sort({ createdAt: -1 });
				if (data.length === 0) {
					return res.status(404).json({ error: 'Products not found' });
				}
				res.json(data);
				} catch (err) {
				console.error('Error displaying products ', err);
				res.status(500).json({ error: 'Internal server error' });
				}
		}else{
			try {
			const data = await Product.find({ user_id: id }).sort({ createdAt: -1 });
			if (data.length === 0) {
				return res.status(404).json({ error: 'Products not found' });
			}
			res.json(data);
			} catch (err) {
			console.error('Error displaying products ', err);
			res.status(500).json({ error: 'Internal server error' });
			}
		}
	  },
	  delete_delete: async (req, res) => {
		const itemId = req.params.id;

		try {
		  // Use your Product model to find and delete the item by its ID
		  const deletedItem = await Product.findByIdAndDelete(itemId);
	  
		  if (!deletedItem) {
			return res.status(404).json({ error: 'Item not found' });
		  }
	  
		  res.status(200).json({ message: 'Item deleted successfully' });
		} catch (error) {
		  console.error('Error deleting item:', error);
		  res.status(500).json({ error: 'Internal Server Error' });
		}
	  },
	section_get: async (req, res) => {
		const category = req.params.category;
		try {
		  const data = await Product.find({ category: category }).sort({ createdAt: -1 });
		  if (data.length === 0) {
			return res.status(404).json({ error: 'Products not found' });
		  }
		  res.json(data);
		} catch (err) {
		  console.error('Error displaying products ', err);
		  res.status(500).json({ error: 'Internal server error' });
		}
	  },
	shopby_get:async (req, res) => {
		const type=req.params.type
		try {
			const data = await Product.find({ type: type }).sort({ createdAt: -1 });
			if (data.length === 0) {
				return res.status(404).json({ error: 'Products not found' });
			  }
			res.json(data);
		  } catch (err) {
			console.error('Error displaying products ', err);
			res.status(500).json({ error: 'Internal Server Error' });
		  }
	},
	shopbybrand_get:async (req, res) => {
		const id=req.params.brand
		try {
			const data = await Product.find({ brand: id }).sort({ createdAt: -1 });
			if (data.length === 0) {
				return res.status(404).json({ error: 'Products not found' });
			  }
			res.json(data);
		  } catch (err) {
			console.error('Error displaying products ', err);
			res.status(500).json({ error: 'Internal Server Error' });
		  }
	},
	product_get:async (req, res) => {
		const idd=req.params.id
		try {
			const data = await Product.findOne({ _id:idd});
			const sellerData = await User.findOne({ _id: data.user_id});
			const productWithSeller = {
				...data.toObject(),
				seller: sellerData,
			  };			
			  if (data.length === 0) {
				return res.status(404).json({ error: 'Products not found' });
			}
			res.json(productWithSeller);
		  } catch (err) {
			console.error('Error displaying product ', err);
			res.status(500).json({ error: 'Internal Server Error' });
		  }
	},
	search_get: async (req, res) => {
		const { query } = req.query;
		console.log('query: ',query);
	  	try {
		  const data = await Product.find({ name: { $regex: new RegExp(query, 'i') } }).sort({ createdAt: -1 });
		  res.json(data);
		} catch (err) {
		  console.error('Error searching products:', err);
		  res.status(500).json({ error: 'Internal Server Error' });
		}
	  },
	submit_post:async (req, res)=>{
		try {
			const user_id=req.user._id
			console.log('user id',user_id)
			const { base64,name,category,type,brand,price,color,condition,description} = req.body;
			console.log()
			const newProduct = new Product({
				image:base64,name,category,type,brand,price,color,condition,description,user_id
			});
			res.status(200).json({ message: 'Product saved successfully'})
			await newProduct.save();
			console.log('product saved')
		  } catch (error) {
			console.log(error)
			res.status(500).json({ error: 'Internal Server Error' });
		  }
	}
};
