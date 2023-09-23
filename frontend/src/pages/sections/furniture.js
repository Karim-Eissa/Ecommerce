import {Link} from 'react-router-dom'
import css from '../css/furniture.module.css';
import Livingroom from '../../assets/images/livingroom.jpg';
import Bedroom from '../../assets/images/bedroom.jpg';
import Diningroom from '../../assets/images/diningroom.jpg';
import Kitchen from '../../assets/images/kitchen.jpg';
import Outdoor from '../../assets/images/outdoor.jpg';
import useFetch from '../../hooks/usefetch';
import Brands from '../../components/brands';
import Product from '../../components/product';

const Furniture=()=>{
	const {content,pending,error,errorTwo} =useFetch('/api/section/Furniture')

	const gridItems = [
		{id: 1,imageUrl:Livingroom,text: 'Livingroom',link: `/api/shopby/Livingroom`},
		{id: 2,imageUrl: Bedroom,text: 'Bedroom',link: '/api/shopby/Bedroom'},
		{id: 3,imageUrl: Diningroom,text: 'Diningroom',link: '/api/shopby/Diningroom'},
		{id: 4,imageUrl: Kitchen,text: 'Kitchen',link: '/api/shopby/Kitchen'},
		{id: 5,imageUrl: Outdoor,text: 'Outdoor',link: '/api/shopby/Outdoor'},
	  ];
	  const gridItemsTwo = [
		{id: 1,text: 'Ikea',link:'/api/shopbybrand/Ikea'},
		{id: 2,text: 'Ashley Furniture',link: '/api/shopbybrand/Ashley-Furniture'},
		{id: 3,text: 'La-Z-boy',link: '/api/shopbybrand/La-Z-boy'},
		{id: 4,text: 'Herman Miller',link: '/api/shopbybrand/Herman-Miller'},
		{id: 5,text: 'Pottery Barn',link: '/api/shopbybrand/Pottery-Barn'},
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
export default Furniture;
