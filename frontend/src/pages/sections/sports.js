import {Link} from 'react-router-dom'
import css from '../css/sports.module.css'
import Apparel from '../../assets/images/apparel.jpeg';
import Equipment from '../../assets/images/equipment.jpeg';
import Accessories from '../../assets/images/accessories.jpg';
import Fans from '../../assets/images/fans.jpg';
import Nutrition from '../../assets/images/nutrition.avif';
import useFetch from '../../hooks/usefetch';
import Brands from '../../components/brands';
import Product from '../../components/product';
const Sports=()=>{
	const {content,pending,error,errorTwo} =useFetch('/api/section/Sports')

	const gridItems = [
		{id: 1,imageUrl: Apparel,text: 'Apparel',link: '/api/shopby/Apparel'},
		{id: 2,imageUrl: Equipment,text: 'Equipment',link: '/api/shopby/Equipment'},
		{id: 3,imageUrl: Accessories,text: 'Accessories',link: '/api/shopby/Accessories'},
		{id: 4,imageUrl: Fans,text: 'Fans',link: '/api/shopby/Fans'},
		{id: 5,imageUrl: Nutrition,text: 'Nutrition',link: '/api/shopby/Nutrition'},
	  ];
	  const gridItemsTwo = [
		{id: 1,text: 'Adidas',link:'/api/shopbybrand/Adidas'},
		{id: 2,text: 'New Balance',link: '/api/shopbybrand/New-Balance'},
		{id: 3,text: 'Nike',link: '/api/shopbybrand/Nike'},
		{id: 4,text: 'Reebok',link: '/api/shopbybrand/Reebok'},
		{id: 5,text: 'Under Armour',link: '/api/shopbybrand/Under-Armour'},
		{id: 6,text: 'Speedo',link: '/api/shopbybrand/Speedo'},
		{id: 7,text: 'Fila',link: '/api/shopbybrand/Fila'},
		{id: 8,text: 'Puma',link: '/api/shopbybrand/Puma'},
		{id: 9,text: 'Diadora',link: '/api/shopbybrand/Diadora'},
		{id: 10,text: 'Colombia',link: '/api/shopbybrand/Colombia'},
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
export default Sports;
