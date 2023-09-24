import {Link} from 'react-router-dom'
import HomeCss from './css/home.module.css'
import MyImg from '../assets/images/depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.jpg';
import BackgroundImg from '../assets/images/mm.png';
import apple from '../assets/images/apple.png';
import homenorth from '../assets/images/homenorth.jpg';
import furniture from '../assets/images/furniture.webp';
import Sneakers from '../assets/images/sneakers.webp';
import homesup from '../assets/images/homesup.png';
import Bikes from '../assets/images/bikes.webp';

const Home=()=>{
	return(
		<div className={HomeCss.main}>
			<h2>Project marketplace to buy & sell new and used products</h2>
			<p className={HomeCss.notice}>Note: This website uses fake products for project purposes</p>
			<div className={HomeCss.first}>
				<div className={HomeCss.background}>
					<img src={BackgroundImg} alt='background'></img>
				</div>
				<div className={HomeCss.home}>
					<Link to={'/api/shopbybrand/The-North-Face'} className={HomeCss.box}>
						<h5>The North Face</h5>
						<div className={HomeCss.boxImg}>
							<img src={homenorth} alt='img'></img>
						</div>
					</Link>
					<Link to={'/api/shopbybrand/Apple'}className={HomeCss.boxx}>
						<h5>Apple Products</h5>
						<div className={HomeCss.boxImg}>
							<img src={apple} alt='img'></img>
						</div>
					</Link>
					<Link to={'/api/shopby/Livingroom'}className={HomeCss.box}>
						<h5>Design your livingroom</h5>
						<div className={HomeCss.boxImg}>
							<img src={furniture} alt='img'></img>
						</div>
					</Link>
					<Link to={'/api/Footwear'}className={HomeCss.box}>
						<h5>Footwear</h5>
						<div className={HomeCss.boxImg}>
							<img src={Sneakers} alt='img'></img>
						</div>
					</Link>
					<Link to={'/api/Sports'}className={HomeCss.box}>
						<h5>Shape your body</h5>
						<div className={HomeCss.boxImg}>
							<img src={homesup} alt='img'></img>
						</div>
					</Link>
					<Link to={'/api/Vehicles'}className={HomeCss.box}>
						<h5>Transportation</h5>
						<div className={HomeCss.boxImg}>
							<img src={Bikes}  alt='img'></img>
						</div>
					</Link>
				</div>
			</div>	
		</div>
	)
}
export default Home;
