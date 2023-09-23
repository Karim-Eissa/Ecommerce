import {useParams } from 'react-router-dom'
import css from './css/product.module.css'
import useFetch from '../hooks/usefetch';
import 'font-awesome/css/font-awesome.min.css';
const Product=()=>{
	const { id } = useParams();
	const {content,pending,error,errorTwo} =useFetch(`/api/product/${id}`)
	if(content){console.log(content)}
	return(
		<div className={css.main}>
			<div className={css.background}>
				<h2 className={css.h}></h2>
				{errorTwo && <div className={css.noprod}>{errorTwo}</div>}
				{error && <div className={css.loading}>{error}</div>}
				{pending && <div className={css.loading}>Loading...</div>}
				{content && (
				<div className={css.product}>
					<div className={css.one}>
						<div className={css.productImg}>
							{content.image && <img src={content.image} alt='product'></img>}
						</div>
						<h2 className={css.h}><i className="fa fa-phone fa-xl" style={{ color: 'white' }} /> Contact seller: {content.seller.number}</h2>
					</div>
					<div className={css.two}>
						<h1>{content.name}</h1>
						<p><span>Brand: </span>{content.brand}</p>
						<hr></hr>
						<h4>${content.price}</h4>
						<p><span>Color: </span>{content.color}</p>
						<p><span>Condition: </span>{content.condition}</p>
						<p className={css.about}><span>About this product: </span><br></br>{content.description}</p>
					</div>
				</div>
			)}
			{content && (
				<div className={css.seller}>
					<h2>About the seller:</h2>
					<h4><i className="fa fa-user fa-regular" style={{ color: 'black' }} /> {content.seller.username}</h4>
					<p><i className="fa fa-envelope fa-regular" style={{ color: 'black' }} /> {content.seller.email}</p>
					<p><i className="fa fa-phone fa-regular" style={{ color: 'black' }} /> {content.seller.number}</p>
				</div>
			)}
			</div>
		</div>
	)
}
export default Product;
