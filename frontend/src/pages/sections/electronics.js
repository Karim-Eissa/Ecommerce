import {Link} from 'react-router-dom'
import css from '../css/electronics.module.css'
import phones from '../../assets/images/phones.jpg';
import tablets from '../../assets/images/tablets.jfif';
import laptops from '../../assets/images/laptops.avif';
import watches from '../../assets/images/watches.webp';
import useFetch from '../../hooks/usefetch';
import Brands from '../../components/brands';
import Product from '../../components/product';
const Electronics=()=>{
	const {content,pending,error,errorTwo} =useFetch('/api/section/Electronics')
	const gridItems = [
		{id: 1, imageUrl: phones, text: 'Phones',link:'/api/shopby/Phones'},
		{id: 2,imageUrl: tablets,text: 'Tablets',link: '/api/shopby/Tablets'},
		{id: 3,imageUrl: laptops,text: 'Computers',link: '/api/shopby/Computers'},
		{id: 4,imageUrl: watches,text: 'Watches',link: '/api/shopby/Watches'}
	  ];
	  const gridItemsTwo = [
		{id: 1,text: 'Apple',link:'/api/shopbybrand/Apple'},
		{id: 2,text: 'Samsung',link: '/api/shopbybrand/Samsung'},
		{id: 3,text: 'Huawei',link: '/api/shopbybrand/Huawei'},
		{id: 4,text: 'Oppo',link: '/api/shopbybrand/Oppo'},
		{id: 5,text: 'Xiaomi',link: '/api/shopbybrand/Xiaomi'},
		{id: 6,text: 'Nokia',link: '/api/shopbybrand/Nokia'},
		{id: 7,text: 'Microsoft',link: '/api/shopbybrand/Microsoft'},
		{id: 8,text: 'Google',link: '/api/shopbybrand/Google'},
		{id: 9,text: 'Realme',link: '/api/shopbybrand/Realme'},
		{id: 10,text: 'HTC',link: '/api/shopbybrand/HTC'},
		{id: 11,text: 'HP',link: '/api/shopbybrand/HP'},
		{id: 12,text: 'Dell',link: '/api/shopbybrand/Dell'},
		{id: 13,text: 'Toshiba',link: '/api/shopbybrand/Toshiba'},
		{id: 14,text: 'Asus',link: '/api/shopbybrand/Asus'},
		{id: 15,text: 'Lenovo',link: '/api/shopbybrand/Lenovo'},
		{id: 16,text: 'Cartier',link: '/api/shopbybrand/Cartier'},
		{id: 17,text: 'Rolex',link: '/api/shopbybrand/Rolex'},
		{id: 18,text: 'Casio',link: '/api/shopbybrand/Casio'},
		{id: 19,text: 'Seiko',link: '/api/shopbybrand/Seiko'},
		{id: 20,text: 'Fossil',link: '/api/shopbybrand/Fossil'},
	  ];
	return(
		<div className={css.main}>
			<div className={css.partone}>
				<h2>Shop by category</h2>
				<div className={css.first}>
					{gridItems.map((item) => (
					<Link to={item.link} key={item.id} className={css.boxlink}>
						<div className={css.box}>
							<div className={css.boxImg}>
								<img src={item.imageUrl} alt={item.text} />
							</div>
							<h5>{item.text}</h5>
						</div>
					</Link>
					))}
				</div>
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
export default Electronics;
