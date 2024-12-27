import React from "react"
import linkdin from "../assets/images/linkdin.png"
import git from "../assets/images/git.png"
function Contact()
{
    return(
        <div>
            <div className="bg-gray-800 text-white p-16">
                <h1 className="text-3xl font-bold py-8 text-gray-300 border-b-2 border-gray-300 pb-2">Contact</h1>
                <form className=" flex flex-col gap-5 ">
                <p className="text-3xl font-bold py-8">Get In Touch</p>
                <input className=" rounded-md py-5 px-2 bg-pink-200 text-black font-semibold" placeholder="Full Name"></input>
                <input className="rounded-md py-5 px-2  bg-pink-200 text-black font-semibold" placeholder="E-mail"></input>
                <input className="rounded-md py-5 px-2  bg-pink-200 text-black font-semibold" placeholder="Phone"></input>
                <textarea className="rounded-md py-5 px-2  bg-pink-200 text-black font-semibold" placeholder="Message"></textarea>
                <button className="bg-pink-900 hover:bg-pink-950 font-bold text-white p-2 rounded-md">Send</button>
                </form>
                <div className="flex gap-2 mx-96">
               <a href="https://www.linkedin.com/in/sujitha-rk/" target="_blank" rel="noopener noreferrer" ><img src={linkdin} alt="linkdin" className="w-14 rounded-md my-4 mx-16 hidden sm:block "></img></a>
               <a href="https://github.com/Suji-4"  target="_blank" rel="noopener noreferrer"><img src={git} alt="git" className="w-14 rounded-md my-4 hidden sm:block"></img></a>
                </div>
            </div>
            
        </div>
    )
}
export default Contact