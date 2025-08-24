import React from 'react';

export default function Sustainability(){
  return (
    <div className="max-w-6xl px-4 py-8 mx-auto">
      {/* Hero Section */}
      <div className="py-8 mb-12 text-center border-b border-emerald-100">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl text-emerald-800">
          Sustainably Sourced Materials
        </h1>
        <p className="max-w-3xl mx-auto text-xl text-emerald-600">
          At Modimal, we believe in investing in the now to design for the future.
        </p>
      </div>

      {/* Intro Section */}
      <div className="mb-16 text-center">
        <p className="max-w-3xl mx-auto mb-8 text-lg text-gray-700">
          That's why we are committed to sourcing quality materials that will have less impact on the environment.
        </p>
        
        <div className="flex flex-col justify-center gap-8 mb-8 md:flex-row md:gap-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-700">35%</div>
            <div className="mt-2 text-sm tracking-wider uppercase text-emerald-600">
              Sustainably sourced fabrics in 2022
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-700">100%</div>
            <div className="mt-2 text-sm tracking-wider uppercase text-emerald-600">
              Goal for 2025
            </div>
          </div>
        </div>
        
        <p className="max-w-3xl mx-auto italic text-emerald-700">
          There are five kinds of fabrics in our collections that are organic and responsibly sourced. 
          We highlight these so you can make considered choices when you shop.
        </p>
      </div>

      {/* Materials Grid */}
      <div className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-2">
        {/* Cotton */}
        <div className="p-6 transition-shadow bg-white shadow-md rounded-xl hover:shadow-lg">
          <div className="flex items-center mb-4">
            <div className="p-3 mr-4 rounded-full bg-emerald-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-emerald-800">Cotton</h3>
          </div>
          <p className="mb-3 text-gray-700">
            We source certified organic cotton, which is grown without the use of pesticides or 
            synthetic fertilizers and requires less irrigation as it relies mainly on rainwater.
          </p>
          <p className="mb-4 text-gray-700">
            Avoiding harmful pesticides preserves soil biodiversity and protects the health of 
            surrounding communities.
          </p>
          <div className="flex items-center text-sm text-emerald-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Certified by the Global Organic Textile Standard (GOTS)
          </div>
        </div>

        {/* Wool */}
        <div className="p-6 transition-shadow bg-white shadow-md rounded-xl hover:shadow-lg">
          <div className="flex items-center mb-4">
            <div className="p-3 mr-4 rounded-full bg-emerald-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-emerald-800">Wool</h3>
          </div>
          <p className="mb-3 text-gray-700">
            Wool is a natural fiber with added performance attributes such as temperature regulation, 
            durability, and natural water repellency.
          </p>
          <p className="text-gray-700">
            Considered a circular product by nature, wool can be recycled and biodegraded. Animal welfare 
            is extremely important to us, and we only source mulesing-free wool from producers that follow 
            humane and eco-friendly processes.
          </p>
        </div>

        {/* Linen */}
        <div className="p-6 transition-shadow bg-white shadow-md rounded-xl hover:shadow-lg">
          <div className="flex items-center mb-4">
            <div className="p-3 mr-4 rounded-full bg-emerald-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-emerald-800">Linen</h3>
          </div>
          <p className="mb-3 text-gray-700">
            Found throughout our collections, linen is a sustainable fiber made from the flax plant. 
            Flax is naturally pest resistant that requires less pesticides, water and energy to produce 
            compared to cotton and polyester.
          </p>
          <p className="text-gray-700">
            Flax aids in sequestering carbon into the soil, which is organic carbon dioxide from the 
            atmosphere and is beneficial for improving soil health.
          </p>
        </div>

        {/* Silk */}
        <div className="p-6 transition-shadow bg-white shadow-md rounded-xl hover:shadow-lg">
          <div className="flex items-center mb-4">
            <div className="p-3 mr-4 rounded-full bg-emerald-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-emerald-800">Silk</h3>
          </div>
          <p className="mb-3 text-gray-700">
            Organic silk is a more responsible alternative to conventional silk through traditional methods. 
            The silkworms are fed mulberry tree leaves from organic agriculture that uses no pesticides and 
            animal chemicals.
          </p>
          <p className="text-gray-700">
            Resulting in a fiber that is gentle on both you and the environment. This responsibly sourced 
            material exemplifies our dedication to creating exquisite clothing with a conscience.
          </p>
        </div>
      </div>

      {/* Commitment Section */}
      <div className="p-8 text-center bg-emerald-50 rounded-xl">
        <h2 className="mb-4 text-3xl font-bold text-emerald-800">Our Commitment to Sustainability</h2>
        <p className="max-w-3xl mx-auto mb-6 text-gray-700">
          We're continuously working to improve our sustainability practices across all aspects of our 
          production process. From sourcing to manufacturing to packaging, we're making conscious choices 
          to reduce our environmental impact.
        </p>
      </div>
    </div>
  );
};
