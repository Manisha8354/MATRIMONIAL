import React from 'react'
import { motion } from 'framer-motion';

const images = [
  { src: 'https://i.pinimg.com/736x/a1/1e/9e/a11e9ebffd7a99f521a689640b3b72f4.jpg', className: 'h-48' },
  { src: 'https://i.pinimg.com/736x/89/bc/6e/89bc6e9865dfc5528d6b0bd3e82056bc.jpg', className: 'h-64' },
  { src: 'https://i.pinimg.com/originals/66/24/8b/66248bbdd93c1b7f5920cfa56f399406.jpg', className: 'h-56' },
  { src: 'https://i.pinimg.com/564x/18/d1/c9/18d1c97539c9203f42a4ee48a5867c38.jpg', className: 'h-72' },
  { src: 'https://www.weddingsutra.com/images/wedding-images/real_wed/featured/janifar-mohit/janifar-mohit-img16.jpg', className: 'h-80' },
  { src: 'https://5.imimg.com/data5/ECOM/Default/2022/8/MQ/CO/JW/104800042/photo-2021-08-10-15-21-49-500x500.jpg', className: 'h-64' },
  { src: 'https://i.pinimg.com/originals/54/b4/61/54b461a1225def365a531e7929f18af3.png', className: 'h-56' },
  { src: 'https://i.pinimg.com/originals/08/67/e3/0867e3f1041b5cd008b4bb5f4531dff1.jpg', className: 'h-72' },
  { src: 'https://i.pinimg.com/originals/4f/0f/c7/4f0fc7aa0c8530a3536767058b451ab4.jpg', className: 'h-80' },
  { src: 'https://i.pinimg.com/736x/17/7b/9c/177b9c91d7395dea3807915163acb677.jpg', className: 'h-64' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj6_BMh8DzQEnqPsoDWhjzPhV46_JeeyWmYw&s', className: 'h-56' },
  { src: 'https://getethnic.com/wp-content/uploads/2021/06/Pink-lehenga-44-1280x720.jpg', className: 'h-72' },
];

export default function Gallery() {
  return (
    <div>
     
      <div className=" mt-[90px] container mx-auto p-4">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg shadow-lg group ${image.className}`}
          >
            <img
              src={image.src}
              alt={`Matrimony ${index + 1}`}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {/* Optional overlay content */}
            </div>
          </div>
        ))}
      </div>


      <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-10">
        {/* Title Section with Animation */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 4, x: 0 }}
          transition={{ duration: 5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
            Thousands of
            <br />
            <span className="text-pink-600">Success</span> Stories
          </h1>
        </motion.div>

        {/* Description Section with Animation */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 4, y: 0 }}
          transition={{ duration: 4, delay: 3 }}
        >
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
            We take pride in publishing the most inspiring couple's success stories as we can motivate other members who are looking forward to finding the most ideal match through NRI Marriage Bureau. You can browse our happily married life stories of the couples.
          </p>
        </motion.div>
      </div>
    </div>
    </div>
    </div>


    
  )
}
