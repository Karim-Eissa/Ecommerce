import {Link} from 'react-router-dom'
import css from './css/product.module.css'

const Product=(props)=>{
	const content=props.content
	return(
		<div className={css.allProducts}>
			{(content && content.map(product=>(
				<Link to={'/api/product/'+product._id} className={css.productLink}>
					<div className={css.productImg}>
						{product.image && <img src={product.image} alt='product'></img>}
					</div>
					<p key={product._id} className={css.price}>${product.price}</p>
					<h4 key={product._id}>{product.username}</h4>
					<p key={product._id} className={css.color}>{product.color}</p>
				</Link>
			)))}
		</div>
	)
}
export default Product
