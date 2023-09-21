import { useState } from 'react';
import SellCss from './css/sell.module.css'
import placeholder from '../assets/images/placeholder.png'
import { useAuthContext } from '../hooks/useAuthContext';
import {useNavigate} from 'react-router-dom'
const Sell = () => {
	const navigate=useNavigate()
	const backendURL = process.env.REACT_APP_BACKEND;
	const {user}=useAuthContext()
	const [image, setImage] = useState('');
	const [firstDropdownValue, setFirstDropdownValue] = useState('');
	const [secondDropdownValue, setSecondDropdownValue] = useState([]);
	const [thirdDropdownOptions, setThirdDropdownOptions] = useState([]);
	const [isSecondDropdownDisabled, setIsSecondDropdownDisabled] = useState(true);
	const [isThirdDropdownDisabled, setIsThirdDropdownDisabled] = useState(true);
	const [secondDropdownOptions, setSecondDropdownOptions] = useState([]);
	const [brand, setBrand] = useState('');
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [color, setColor] = useState('');
	const [condition, setCondition] = useState('');
	const [description, setDescription] = useState('');
	const [error, setError] = useState(null);
  // Options for the first and second dropdowns
  const firstDropdownOptions = [
    { value: 'Electronics', label: 'Electronics' },
    { value: 'Clothing', label: 'Clothing' },
	{ value: 'Footwear', label: 'Footwear' },
    { value: 'Sports', label: 'Sports' },
	{ value: 'Furniture', label: 'Furniture' },
    { value: 'Vehicles', label: 'Vehicles' },
  ];

  // Function to update the options of the second dropdown based on the first dropdown selection
  const handleFirstDropdownChange = (e) => {
    const selectedValue = e.target.value;
    setFirstDropdownValue(selectedValue);

    // Determine options for the second dropdown based on the selectedValue
    let newOptions = [];

    if (selectedValue === 'Electronics') {
      newOptions = ['Phones', 'Tablets', 'Computers','Watches'];
    } else if (selectedValue === 'Clothing') {
      newOptions = ['T-shirts', 'Pants','Jackets' ,'Shorts','Suits','Underwear','Hoodies','Skirts'];
    }
	else if (selectedValue === 'Footwear') {
		newOptions = ['Athletic', 'Sneakers','Casual','Formal','Boots','Sandals','Slippers'];
	  }
	  else if (selectedValue === 'Sports') {
		newOptions = ['Apparel', 'Equipment', 'Accessories','Fans','Nutrition'];
	  }
	  else if (selectedValue === 'Furniture') {
		newOptions = ['Livingroom', 'Bedroom', 'Diningroom','Kitchen','Outdoor',];
	  }
	  else if (selectedValue === 'Vehicles') {
		newOptions = ['Cars', 'Motorcycles', 'Bikes','Van','Beach-Buggies'];
	  }
    setSecondDropdownValue(''); 
    setSecondDropdownOptions(newOptions);
    setIsSecondDropdownDisabled(false); 
    setIsThirdDropdownDisabled(true); 
  };

  // Function to update the options of the third dropdown based on the second dropdown selection
  const handleSecondDropdownChange = (e) => {
    const selectedValue = e.target.value;
    setSecondDropdownValue(selectedValue);

    // Determine options for the third dropdown based on the selectedValue
    let newOptions = [];
	//Electronics brand
    if (selectedValue === 'Phones') {
      newOptions = ['Apple', 'Huawei', 'Samsung','Oppo','Infinix','Nokia','Google','Motorolla','Xiaomi','One plus','Realme','Lenovo','HTC','Other'];
    } else if (selectedValue === 'Tablets') {
      newOptions = ['Apple', 'Huawei', 'Samsung','Lenovo','Microsoft','Asus','Xiaomi','Oppo','Other'];
    }
	else if (selectedValue === 'Computers') {
		newOptions = ['Dell', 'Apple', 'HP', 'Samsung', 'Toshiba','Lenovo','Asus','Microsoft','IBM','Intel','Razer','Acer','Corsair','Other'];
	}
	else if (selectedValue === 'Watches') {
	newOptions = ['Casio', 'Rolex','Samsung', 'Huawei','Apple','Fossil','Garmen','Seiko','Omega','Cartier','Other'];
	}
	//Clothing brand
	else if (selectedValue === 'T-shirts' || selectedValue === 'Jackets'||selectedValue === 'Pants' || selectedValue === 'Shorts' 
	|| selectedValue === 'Underwear'|| selectedValue === 'Suits'|| selectedValue === 'Socks'|| selectedValue === 'Hoodies') {
		newOptions = ['Nike', 'Adidas', 'American-Eagle','Calvin-Klein','Hollister','Abercrombie', 'New-Balance','Reebok'
		,'Puma','Timberland','Louis-Vuitton','Gucci','Chanel','Under-Armour','Zara','H&M','Prada',
		'DeFacto','Polo-Raulph-Lauren','Levis','Next','The-North-Face','Dolce-&-Gabbana','Dior', 'Armani','Fendi','Hugo-Boss'
		,'Tommy-Hilfiger','Lacoste','Other'];
	}
	//Footwear brand
	else if (selectedValue === 'Athletic' || selectedValue === 'Sneakers' ||  selectedValue === 'Boots' ||selectedValue === 'Slippers'
	|| selectedValue === 'Formal'|| selectedValue === 'Casual'|| selectedValue === 'Sandals') {
		newOptions = ['Nike', 'Adidas', 'Sketchers','Puma','Reebok','New-Balance','Vans','Converse','Under-Armour','Fila','Other'];
	}
	//Sports brand
	else if (selectedValue === 'Apparel' || selectedValue === 'Equipment' ||  selectedValue === 'Accessories' ||selectedValue === 'Fans'
	|| selectedValue === 'Nutrition') {
		newOptions = ['Adidas', 'New-Balance', 'Nike','Reebok','Under-Armour','Fila', 'Puma', 'Speedo','Diadora','Colombia','Other'];
	}
	//Furniture brand
	else if (selectedValue === 'Diningroom' || selectedValue === 'Livingroom' ||  selectedValue === 'Bedroom'
	|| selectedValue === 'Kitchen'|| selectedValue === 'Outdoor') {
		newOptions = ['Ikea', 'Ashley-Furniture', 'La-Z-boy','Herman-Miller','Pottery-Barn','Other'];
	}
	//Vehicle brand
	else if (selectedValue === 'Cars' || selectedValue === 'Motorcycles' ||  selectedValue === 'Bikes'
	|| selectedValue === 'Vans'|| selectedValue === 'Beach-Buggies') {
		newOptions = ['Mercedes', 'BMW', 'Hyundai','Honda','Skoda','Nissan','Seat','Daihatsu','Audi',
		'Volkswagen','Toyota','Mitsubishi','Kia','Ford','Renault','Peugeot','Fiat','Kawasaki','CBR','Yamaha',
		'Other'];
	}

    setThirdDropdownOptions(newOptions);
    setIsThirdDropdownDisabled(false);
  };
  function convertTo64(e){
	console.log(e)
	var reader=new FileReader();
	reader.readAsDataURL(e.target.files[0]);
	reader.onload=()=>{
		setImage(reader.result)
	}
	reader.onerror=error=>{
		console.log('Error',error)
	}
	}
  const handleFormSubmit = async (e) => {  
	  e.preventDefault();
	if(!user){
		setError('You must be logged in')
		return
	}
	const formData = {
	  base64:image,
	  category: firstDropdownValue,
	  type: secondDropdownValue,
	  brand,
	  name,
      price,
      color,
      condition,
      description,
	};
	try {
	  const response=await fetch(`${backendURL}/api/submit`, {
		method: 'POST',
		crossDomain:true,
		headers: {
		  'Content-Type': 'application/json',
		  'Authorization':`Bearer ${user.token}`,
		  Accept:'application/json',
		  "Access-Control-Allow-Origin":"*"
		},
		body: JSON.stringify(formData),
	  });
	  const json=await response.json()
	  if(!response.ok){
		setError(json.error)
	  }else {
		navigate('https://e-shop-7j3o.onrender.com/'); 
	  }
	} catch (error) {
	  console.log('Error submitting data:', error);
	}
  };
  return (
	<div className={SellCss.main}>
		<form onSubmit={handleFormSubmit}>
			{image===""||image===null?<img src={placeholder} width={250} height={250} className={SellCss.productImg} alt='product'></img>: <img src={image} width={250} height={250} className={SellCss.productImg} alt='product'></img>}
			<label className={SellCss.label}>Product photo</label>
			<input
			required
			type='file'
			accept='image/*'
			onChange={convertTo64}
			></input>
			<label className={SellCss.label}>Category:</label>
			<select required value={firstDropdownValue} onChange={(e)=>{
				setFirstDropdownValue(e.target.value)
				handleFirstDropdownChange(e)}}>
				<option value="">Select an option</option>
				{firstDropdownOptions.map((option) => (
					<option key={option.value} value={option.value}>
					{option.label}
					</option>
				))}
			</select>
			<label className={SellCss.label}>Type:</label>
			<select
			required
			value={secondDropdownValue}
			onChange={(e)=>{
				setSecondDropdownValue(e.target.value)
				handleSecondDropdownChange(e)}}
			disabled={isSecondDropdownDisabled}
			>
				<option value="">Select an option</option>
				{secondDropdownOptions.map((option, index) => (
					<option key={index} value={option}>
					{option}
					</option>
				))}
			</select>

			<label className={SellCss.label}>Brand:</label>
			<select
			required
			disabled={isThirdDropdownDisabled}
			onChange={(e)=>{
				setBrand(e.target.value)
			}}
			value={brand}
			>
				<option value="">Select an option</option>
				{thirdDropdownOptions.map((option, index) => (
					<option key={index} value={option}>
					{option}
					</option>
			))}
			</select>
			<label className={SellCss.label}>Ad Title:</label>
			<input type='text' className={SellCss.input} required
			onChange={(e)=>{
				setName(e.target.value)
			}}
			value={name}></input>

			<label className={SellCss.label}>Description:</label>
			<textarea className={SellCss.text} rows={4}
			onChange={(e)=>{
				setDescription(e.target.value)
			}}
			value={description}></textarea>

			<label className={SellCss.label} >Price: ($)</label>
			<input type='number' className={SellCss.input} required
			onChange={(e)=>{
				setPrice(e.target.value)
			}}
			value={price}></input>

			<label className={SellCss.label}>Condition:</label>
			<select required
			onChange={(e)=>{
				setCondition(e.target.value)
			}}
			value={condition}>
				<option value="">Select an option</option>
				<option value="New">New</option>
				<option value="Used">Used</option>
			</select>
			<label className={SellCss.label}>Color:</label>
			<select required
			onChange={(e)=>{
				setColor(e.target.value)
			}}
			value={color}>
				<option value="">Select an option</option>
				<option value="Red">Red</option>
				<option value="Blue">Blue</option>
				<option value="Yellow">Yellow</option>
				<option value="Green">Green</option>
				<option value="Orange">Orange</option>
				<option value="White">White</option>
				<option value="Black">Black</option>
				<option value="Purple">Purple</option>
				<option value="Pink">Pink</option>
				<option value="Brown">Brown</option>
				<option value="Beige">Beige</option>
				<option value="Gray">Gray</option>
				<option value="Gold">Gold</option>
			</select>
			{error && <div className={SellCss.loading}>{error}</div>}
			<button type='submit' className={SellCss.submitLink}>Post</button>
		</form>
	</div>
  );
};

export default Sell;
