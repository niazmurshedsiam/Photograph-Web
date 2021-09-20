import React from "react";
import about from '../../../images/slider/About.jpg';
const About = () => {
  return (
    <section className="features-service pb-0 pb-md-5 my-5">
      <div className="container mb-5">
        <div className="row mb-5">
          <div className="col-md-5 mb-4 m-md-0">
            <img  style={{ height: "190px",width:"48px", marginTop:"24px", marginRight:"10px",marginLeft:"150px"}} className="img-fluid rounded float-start" src={about} alt="" />
            <img style={{ height: "190px",width:"48px",marginTop:"52px",marginRight:"10px" }} className="img-fluid rounded float-start" src={about} alt="" />
            <img style={{ height: "190px",width:"48px",marginTop:"82px"}} className="img-fluid rounded float-start" src={about} alt="" />
            
          </div>
          <div className="col-md-7 align-self-center">
            <h1 className="text-center">About Us</h1>
            <p className="text-secondary my-5">
              Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder
              text used in design when creating content. It helps designers plan
              out where the content will sit
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
