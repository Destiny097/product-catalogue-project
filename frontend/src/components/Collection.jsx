import React from "react";
import collections from "../data/collection";
import "../index.css"

export default function Collection() {
  return (
    <section className="w-[90%] max-w-8xl px-4 py-12 mx-auto md:px-12">
      {/* Header */}
      <h2 className="mb-8 text-2xl font-bold text-left md:text-3xl">Collection</h2>

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Left Column (Blouses on top + Dress spanning) */}
        <div className="flex flex-col gap-6">
          {/* Top Left (Blouses - landscape) */}
          <div className="relative overflow-hidden rounded-md group aspect-[4/3]">
            <img
              src={collections[0].image}
              alt={collections[0].title}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute px-4 py-1 text-sm text-black bg-white rounded bottom-4 left-4">
              {collections[0].title}
            </span>
          </div>

          {/* Bottom Left (Dress - portrait, filling gap) */}
          <div className="relative flex-1 overflow-hidden rounded-md group">
            <img
              src={collections[2].image}
              alt={collections[2].title}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute px-4 py-1 text-sm text-black bg-white rounded bottom-4 left-4">
              {collections[2].title}
            </span>
          </div>
        </div>

        {/* Right Column (two stacked: Pants + Outerwear) */}
        <div className="flex flex-col gap-6">
          {/* Top Right (Pants - portrait) */}
          <div className="relative overflow-hidden rounded-md group aspect-[3/4]">
            <img
              src={collections[1].image}
              alt={collections[1].title}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute px-4 py-1 text-sm text-black bg-white rounded bottom-4 left-4">
              {collections[1].title}
            </span>
          </div>

          {/* Bottom Right (Outerwear - landscape) */}
          <div className="relative overflow-hidden rounded-md group aspect-[4/3]">
            <img
              src={collections[3].image}
              alt={collections[3].title}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute px-4 py-1 text-sm text-black bg-white rounded bottom-4 left-4">
              {collections[3].title}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
