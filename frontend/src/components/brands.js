import {Link} from 'react-router-dom'
import css from './css/brands.module.css'

const Brands=(props)=>{
	const gridItemsTwo=props.gridItemsTwo
	return(
		<div className={css.Test}>
			{gridItemsTwo.map((item) => (
			<Link to={item.link}>
				<h5>{item.text}</h5>
			</Link>
			))}
		</div>
	)
}
export default Brands
