import React from 'react'
import './styles/Project.css';
import Image from 'next/image';
import Link from 'next/link';


const ProjectSection = () => {
  return (
    <section className='projects'>
      <h2 className='section-title'>Recent Project</h2>
      <div className="projects-grid">
        <div className="project-card">
          {/* Image Section */}
          <div className='img'>
          <Link href='https://countdown-timer-theta-indol.vercel.app/' target='_blank'>
            <Image
            src='/images/moCup.png'
            alt='Project1'
            width={250}
            height={250}
            />
          </Link>
          </div>

          <h3>Countdown Timer</h3>
          <p>A dynamic and responsive Countdown Timer built with Next.js HTML and Tailwind CSS</p>
          <div className="btn-group">
          <div className="btn">
              <Link href='https://countdown-timer-theta-indol.vercel.app/' target='_blank'>Go To Live</Link>
            </div>
      
          </div>

        </div>

        <div className="project-card">
          {/* Image Section */}
          <div className="img">
          <Link href='https://figma-assig-01-7pes.vercel.app/' target='_blank'>
            <Image
            src='/images/moCup3.png'
            alt='Project1'
            width={250}
            height={250}
            />
          </Link>
          </div>

          <h3>Responsive Webpage</h3>
          <p>Pixel-perfect responsive webpage in Next.js HTML and Tailwind CSS matching the Figma design</p>
          <div className="btn-group">
          <div className="btn">
              <Link href='https://figma-assig-01-7pes.vercel.app/' target='_blank'>Go To Live</Link>
            </div>
          </div>
          
        </div>

        <div className="project-card">
          {/* Image Section */}
          <div className="img">
          <Link href='https://clothing-brand-web.vercel.app/' target='_blank'>
            <Image
            src='/images/moCup2.png'
            alt='Project1'
            width={250}
            height={250}
            />
          </Link>
          </div>

          <h3>Fashion Brand Website</h3>
          <p>Discover elegant and stylish collections at Jasmine Sheikh Clothing Brand</p>
          <div className="btn-group">
          <div className="btn">
              <Link href='https://clothing-brand-web.vercel.app/' target='_blank'>Go To Live</Link>
            </div>
   
          </div>
          
        </div>

        <div className="project-card">
          {/* Image Section */}
          <div className="img">
          <Link href='https://hackathon-2-personal-portfolio.vercel.app/' target='_blank'>
            <Image
            src='/images/moCup6.png'
            alt='Project1'
            width={250}
            height={250}
            />
          </Link>
          </div>

          <h3>Portfolio Hackathon2</h3>
          <p>Showcasing a sleek portfolio built with Next.js and Tailwind CSS highlighting my skills and projects for Hackathon2.</p>
          <div className="btn-group">
            <div className="btn">
              <Link href='https://hackathon-2-personal-portfolio.vercel.app/' target='_blank'>Go To Live</Link>
            </div>
          </div>
          
        </div>

        <div className="project-card">
          {/* Image Section */}
          <div className="img">
          <Link href='https://mileston5-eight.vercel.app/' target='_blank'>
            <Image
            src='/images/moCup4.png'
            alt='Project1'
            width={250}
            height={250}
            />
          </Link>
          </div>

          <h3>Resume Builder</h3>
          <p>Create a professional customizable resume with ease using our Shareable Resume Builder</p>
          <div className="btn-group">
          <div className="btn">
              <Link href='https://mileston5-eight.vercel.app/' target='_blank'>Go To Live</Link>
            </div>
    
          </div>
          
        </div>

        <div className="project-card">
          {/* Image Section */}
          <div className="img">
          <Link href='https://hackathon-1-updated-resume-builder-uqqk.vercel.app/' target='_blank'>
            <Image
            src='/images/moCup5.png'
            alt='Project1'
            width={250}
            height={250}
            />
          </Link>
          </div>

          <h3>Personal Resume</h3>
          <p>A static visually appealing resume showcasing your skills and achievements in a clean layout</p>
          <div className="btn-group">
          <div className="btn">
              <Link href='https://hackathon-1-updated-resume-builder-uqqk.vercel.app/' target='_blank'>Go To Live</Link>
            </div>
          </div>
          
        </div>
      </div>

    </section>
  )
}

export default ProjectSection
