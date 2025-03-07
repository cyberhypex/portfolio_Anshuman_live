import React from "react";
import myImage from "../assets/myImage.jpg";


export default function About() {
  return (
    <>
  <h1 className="fw-bold text-center mb-5 " style={{ textShadow: "2px 2px 10px rgba(0, 0, 0, 0.4)", marginBottom: "0" }}>About</h1>
    <div className="about-page" >
      <div className="container mt-5">
        <div className="row d-flex align-items-center flex-column-reverse flex-lg-row text-center text-lg-start">
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <p className="fw-medium">
              👋 Hi, yes !! You guessed it right.  I am <strong>Anshuman Gogoi</strong>, an aspiring SDE with a lot of interest in backend 🚀, which is prominent from this website as well 😂. I love doing backend development 💻, DSA 📊, and also hold a keen interest in Competitive Programming 🏆. My key skills include backend development using <strong>Spring Boot</strong>, <strong>MySQL</strong> database, and I am always eager to learn more about other tech stacks 🔥. Looking for a great start in the SDE industry 💪.
            </p>
           
          </div>
          <div className="col-lg-6 col-md-12 d-flex justify-content-center">
            <img
              src={myImage}
              alt="This is a photo"
              className="img-fluid shadow-lg"
              style={{ maxWidth: "250px", width: "80%", borderRadius: "10px" }}
            />
          </div>
          
        </div>
      </div>
    </div>
    </>
  );
}


