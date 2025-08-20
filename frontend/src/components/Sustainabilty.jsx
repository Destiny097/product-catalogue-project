import React from 'react'
import "../index.css"
import SusBG from "/assets/Sustainability.jpg"
export default function Sustainabilty() {
  return (
    <section className='w-full h-[80vh] bg-black bg-cover bg-center bg-no-repeat relative' style={{backgroundImage:`url(${SusBG})`}}>
      <div className='absolute right-5 bottom-15 w-[40%]'>
        <p className='font-montserrat text-[26px] tracking-tight'>Stylish Sustainability in Clothing Promotes Eco-friendly Chocies For a Greater Future</p>
        <button className="mt-4 px-6 py-2 md:px-10 md:py-3 bg-white text-black rounded hover:bg-[#5A6D57] hover:text-white font-montserrat font-light transition">
            Sustainability
        </button>
      </div>
    </section>
  )
}
