import React from "react"
import actodo from "../assets/images/actodo.png"
import udemy from "../assets/images/udemy.png"
import weather from "../assets/images/weather.png"
function Projects() {
    return (
      <div className="bg-gray-800 text-white p-16">
        <h1 className="text-3xl font-bold py-8 text-violet-300 border-b-2 border-violet-300 pb-2">Projects</h1>
        <div className="container my-10">
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 ">
            {/* First Project Card */}
            <div className="card border border-silver-600 p-3 hover:bg-slate-500 transform transition-transform duration-300 ease-in-out hover:scale-110">
              <img src={actodo} alt="actodo" className="w-full h-48 object-cover mb-4" />
              <p className="mb-4">
                The Actodo project is a task management application built with React. React's component-based architecture and state management provide a dynamic, responsive user experience. User data is securely stored, ensuring that tasks are personalized and accessible across sessions.
              </p>
              <a href="https://actodo-wheat.vercel.app/" target="_blank" rel="noopener noreferrer">
                <button className="bg-pink-900 p-2 rounded-full my-3 hover:bg-pink-950 font-bold">Live Demo</button>
              </a>
              <a href="https://github.com/Suji-4/actodo" target="_blank" rel="noopener noreferrer">
                <button className="bg-pink-900 p-2 rounded-full mx-3 my-3 hover:bg-pink-950 font-bold">GitHub</button>
              </a>
            </div>
  
            {/* Second Project Card */}
            <div className="card1 border border-silver-600 p-3 hover:bg-slate-500 transform transition-transform duration-300 ease-in-out hover:scale-110">
              <img src={udemy} alt="udemy" className="w-full h-48 object-cover mb-4" />
              <p className="mb-4">
                This project is a Udemy front page clone created using React. It replicates the key features of Udemy's landing page, including a dynamic course listing, a responsive layout. I’ve created a user-friendly and interactive experience that mimics the look and feel of the actual site.
              </p>
              <a href="https://udemy-react-lilac-iota.vercel.app/" target="_blank" rel="noopener noreferrer">
                <button className="bg-pink-900 p-2 rounded-full my-3 hover:bg-pink-950 font-bold">Live Demo</button>
              </a>
              <a href="https://github.com/Suji-4/udemyclone" target="_blank" rel="noopener noreferrer">
                <button className="bg-pink-900 p-2 rounded-full mx-3 my-3 hover:bg-pink-950 font-bold">GitHub</button>
              </a>
            </div>
  
            {/* Third Project Card */}
            <div className="card3 border border-silver-600 p-3 hover:bg-slate-500 transform transition-transform duration-300 ease-in-out hover:scale-110">
              <img src={weather} alt="weather" className="w-full h-48 object-cover mb-4" />
              <p className="mb-4">
              This dynamic Weather App allows users to easily check current weather conditions in their location or any city across the globe. The app is built using React for a responsive, single-page user experience, and it fetches real-time weather data from the OpenWeather API.
              </p>
              <a href="https://weatherapp-coral-beta.vercel.app/" target="_blank" rel="noopener noreferrer">
              <button className="bg-pink-900 p-2 rounded-full my-3 hover:bg-pink-950 font-bold">Live Demo</button>
              </a>
              <a href="https://github.com/Suji-4/weatherapp"  target="_blank" rel="noopener noreferrer">
              <button className="bg-pink-900 p-2 rounded-full mx-3 my-3 hover:bg-pink-950 font-bold">GitHub</button>
           </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Projects;