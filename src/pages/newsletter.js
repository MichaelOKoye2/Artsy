import '../styles.css/newsletter.css'

const Newsletter = () => {
  return (
    <main>
    <div className="box">
    <div className="news-letter">
        <h3>NEWSLETTER</h3>
        <p>Subscribe to get daily update on new drops and exciting deals</p>
        <input type="text" placeholder='ENTER YOUR NAME' className='msg-input' />
        <button className='btn1'>SUBSCRIBE</button>
    </div>
    </div>
     </main>
  );
}

export default Newsletter;
