import '../styles.css/footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <main>
    <div className="footer">
    <div className="logo-name">
        <h3>ARTSY.</h3>
    </div>

    <div className="footer-links">
    <ul className='links'>
        <Link to={'/'}>Home</Link>
        <Link to={'/MarketPlace'}>Market Place</Link>
        <Link to={'/Auction'}>Auctions</Link>
        <Link to={'/Drops'}>Drops</Link>
    </ul>
    </div>

    <div className="footer-links">
    <ul className='links'>
        <Link to={'/Blog'}>Blog</Link>
        <Link to={'/Wallets'}>Wallets</Link>
        <Link to={'/Rates'}>Rates</Link>
        <Link to={'/High bids'}>High bids</Link>
    </ul>
    </div>
    
    <div className="emails">
    <ul className='links'>
        <Link to={'/'}>artsystudios@gmail.com</Link>
        <Link to={'/'}>Abuja, Nigeria</Link>
    </ul>
    </div>    
    </div>
    <div className="copyright">
        <p>Artsystudios © 2022. All Rights Reserved</p>
    </div>


      
    </main>
    
  );
}

export default Footer;
