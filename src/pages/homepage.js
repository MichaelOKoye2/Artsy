import '../styles.css/homepage.css'


const Homepage = () => {
  return (
      <main>
         <div className="text">
            <h1>Photography is poetry & beautiful untold stories</h1>
          <div className="flip-through">
            <p>Flip through more than 10,000 vintage shots, old photographs, historic <br /> images and captures seemlessly in one place. Register to get top access.</p>
          </div>
        </div>

        <div className="carousel">
          <div className="img-1"></div>
          <div className="img-2"></div>
          <div className="img-3"></div>
          <div className="img-4"></div>
          <div className="img-5"></div>
        </div>


        <div className="featured">
          <h1>Featured Products</h1>
          <hr />

          <div className="boolean_egyptian1">
            <div className="beimg1"></div>
            <div className="betext1">
            <h2>The Boolean Egyptian</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ullam, <br /> corporis voluptatem atque laboriosam soluta ab necessitatibus pariatur?Re <br /> Reiciendis at itaque perferendis? Vel, esse quasi?</p>
            </div>
          </div>
          <hr />

          <div className="boolean_egyptian2">
              <div className="beimg2"></div>
              <div className="betext1">
              <h2>The Boolean Egyptian</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ullam, <br /> corporis voluptatem atque laboriosam soluta ab necessitatibus pariatur?Re <br /> Reiciendis at itaque perferendis? Vel, esse quasi?</p>
              </div>
          </div>
          <hr />

          <div className="boolean_egyptian3">
              <div className="beimg3"></div>
              <div className="betext1">
              <h2>The Boolean Egyptian</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ullam, <br /> corporis voluptatem atque laboriosam soluta ab necessitatibus pariatur?Re <br /> Reiciendis at itaque perferendis? Vel, esse quasi?</p>
              </div>
          </div>
        </div>
      </main>
      
   
  );
}

export default Homepage;
