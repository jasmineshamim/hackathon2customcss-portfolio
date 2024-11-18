'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { TbBrandGithubFilled } from 'react-icons/tb';
import { IoLogoVercel } from "react-icons/io5";
import Typed from 'typed.js';
import './styles/Hero.css';

const HeroSection = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Web Developer', 'Frontend Developer', 'Backend Developer'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="about">
      <div className="about-container">
        {/* Profile Image */}
        <div className="img">
          <Image
            src={'/images/image.png'}
            alt="profile"
            width={300}
            height={300}
          />
        </div>
        {/* Info Section */}
        <div className="info-box">
          <div className="text">
            <h3>Hello I&apos;m</h3>
            <h2>Jasmine Sheikh</h2>
            <span ref={typedRef}> </span>
            <p>
              Im a Web Developer with extensive experience both Frontend and Backend development I specialize in creating and designing dynamic responsive websites that deliver an exceptional user experience
            </p>
          </div>

          <div className="btn-group">
            <button className="btn">
              <Link href="/contactus" target="_blank">
                Hire Me
              </Link>
            </button>
          </div>

          {/* Social Icons */}
          <div className="socials-icon">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/jasmine-sheikh-8116b62ba/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BVPlPU2QbTE2AdcMEJbyqoA%3D%3D" target="_blank">
                <FaLinkedinIn />
              </a>
            </div>
            <div className="social-icon">
              <a href="https://www.twitter.com" target="_blank">
                <FaTwitter />
              </a>
            </div>
            <div className="social-icon">
              <a href="https://github.com/jasmineshamim" target="_blank">
                <TbBrandGithubFilled />
              </a>
            </div>
            <div className="social-icon">
              <a href="https://www.facebook.com/profile.php?id=61556128057734" target="_blank">
                <FaFacebookF />
              </a>
            </div>
            <div className="social-icon">
              <a href="https://www.facebook.com/profile.php?id=61556128057734" target="_blank">
                <IoLogoVercel  className='vercel'/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
