"use client";
import React, { useEffect, useState } from "react";
import { emptyProfileImageUrl } from "@/public/variables";
import { CldImage } from "next-cloudinary";
// import React from "react";
import { SocialIcon } from "react-social-icons";
// import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideData {
    title: string;
    description: string;
    bgImage: string;
  }
  
  const slides: SlideData[] = [
    {
      title: "ILLUMINATION",
      description: "Every year, our hall comes alive with a dazzling display of 'Illumination'. Our residents create intricate designs using lamps, showcasing their artistic talents and lighting up the night with mesmerizing patterns.",
      bgImage: "./assets/bgGallery.png"
    },
    {
      title: "EVENTS",
      description: "Various cultural and social events throughout the year bring our community together.",
      bgImage: "./assets/bgGallery.png"
    }
  ];
  
//   const activities = [
//     "ILLUMINATION",
//     "RANGOLI",
//     "GENERAL CHAMPIONSHIP",
//     "HALL JAYANTI",
//     "BLOOD DONATION CAMP",
//     "CLOTH DONATION DRIVE",
//     "HALL PHOTOS"
//   ];
  
  const Gallery = () => {
    const images = [
        '/path/to/image1.jpg',
        '/path/to/image2.jpg',
        '/path/to/image3.jpg',
      ];
    
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };
  
    return (
      <div className="bg-[#FFFEE5]">
        {/* Carousel Section */}
        <div className="relative h-[500px] overflow-hidden">
          <div 
            className="absolute w-full h-full transition-transform duration-500 ease-in-out"
            style={{
              backgroundImage: `url(${slides[currentSlide].bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50">
              <div className="max-w-4xl mx-auto text-center text-white mt-32">
                <h1 className="text-6xl font-serif mb-6">{slides[currentSlide].title}</h1>
                <p className="text-xl">{slides[currentSlide].description}</p>
              </div>
            </div>
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 p-2 rounded-full hover:bg-white/50"
          >
            &#8826;
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 p-2 rounded-full hover:bg-white/50"
          >
            &#8827;
          </button>
        </div>
            
            {/* Gallery Section */}
            <div className="mx-auto py-10">
              <h1 className="text-4xl font-serif text-center">Gallery</h1>
              <div className=" w-[100%] overflow-hidden mt-8">
                <img src="/path/to/your/image.jpg" alt="Gallery Image" className="w-[100%] h-52 p-10"/>
              </div>
              
              <div className=" w-[100%] overflow-hidden mt-8">
                <img src="/path/to/your/image.jpg" alt="Gallery Image" className="w-[100%] h-52 p-10"/>
              </div>
              
              <div className=" w-[100%] overflow-hidden mt-8">
                <img src="/path/to/your/image.jpg" alt="Gallery Image" className="w-[100%] h-52 p-10"/>
              </div>
              
            </div>

      </div>
      
    );
  };

export default Gallery;
