import {Link} from 'react-router-dom'
import css from '../css/clothing.module.css'
import tshirt from '../../assets/images/tshirt.jpg';
import pants from '../../assets/images/pants.webp';
import shorts from '../../assets/images/shorts.jpg';
import suits from '../../assets/images/suits.avif';
import underwear from '../../assets/images/underwear.webp';
import jackets from '../../assets/images/jackets.jpg';
import hoodies from '../../assets/images/hoodies.webp';
import Socks from '../../assets/images/socks.webp';
import useFetch from '../../hooks/usefetch';
import Brands from '../../components/brands';
import Product from '../../components/product';

const Clothing=()=>{
	const {content,pending,error,errorTwo} =useFetch('/api/section/Clothing')

	const gridItems = [
		{id: 1,imageUrl: tshirt,text: 'T-shirts',link: '/api/shopby/T-shirts'},
		{id: 2,imageUrl: hoodies,text: 'Hoodies',link: '/api/shopby/Hoodies'},
		{id: 3,imageUrl: jackets,text: 'Jackets',link: '/api/shopby/Jackets'},
		{id: 4,imageUrl: suits,text: 'Suits',link: '/api/shopby/Suits'},
		{id: 5,imageUrl: pants,text: 'Pants',link: '/api/shopby/Pants'},
		{id: 6,imageUrl:shorts,text: 'Shorts',link: '/api/shopby/Shorts'},
		{id: 7,imageUrl:underwear,text: 'Underwear',link: '/api/shopby/Underwear'},
		{id: 8,imageUrl:Socks,text: 'Socks',link: '/api/shopby/Socks'},
	  ];
	  const gridItemsTwo = [
		{id: 1,text: 'Adidas',link:'/api/shopbybrand/Adidas'},
		{id: 2,text: 'American Eagle',link: '/api/shopbybrand/American-Eagle'},
		{id: 3,text: 'Armani',link: '/api/shopbybrand/Armani'},
		{id: 4,text: 'Calvin Klein',link: '/api/shopbybrand/Calvin-Klein'},
		{id: 5,text: 'Fendi',link: '/api/shopbybrand/Fendi'},
		{id: 6,text: 'Gucci',link: '/api/shopbybrand/Gucci'},
		{id: 7,text: 'H&M',link: '/api/shopbybrand/H&M'},
		{id: 8,text: 'Hollister',link: '/api/shopbybrand/GoogHollisterle'},
		{id: 9,text: 'Hugo Boss',link: '/api/shopbybrand/Hugo-Boss'},
		{id: 10,text: 'Lacoste',link: '/api/shopbybrand/Lacoste'},
		{id: 11,text: 'Louis Vuitton',link: '/api/shopbybrand/Louis-Vuitton'},
		{id: 12,text: 'New Balance',link: '/api/shopbybrand/New-Balance'},
		{id: 13,text: 'Nike',link: '/api/shopbybrand/Nike'},
		{id: 14,text: 'The North Face',link: '/api/shopbybrand/The-North-Face'},
		{id: 15,text: 'Polo Raulph Lauren',link: '/api/shopbybrand/Polo-Raulph-Lauren'},
		{id: 16,text: 'Reebok',link: '/api/shopbybrand/Reebok'},
		{id: 17,text: 'Timberland',link: '/api/shopbybrand/Timberland'},
		{id: 18,text: 'Tommy Hilfiger',link: '/api/shopbybrand/Tommy-Hilfiger'},
		{id: 19,text: 'Under Armour',link: '/api/shopbybrand/Under-Armour'},
		{id: 20,text: 'Zara',link: '/api/shopbybrand/Zara'},
	  ];
	return(
		<div className={css.main}>
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
export default Clothing;
