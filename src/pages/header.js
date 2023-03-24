import { Link } from 'react-router-dom';
import '../styles.css/header.css'

const Header = () => {
  return (
    <main>
            <div className='header'>
            <div className="artsy">
            <h1>ARTSY.</h1>
            </div>
                <div className='navbar'>
                  <nav>
                      <ul>
                        <Link to={'/'}>Home</Link>
                        <Link>Marketplace</Link>
                        <Link to={'/Auction'}>Auction</Link>
                        <Link>Drop</Link>
                      </ul>
                      
                      
                      
                      
                  </nav>
                </div>
          </div>
          {/* <hr /> */}
      
    </main>
  );
}

export default Header;
