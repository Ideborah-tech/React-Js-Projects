import React from "react"
import {Link} from "react-router-dom";
import van from "../assets/van.jpg"
import "../index.css"

export default function About(){
    return (
         <div className="">
            <img src={van} className="max-w-full" />
            <div className="px-5.5 text-[#161616] mb-10 leading-2">
                <h1 className="leading-[38px] font-bold text-4xl mt-5 mb-5 ">Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p className="leading-[22px] mb-4 ">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                <p className="leading-[22px]">Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            </div>
            <div className="bg-[#FFCC8D] text-[#161616] px-8 pb-8 mx-7 rounded-md font-semibold">
                <h2 className="m-0 py-9 text-xl">Your destination is waiting.<br />Your van is ready.</h2>
                <Link className="link-button bg-[#161616] text-white rounded-[10px]" to="/vans">Explore our vans</Link>
            </div>
        </div>
    )
}