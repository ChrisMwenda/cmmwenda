// import {useEffect,useState} from "react"
// import { Grid} from "@mui/material";
// import logo5 from "./CHL_logo_RGB.png"
// import logo2 from "./New Yorker Logo_22.png";
// import logo3 from "./seedx-brand-logo.png";
// import logo4 from "./RTHlogo.png";
// import logo1 from "./logo-new-cuselration.png";

export default function Portfolio() {
  return (
    <div className="container">
      <div className="row">
        <h1>Writing Portfolio</h1>
        <p>
          I started writing professionally in 2018, and have written across a
          variety of industries and topics.I like nothing better than working
          with clients over a range of projects. I get to know them, their
          voice, and their business goals inside out—and together we can work on
          a strategy that covers their whole customer experience.
        </p>
      </div>

      {/* Writing Samples*/}

      <div className="row">
        <h2
          style={{ color: "#028495", fontSize: "1.1rem", marginBottom: "5px" }}
        >
          Read less of what I say, see more of what I've done
        </h2>
      </div>
      <div className="blog-outer-box row">
        <div className="blog-sample-box col-6">
        {/* <img style={{maxWidth:"40%"}}src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://seedx.us/wp-content/uploads/2022/12/Group-321.png" alt=""/> */}

          <h3>
            Google Search Console Beginners Guide: Everything You Need To Know
          </h3>
          <p className="content-tags">Marketing Content</p>
          <a
            className="readMoreBtn"
            href="https://seedx.us/google-search-console-beginners-guide-everything-you-need-to-know/"
          >
            Read More
          </a>
        </div>
        <div className="blog-sample-box col-6">
        {/* <img style={{maxWidth:"40%"}}src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://seedx.us/wp-content/uploads/2022/12/1.jpg" alt=""/> */}
          <h3>
            What is Google Performance Max? How to Get Ads Launched in 5
            Minutes!
          </h3>
          <p className="content-tags">Marketing Content</p>
          <a
            className="readMoreBtn"
            href="https://seedx.us/what-is-google-performance-max-how-to-get-ads-launched-in-5-minutes/"
          >
            Read More
          </a>
        </div>

        <div className="blog-sample-box col-6">
          {/* <img style={{maxWidth:"40%"}}src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://seedx.us/wp-content/uploads/2022/12/1.jpg" alt=""/> */}
          <h3>Five Things to Consider in Your Medical Supply Partnerships</h3>
          <p className="content-tags">Medical Content</p>
          <a
            className="readMoreBtn"
            href="https://metadynamicinc.com/five-things-to-consider-in-your-medical-supply-partnerships/"
          >
            Read More
          </a>
        </div>
        <div className="blog-sample-box col-6">
        {/* <img style={{maxWidth:"40%"}}src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://seedx.us/wp-content/uploads/2022/12/1.jpg" alt=""/> */}

          <h3>The Cost of Waiting for Mortgage Rates to Decrease</h3>
           <p className="content-tags">Real estate Content</p>    
           {/* <p style={{fontSize:"0.5rem",color:"chartreuse"}}>Live link</p>        */}
          <a
            className="readMoreBtn"
            href="https://robertcoomergroup.com/2022/11/03/the-cost-of-waiting-for-mortgage-rates-to-decrease/"
          >
            Read More
          </a>
        </div>
      </div>

      <div className="row">
        <div class="line-1"></div>
      </div>
      {/* Testimonials Section */}
      <div className="row">
        <h2>Testimonials</h2>
      </div>
      <div className="testimonial-box row ">
        <div className="testimonials-column col-sm-12 col-4">
          <h4 className="testimonials-header">A Game Changer</h4>
          <p className="testimonials">
            "Chris has been an incredible resource for me as I build my real
            estate business. His writing has really helped me gain traction in
            my business. What has been most impressive is his ability to quickly
            adapt his writing style to "my voice." Chris responds promptly and
            is always open to feedback. We will be working together for the
            foreseeable future."
          </p>
          <p className="client-name"> Ty Holmes, TakeOff Property Group</p>
        </div>

        <div className="testimonials-column col-sm-12 col-md-4">
          <h4 className="testimonials-header">Great Team Player!</h4>
          <p className="testimonials">
            "Chris was great at helping grow my business and giving me insights
            into how to create a better business model. He also is a very kind
            fellow and gave direct advice when he knew it was perennated to the
            success of the job. Great Job Chris!."
          </p>
          <p className="client-name"> Ruth Nancy, SoFLo Suites</p>
        </div>

        <div className="testimonials-column col-sm-12 col-md-4">
          <h4 className="testimonials-header">Super Professional</h4>
          <p className="testimonials">
            "Chris is well versed in content creation for blogs. We hired him to
            help with blog writing and newsletter content for several clients we
            manage. He's responsive, takes feedback well, and works hard to get
            us what we need. We are so happy with his work and attitude"
          </p>
          <p className="client-name"> Zac Cusac, Cuselleration Marketing</p>
        </div>
      </div>
    </div>
  );
}
