import React from 'react';


const HeroSection = () => {
  return (
    <div className="container py-5 m-5 ">
   
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-md-6 text-center text-md-start">
          <h1 className="fw-bold"> Hi, I'm John Deo.</h1>
          <p className="text-muted">
            A freelance Web developer from London. I convert custom web designs
            to bootstrap templates.
          </p>
          <p className="text-muted">I make YouTube videos and write Blog.</p>
          <button className="btn btn-primary mt-3">I'M AVAILABLE</button>
          <div className="social-icons mt-4">
            <a href="#">
              <i className="bi bi-facebook mx-2"></i>
            </a>
            <a href="#">
              <i className="bi bi-twitter mx-2"></i>
            </a>
            <a href="#">
              <i className="bi bi-github mx-2"></i>
            </a>
            <a href="#">
              <i className="bi bi-dribbble mx-2"></i>
            </a>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default HeroSection;
