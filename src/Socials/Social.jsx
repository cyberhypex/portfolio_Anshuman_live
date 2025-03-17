import React from 'react'

import SocialComponent from './SocialComponent';
import li from '../assets/linkedin.jpeg';
import x from '../assets/twitter.png';
import m from '../assets/facebook.png';
import ig from '../assets/instagram.jpg';
import gh from '../assets/github.png';

export default function Social(props) {

    const socials=[
        {
            name:"LinkedIn",
            url:"https://www.linkedin.com/in/anshuman-gogoi-b99671211/",
            image:li

        },
        {
            name:"X",
            url:"https://x.com/anshu_26_",
            image:x
        },
        {
            name:"Meta",
            url:"https://www.facebook.com/anshuman.gogoi.10485/",
            image:m
        },
        {
            name:"Instagram",
            url:"https://www.instagram.com/anshu_26__/?hl=en",
            image:ig
        },
        {
            name:"Github",
            url:"https://github.com/cyberhypex",
            image:gh

        }
    ]
    

    return (
        <>
          <h1 className="fw-bold text-center my-4" style={{ textShadow: "2px 2px 10px rgba(0, 0, 0, 0.4)" }}>
            Connect With Me!!
          </h1>
          <div className="d-flex justify-content-center gap-4 flex-wrap">
            {socials.map((social, index) => (
              <SocialComponent key={index} link={social.url} image={social.image} name={social.name} />
            ))}
          </div>
        </>
      );
      
}
