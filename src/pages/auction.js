import '../styles.css/auction.css'
import { Link } from 'react-router-dom';

const Auction = () => {
  return (
    <main>
    {/* <div className="header1">
        <p>
            <Link to={'/'}>Home</Link>
            / 
            <span>Auction</span>
        </p>
        <p>Here’s an overview of products actively on auction, explore!</p>
    </div> */}

    <div className="slideshow">
        <div className="div1"></div>
        <div className="div2"></div>
        <div className="div3"></div>
    </div>

    <div className="topbids">
        <h4>Top bids from popular creators</h4>
    </div>
    <div className="flexdiv">
        <div className='flex'>
        <div className='flex1'>
            <div className="outofbox">
                <div className="heart"></div>
                <div className="img1"></div>
                <h4>Out of the Box</h4>
            </div>
            <div className="table">
            <table>
                <tbody>
                    <tr>
                        <td>Creator:</td>
                        <td>Dan Murray</td>
                    </tr>
                    <tr>
                        <td>Date</td>
                        <td>23/03/2023</td>
                    </tr>
                    <tr>
                        <td>Highest bid: </td>
                        <td>0.57ETH</td>
                    </tr>
                </tbody>
            </table>
            <div className="bidcontainer">
                <h5>
                    <span>Current Bid</span>
                    <span>0.987</span>
                </h5>
                <button>Place bid</button>
            </div>
        </div>
        
        </div>

        <div className='flex2'>
            <div className="fallingapart">
                <div className="heart"></div>
                <div className="img2"></div>
                <h4>Falling Apart</h4>
            </div>
            <div className="table">
            <table>
                <tbody>
                    <tr>
                        <td>Creator:</td>
                        <td>Jacob Banks</td>
                    </tr>
                    <tr>
                        <td>Date</td>
                        <td>23/03/2023</td>
                    </tr>
                    <tr>
                        <td>Highest bid: </td>
                        <td>0.34 ETH</td>
                    </tr>
                </tbody>
            </table>
            <div className="bidcontainer">
                <h5>
                    <span>Current Bid</span>
                    <span>0.99</span>
                </h5>
                <button>Place bid</button>
            </div>
        </div>
        </div>
        </div>
    </div>
    
      
    </main>
  )
}

export default Auction
