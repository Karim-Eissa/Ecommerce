import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react'; // Import useRef and useEffect
import NavbarCss from './css/navbar.module.css';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation
import {useAuthContext} from '../hooks/useAuthContext'
import {useLogout} from '../hooks/useLogout'
import { FaTshirt,FaShoePrints,FaMobile, FaCouch, FaFootballBall, FaCar } from 'react-icons/fa';
import 'font-awesome/css/font-awesome.min.css';

const Navbar = () => {
  const backendURL = process.env.REACT_APP_BACKEND;
  const {user}=useAuthContext()
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const navigate = useNavigate();
  const searchResultsRef = useRef(null); // Initialize searchResultsRef with useRef
  const location = useLocation(); // Get the current location
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const toggleAccountMenu = () => {
    setIsAccountMenuOpen(!isAccountMenuOpen);
  };
  // Add a useEffect hook to add a click event listener
  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (searchResultsRef.current && !searchResultsRef.current.contains(e.target)) {
        setIsSearchActive(false);
      }
    };

    if (isSearchActive) {
      document.addEventListener('click', handleDocumentClick);
    } else {
      document.removeEventListener('click', handleDocumentClick);
    }

    // Cleanup: remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isSearchActive]);

  // Use the useEffect hook to listen for changes in the URL pathname
  useEffect(() => {
    setIsSearchActive(false); // Close the search results when the URL changes
    if (window.location.pathname !== location.pathname) {
      window.location.reload();
    }  }, [location.pathname]);

  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`/api/search?query=${searchQuery}`);
  };

 const handleInputChange = async (e) => {
  const query = e.target.value;
  setSearchQuery(query);

  if (query.trim() !== '') {
    try {
      const response = await fetch(`${backendURL}/api/search?query=${query}`);
      const data = await response.json();
      setSearchResults(data);
      setIsSearchActive(true);
    } catch (error) {
      console.error('Error searching products:', error);
    }
  } else {
    setSearchResults([]);
    setIsSearchActive(false);
  }
};
const {logout}=useLogout()
const handleLogout=()=>{
  const confirmLogout = window.confirm('Are you sure you want to logout?');
  if(confirmLogout){logout()}
}
  return (
    <header>
      <div className={NavbarCss.navOne}>
        <Link to='/' className={NavbarCss.mainLink}>
          <h1>E-Shop</h1>
          <p>You're online marketplace</p>
        </Link>
      </div>
      <div className={NavbarCss.navTwo}>
        <div className={NavbarCss.navTwoInner}>
          <form onSubmit={handleSearch} action=''>
            <input
              type='text'
              name='search'
              id='search'
              placeholder='Find products...'
              value={searchQuery}
              onChange={handleInputChange}
              onFocus={() => setIsSearchActive(true)}
            />
            <button type='submit'>Search</button>
          </form>
          {isSearchActive && searchResults.length > 0 && (
            <div className={NavbarCss.searchResults} ref={searchResultsRef}>
              <ul>
                {searchResults.map((result) => (
                  <li key={result._id}>
                    <Link
                      to={`/api/product/${result._id}`}
                      onClick={() => setIsSearchActive(false)}
                    >
                      {result.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className={NavbarCss.mainBtns}>
          {!user && <Link to='/login' className={NavbarCss.login}>Login</Link>}
          {user && (
          <div className={NavbarCss.accountMenu}>
            <button onClick={toggleAccountMenu} className={NavbarCss.account}>
              Account
            </button>
            {isAccountMenuOpen && (
              <div className={NavbarCss.accountMenuContent}>
                {/* Add content for the account menu here */}
                <h4>Hi, {user.username}</h4>
                <Link to='/api/myads' className={NavbarCss.myads}>My ads</Link>
                <Link onClick={handleLogout} className={NavbarCss.logout}>Logout</Link>
              </div>
            )}
          </div>
          )}
          <Link to='/api/sell' className={NavbarCss.sellBtn}>
            <button>Sell</button>
          </Link>
        </div>
      </div>
      <div className={NavbarCss.navThree}>
        <Link to='/api/electronics' className={NavbarCss.category}><FaMobile color="crimson" className={NavbarCss.categoryIcon}/><p> Electronics</p></Link>
        <Link to='/api/clothing' className={NavbarCss.category}><FaTshirt color="crimson" className={NavbarCss.categoryIcon}/><p> Clothing</p></Link>
        <Link to='/api/footwear' className={NavbarCss.category}><FaShoePrints color="crimson" className={NavbarCss.categoryIcon}/><p> Footwear</p></Link>
        <Link to='/api/sports' className={NavbarCss.category}><FaFootballBall color="crimson" className={NavbarCss.categoryIcon} /><p> Sports</p></Link>
        <Link to='/api/furniture' className={NavbarCss.category}><FaCouch color="crimson" className={NavbarCss.categoryIcon} /><p> Furniture</p></Link>
        <Link to='/api/vehicles' className={NavbarCss.category}><FaCar color="crimson" className={NavbarCss.categoryIcon} /><p> Vehicles</p></Link>
      </div>
    </header>
  );
};

export default Navbar;
