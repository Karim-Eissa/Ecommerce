// SearchResults.js
import 'font-awesome/css/font-awesome.min.css';
import css from './css/shopby.module.css';
import useFetch from '../hooks/usefetch';
import Product from '../components/product';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const searchValue = new URLSearchParams(location.search).get('query');
  console.log("searchValue:", searchValue);
	const { content, pending,error,errorTwo } = useFetch(`/api/search?query=${searchValue}`);

    return (
    <div className={css.main}>
      <div className={css.background}>
        <h2><i className="fa fa-search fa-regular" style={{ color: 'white' }}></i>   {searchValue}</h2>
        {errorTwo && <div className={css.noprod}>{errorTwo}</div>}
				{error && <div className={css.loading}>{error}</div>}
				{pending && <div className={css.loading}>Loading...</div>}
				{content && <Product content={content}/>}
      </div>
    </div>
  );
};

export default SearchResults;
