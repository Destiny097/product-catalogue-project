import React from "react";
import "../index.css";

export default function AboutUs() {
  return (
    <section className="px-6 py-12 md:px-12 w-[90%] mx-auto">
      {/* Header */}
      <h2 className="mb-8 text-2xl font-bold md:text-3xl">Follow Us @Modimal</h2>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Left About Section */}
        <div className="flex flex-col justify-center p-6 bg-gray-100 rounded-md md:row-span-2">
          <h3 className="mb-4 text-2xl font-bold md:text-3xl">About Us</h3>
          <p className="mb-4 text-gray-700">
            At <span className="font-semibold">Modimal</span>, we believe in
            elegance through simplicity. Our collections blend modern minimalism
            with timeless craftsmanship, creating pieces that are versatile,
            sustainable, and designed for everyday life.
          </p>
          <p className="text-gray-700">
            From tailored essentials to statement outfits, every garment reflects
            our vision of harmony between fashion and the planet. Join us on a
            journey towards conscious clothing.
          </p>
          
        </div>

        {/* Right Grid (4 Images) */}
        <div className="grid grid-cols-2 col-span-2 gap-0">
          <div className="relative overflow-hidden ">
            <img
              src="/assets/insta2.jpg"
              alt="Insta 2"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative overflow-hidden ">
            <img
              src="/assets/insta3.jpg"
              alt="Insta 3"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative overflow-hidden ">
            <img
              src="/assets/insta4.jpg"
              alt="Insta 4"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative overflow-hidden ">
            <img
              src="/assets/insta5.png"
              alt="Insta 5"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
