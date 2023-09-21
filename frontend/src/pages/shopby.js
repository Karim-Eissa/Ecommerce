import {useParams } from 'react-router-dom'
import css from './css/shopby.module.css'
import useFetch from '../hooks/usefetch';
import Product from '../components/product';

const Shopby=()=>{
	const { type } = useParams();
	const {content,pending,error,errorTwo} =useFetch(`/api/shopby/${type}`)

	return(
		<div className={css.main}>
			<div className={css.background}>
				<h2>{type}</h2>
				{errorTwo && <div className={css.noprod}>{errorTwo}</div>}
				{error && <div className={css.loading}>{error}</div>}
				{pending && <div className={css.loading}>Loading...</div>}
				{content && <Product content={content}/>}
			</div>
		</div>
	)
}
export default Shopby;
