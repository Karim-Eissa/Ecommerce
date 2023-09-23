import css from './css/myads.module.css'
import {useAuthContext} from '../hooks/useAuthContext'
import { useState,useEffect } from 'react';
import {Link,useNavigate} from 'react-router-dom'

const Myads=()=>{
	const navigate=useNavigate();
	const {user}=useAuthContext()
	// const { user, isLoading } = useAuthContext(); // Assuming you have an isLoading property

	// // If the authentication context is still loading, you can display a loading indicator.
	// if (isLoading) {
	// 	return <div>Loading...</div>;
	// }

	// // If the user is not authenticated, redirect to the login page.
	// if (!user) {
	// 	return <Navigate to="/login" />;
	// }
	const backendURL = process.env.REACT_APP_BACKEND;
	const useFetch=(url)=>{
		const [content,setContent]=useState(null)
		const [pending,setPending]=useState(true)
		const [error,setError]=useState(null)
		const [errorTwo,setErrorTwo]=useState(null)
		useEffect(()=>{
			const urll=backendURL+url
			const fetchData=async()=>{
				const response= await fetch(urll,{
					method: 'GET',
					crossDomain:true,
					headers: {
					  'Content-Type': 'application/json',
					  'Authorization':`Bearer ${user.token}`,
					  Accept:'application/json',
					  "Access-Control-Allow-Origin":"*"
					},
				  })
				const json=await response.json()
				if(!response.ok){
					if(response.status===404 || response.status===304){
						setErrorTwo("No products to display")
						setPending(false)
					}else{
						setError("Couldn't load content")
						setPending(false)
					}
				}
				if(response.ok){
					setContent(json)
					setPending(false)
				}
			}
			fetchData();
		},[url])
		return {content,pending,error,errorTwo}
	}
	const {content,pending,error,errorTwo} =useFetch(`/api/myads`)
	const handleDelete = async (id) => {
		const confirmDelete = window.confirm('Are you sure you want to delete this ad?');
		if (confirmDelete) {
		  try {
			await fetch(`${backendURL}/api/myads/${id}`, { // Pass the ad's ID in the URL
			  method: 'DELETE',
			  crossDomain: true,
			  headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${user.token}`,
				Accept: 'application/json',
				'Access-Control-Allow-Origin': '*'
			  },
			});
			navigate('/')
		  } catch (error) {
			console.error('Error deleting ad:', error);
		  }
		}
	  }
	return(
		<div className={css.main}>
			<div className={css.background}>
				<h2>My Ads</h2>
				{errorTwo && <div className={css.noprod}>{errorTwo}</div>}
				{error && <div className={css.loading}>{error}</div>}
				{pending && <div className={css.loading}>Loading...</div>}
				{(content && content.map(product=>(
					<div className={css.total}>
						<Link to={'/api/product/'+product._id} className={css.productLink}>
							<div className={css.all}>
								<div className={css.flex}>
									<div className={css.productImg}>
										{product.image && <img src={product.image} alt='product'></img>}
									</div>
									<div className={css.two}>
										<h3 key={product._id} className={css.price}>${product.price}</h3>
										<h1 key={product._id}>{product.name}</h1>
										<h3 key={product._id} className={css.color}>{product.color}</h3>
									</div>
								</div>
							</div>
						</Link>
						<button onClick={() => handleDelete(product._id)} className={css.delete}>Delete Ad</button>
					</div>
				)))}
			</div>
		</div>
	)
}
export default Myads;
