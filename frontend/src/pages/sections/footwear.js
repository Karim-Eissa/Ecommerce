import {Link} from 'react-router-dom'
import css from '../css/footwear.module.css'
import Athletic from '../../assets/images/athletic.jpg';
import Sneakers from '../../assets/images/sneakers.webp';
import Casual from '../../assets/images/casual.jpg';
import Formal from '../../assets/images/formal.webp';
import Boots from '../../assets/images/boots.jpg';
import Sandals from '../../assets/images/sandals.jpeg';
import Slippers from '../../assets/images/slippers.jpg';
import useFetch from '../../hooks/usefetch';
import Brands from '../../components/brands';
import Product from '../../components/product';

const Footwear=()=>{
	const {content,pending,error,errorTwo} =useFetch('/api/section/Footwear')
	const gridItems = [
		{id: 1,imageUrl: Athletic,text: 'Athletic',link: '/api/shopby/Athletic'},
		{id: 2,imageUrl: Casual,text: 'Casual',link: '/api/shopby/Casual'},
		{id: 3,imageUrl: Sneakers,text: 'Sneakers',link: '/api/shopby/Sneakers'},
		{id: 4,imageUrl: Boots,text: 'Boots',link: '/api/shopby/Boots'},
		{id: 5,imageUrl: Formal,text: 'Formal',link: '/api/shopby/Formal'},
		{id: 6,imageUrl:Sandals,text: 'Sandals',link: '/api/shopby/Sandals'},
		{id: 7,imageUrl:Slippers,text: 'Slippers',link: '/api/shopby/Slippers'},
	  ];
	  const gridItemsTwo = [
		{id: 1,text: 'Adidas',link:'/api/shopbybrand/Adidas'},
		{id: 2,text: 'New Balance',link: '/api/shopbybrand/New-Balance'},
		{id: 3,text: 'Nike',link: '/api/shopbybrand/Nike'},
		{id: 4,text: 'Reebok',link: '/api/shopbybrand/Reebok'},
		{id: 5,text: 'Under Armour',link: '/api/shopbybrand/Under-Armour'},
		{id: 6,text: 'Skechers',link: '/api/shopbybrand/Skechers'},
		{id: 7,text: 'Fila',link: '/api/shopbybrand/Fila'},
		{id: 8,text: 'Puma',link: '/api/shopbybrand/Puma'},
		{id: 9,text: 'Vans',link: '/api/shopbybrand/Vans'},
		{id: 10,text: 'Converse',link: '/api/shopbybrand/Converse'},
	  ];
	return(
		<div className={css.main}>
			<h2>Shop by category</h2>
			<div className={css.first}>
			{gridItems.map((item) => (
				<Link to={item.link}key={item.id} className={css.boxlink}>
					<div className={css.box}>
						<div className={css.boxImg}>
							<img src={item.imageUrl} alt={item.text} />
						</div>
						<h5>{item.text}</h5>
					</div>
				</Link>
				))}
			</div>
			<div className={css.partTwo}>
				<h2>Shop by brand</h2>
				<Brands gridItemsTwo={gridItemsTwo} />
			</div>
			<div className={css.background}>
				<h2></h2>
				{errorTwo && <div className={css.noprod}>{errorTwo}</div>}
				{error && <div className={css.loading}>{error}</div>}
				{pending && <div className={css.loading}>Loading...</div>}
 				{content && <Product content={content}/>}
			</div>
		</div>
	)
}
export default Footwear;
