import React from "react"
import {Link} from 'react-router-dom'
import campingVan from "../assets/campingVan.webp"
import "../index.css"
export default function Home(){
    return(
       <div className="min-h-[250px] text-white p-12" style={{background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46)), url(' + campingVan + ')', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}>
        <h1 className="font-bold text-4xl leading-[42px] mt-10">You got the travel plans, we got the travel vans.</h1>
        <p className="leading-6 mt-10 text-justify">Add adventure ot your life by joining the #vanlife movement.
            Rent the perfect van to make your perfect road trip</p>
            <Link to="vans" className="link-button bg-[#FF8C38] text-white w-full mt-[27px] py-3">Find your van</Link>
    
       </div>
    )
}