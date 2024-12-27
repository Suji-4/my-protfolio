import React from "react"
import WebDeveloper from "../assets/images/WebDeveloper.pdf"
function Home()
{
    return(
<div className="bg-gray-800 text-white p-40">
      <h1 className="text-4xl">Hello,it's Me </h1>
      <h2 className="text-6xl py-2 font-bold"> Sujitha RK</h2>
      <p className="text-4xl py-2 font-serif">And I'm a <span className="text-pink-300">MERN STACK DEVELOPER</span></p>
      <p className="py-2">As a MERN Stack Developer, I specialize in building dynamic and high-performing web applications using the powerful combination of MongoDB, Express.js, React.js, and Node.js. With a strong focus on both front-end and back-end development, I am skilled in creating seamless, full-stack solutions that are both scalable and efficient.</p>
     <a href={WebDeveloper} download> <button className="border border-black bg-pink-300 text-gray-900 p-3 rounded-3xl py-2 hover:bg-pink-400 transition duration-300">Download CV</button></a>
    </div>
    )
}
export default Home