import {Link} from 'react-router-dom'
import css from '../css/furniture.module.css'
import Cars from '../../assets/images/cars.jpeg';
import Motorcycles from '../../assets/images/motorcycles.jpg';
import Bikes from '../../assets/images/bikes.webp';
import van from '../../assets/images/van.jpg';
import beachbuggies from '../../assets/images/beachbuggy.avif';
import useFetch from '../../hooks/usefetch';
import Brands from '../../components/brands';
import Product from '../../components/product';

const Vehicles=()=>{
	const {content,pending,error,errorTwo} =useFetch('/api/section/Vehicles')

	const gridItems = [
		{id: 1,imageUrl:Cars,text: 'Cars',link: '/api/shopby/Cars'},
		{id: 2,imageUrl: Motorcycles,text: 'Motorcycles',link: '/api/shopby/Motorcycles'},
		{id: 3,imageUrl: Bikes,text: 'Bikes',link: '/api/shopby/Bikes'},
		{id: 4,imageUrl: van,text: 'Vans',link: '/api/shopby/Vans'},
		{id: 5,imageUrl: beachbuggies,text: 'Beach Buggies',link: '/api/shopby/Beach-Buggies'},
	  ];
	  const gridItemsTwo = [
		{id: 1,text: 'Renault',link:'/api/shopbybrand/Renault'},
		{id: 2,text: 'Nissan',link: '/api/shopbybrand/Nissan'},
		{id: 3,text: 'Toyota',link: '/api/shopbybrand/Toyota'},
		{id: 4,text: 'BMW',link: '/api/shopbybrand/BMW'},
		{id: 5,text: 'Mercedes',link: '/api/shopbybrand/Mercedes'},
		{id: 6,text: 'Audi',link: '/api/shopbybrand/Audi'},
		{id: 7,text: 'Seat',link: '/api/shopbybrand/MicrosSeatoft'},
		{id: 8,text: 'Hyundai',link: '/api/shopbybrand/Hyundai'},
		{id: 9,text: 'Ford',link: '/api/shopbybrand/Ford'},
		{id: 10,text: 'Volkswagen',link: '/api/shopbybrand/Volkswagen'},
		{id: 11,text: 'Skoda',link: '/api/shopbybrand/Skoda'},
		{id: 12,text: 'Daihatsu',link: '/api/shopbybrand/Daihatsu'},
		{id: 13,text: 'Mitsubishi',link: '/api/shopbybrand/Mitsubishi'},
		{id: 14,text: 'Peugeot',link: '/api/shopbybrand/Peugeot'},
		{id: 15,text: 'Kia',link: '/api/shopbybrand/Kia'},
		{id: 16,text: 'Fiat',link: '/api/shopbybrand/Fiat'},
		{id: 17,text: 'Honda',link: '/api/shopbybrand/Honda'},
		{id: 18,text: 'Kawasaki',link: '/api/shopbybrand/Kawasaki'},
		{id: 19,text: 'CBR',link: '/api/shopbybrand/CBR'},
		{id: 20,text: 'Yamaha',link: '/api/shopbybrand/Yamaha'},
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
export default Vehicles;
