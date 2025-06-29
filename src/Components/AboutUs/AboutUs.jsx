import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import team1 from '../../assets/team1.webp'
import team2 from '../../assets/team2.jpg'
import team3 from '../../assets/team3.jpg'
import team4 from '../../assets/team4.jpg'
import team5 from '../../assets/team5.webp'
import team6 from '../../assets/team6.jpg'
import team7 from '../../assets/team7.jpg'



const AboutUs = () => {

  const teamRef = useRef(null)


  const viewTeam = () => {
      teamRef.current.scrollIntoView({ behavior: "smooth" });
  }  



  return (
    <section id="about" className="py-20 md:px-20 lg:px-20 bg-gradient-to-b from-white via-gray-400 via-80% to-gray-200">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          {/* <!-- Heading --> */}
          <h2 className="text-purple-400 text-lg mb-2" data-aos="fade-down">
            About Us
          </h2>
          <h3 className="mb-4 text-3xl font-bold text-gray-700 section-title" data-aos="fade-down">
            Innovating the Digital Future
          </h3>
          <p className="mb-8 max-w-3xl text-gray-600" data-aos="fade-down">
            At <b>Malos Technologies</b>, we specialize in crafting high-performance web applications and custom 
            software solutions. With a passion for innovation and a commitment to excellence, we help businesses
            transform their digital presence and achieve success.          
          </p>

          {/* <!-- About Cards Section --> */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* <!-- Card 1 --> */}
            <div className="rounded-lg border border-gray-800 bg-[#2e2e2e] p-6 text-center">
              <h4 className="mb-2 text-3xl font-bold text-purple-400">6+</h4>
              <p className="text-gray-400 font-semibold">Years Experience</p>
            </div>
            <div className="rounded-lg border border-gray-800 bg-[#2e2e2e] p-6 text-center">
              <h4 className="mb-2 text-3xl font-bold text-purple-400">500+</h4>
              <p className="text-gray-400 font-semibold">Successful Projects</p>
            </div>
            <div className="rounded-lg border border-gray-800 bg-[#2e2e2e] p-6 text-center">
              <h4 className="mb-2 text-3xl font-bold text-purple-400">130%</h4>
              <p className="text-gray-400 font-semibold">Global Reach</p>
            </div>
            <div className="rounded-lg border border-gray-800 bg-[#2e2e2e] p-6 text-center">
              <h4 className="mb-2 text-3xl font-bold text-purple-400">100%</h4>
              <p className="text-gray-400 font-semibold">Trusted by Businesses</p>
            </div>
          
          </div>
        </div>

        {/* <!-- Buttons Section --> */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8" data-aos="fade-up">
          <a onClick={viewTeam} className="cursor-pointer rounded-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-8">
            Meet Our Team
          </a>
          <Link
            to={'/contact'}
            className="cursor-pointer rounded-full border-2 py-3 px-8 border-white text-gray-600 font-semibold hover:bg-white hover:text-purple-900 transition duration-300 ease-in-out"
            >
            Contact Us
          </Link>
          
        </div>

        {/* Meet Our Team */}
        <section ref={teamRef} id="our-team" className="pt-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-primary">Meet Our Team</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* <!-- Team Member 1 --> */}
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <img src={team1} alt="Team Member 1" className="w-full rounded-md mb-4" />
                        <h3 className="text-xl font-semibold mb-2">John Doe</h3>
                        <p className="text-gray-700">Role: Software Engineer</p>
                    </div>

                    {/* <!-- Team Member 2 --> */}
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <img src={team2}  alt="Team Member 2" className="w-full rounded-md mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
                        <p className="text-gray-700">Role: Graphic Designer</p>
                    </div>

                    {/* <!-- Team Member 3 --> */}
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <img src={team3} alt="Team Member 3" className="w-full rounded-md mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Alex Johnson</h3>
                        <p className="text-gray-700">Role: Marketing Manager</p>
                    </div>

                    {/* <!-- Team Member 4 --> */}
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <img src={team4}  alt="Team Member 4" className="w-full rounded-md mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Peter Johnson</h3>
                        <p className="text-gray-700">Role: Seo specialist</p>
                    </div>

                    {/* <!-- Team Member 5 --> */}
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <img src={team5}  alt="Team Member 5" className="w-full rounded-md mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Emily Brown</h3>
                        <p className="text-gray-700">Role: UX Designer</p>
                    </div>

                    {/* <!-- Team Member 6 --> */}
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <img src={team6} alt="Team Member 6" className="w-full rounded-md mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Michael Davis</h3>
                        <p className="text-gray-700">Role: Frontend Developer</p>
                    </div>

                    {/* <!-- Team Member 7 --> */}
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <img src={team7} alt="Team Member 7" className="w-full rounded-md mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
                        <p className="text-gray-700">Role: Content Writer</p>
                    </div>
                </div>
            </div>
        </section>
      </div>
    </section>
  )
}

export default AboutUs
