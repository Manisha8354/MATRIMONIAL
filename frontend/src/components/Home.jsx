
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import React, { useEffect, useState } from 'react'
import axios from 'axios'


const ProfileCard = ({ title, imageUrl, description }) => (
  <div className="max-w-md rounded-lg overflow-hidden shadow-lg bg-white">
    <img className="w-full h-3/4 object-fill" src={imageUrl} alt={title} />
    <div className="px-6 py-4">
      <h2 className="text-4xl text-center font-bold mb-2">{title}</h2>
      <p className="text-gray-700 text-lg text-center">{description}</p>
    </div>
  </div>
);

const images = [
  { src: 'https://i.pinimg.com/736x/a1/1e/9e/a11e9ebffd7a99f521a689640b3b72f4.jpg', className: 'h-48' },
  { src: 'https://i.pinimg.com/736x/89/bc/6e/89bc6e9865dfc5528d6b0bd3e82056bc.jpg', className: 'h-64' },
  { src: 'https://i.pinimg.com/originals/66/24/8b/66248bbdd93c1b7f5920cfa56f399406.jpg', className: 'h-56' },
  { src: 'https://i.pinimg.com/564x/18/d1/c9/18d1c97539c9203f42a4ee48a5867c38.jpg', className: 'h-72' },
  { src: 'https://www.weddingsutra.com/images/wedding-images/real_wed/featured/janifar-mohit/janifar-mohit-img16.jpg', className: 'h-80' },
  { src: 'https://5.imimg.com/data5/ECOM/Default/2022/8/MQ/CO/JW/104800042/photo-2021-08-10-15-21-49-500x500.jpg', className: 'h-64' },
  { src: 'https://i.pinimg.com/originals/54/b4/61/54b461a1225def365a531e7929f18af3.png', className: 'h-56' },
  { src: 'https://i.pinimg.com/originals/08/67/e3/0867e3f1041b5cd008b4bb5f4531dff1.jpg', className: 'h-72' },
];

export default function Home() {

 // State for form inputs and errors
 const [formData, setFormData] = useState({
  First_Name: '',
  Email_Address: '',
  Phone_Number: '',
  Message: ''
});
let {First_Name, Email_Address,Phone_Number,Message}=formData;


const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('http://localhost:3000/api/enquirySave', formData);
    alert(response.data); // Display success message
  } catch (error) {
    console.error("There was an error submitting the enquiry!", error);
    alert("Failed to submit enquiry");
  }
};

const [formErrors, setFormErrors] = useState({});

// Handle input change
// const handleInputChange = (e) => {
//   const { id, value } = e.target;
//   setFormData({
//     ...formData,
//     [e.target.name]: e.target.value
//   });
// };

const handleInputChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

// Form validation logic
const validateForm = () => {
  let errors = {};

  if (!formData.First_Name) {
    errors.First_Name = "First name is required.";
  }
  if (!formData. Email_Address) {
    errors.Email_Address = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.Email_Address = "Email is invalid.";
  }
  if (!formData.phone) {
    errors.phone = "Phone number is required.";
  } else if (!/^\d{10}$/.test(formData.phone)) {
    errors.phone = "Phone number must be 10 digits.";
  }
  if (!formData.Message) {
    errors.Message = "Message is required.";
  }
  return errors;
};

// Handle form submission
// const handleSubmit = (e) => {
//   e.preventDefault();
//   const errors = validateForm();
//   setFormErrors(errors);

//   // If no errors, display alert and log data
//   if (Object.keys(errors).length === 0) {
//     alert("Form submitted successfully!");
//     console.log("Form Data:", formData);
//     // Clear form after submission
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       message: "",
//     });
//   } else {
//     alert("Please correct the highlighted errors.");
//     console.log(formData)
//   }
// };

let [data,setData]=useState([])

async function getProfile(){
  let result = await axios.get('http://localhost:3000/api/getProfile')
  setData(result.data)
}  

useEffect(()=>{
  getProfile()
},[data])

  return (
    <>
    <div>
      <div>
      <div className="relative mt-[90px] w-full h-[950px] lg:h-screen n bg-cover bg-center" style={{ backgroundImage: 'url(https://i.pinimg.com/originals/ba/7b/58/ba7b5866297e83bf59d4962c418be571.jpg'}}>
      <div className="absolute inset-0 bg-black opacity-25"></div>
      {/* Banner with Heading */}
      <div className="absolute  inset-0 flex flex-col items-start justify-start md:justify-center z-10 left-5 top-[160px]">
  <div className="relative z-10 text-white">
  <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 4, y: 0 }}
          transition={{ duration: 3, delay: 1 }}
        >
    <h2 className="relative text-[8vw] md:text-[60px] font-extrabold font-[Georgia,serif] left-[10vw] md:left-[120px] bottom-[5vw] md:bottom-[60px]"
    
    >
      World's No.1 <br />
      Matrimony
    </h2>
    </motion.div>
    <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 3, x: 0 }}
          transition={{ duration: 2 }}
        >
    <h4 className="relative text-[4vw] md:text-[25px] left-[10vw] md:left-[120px] bottom-[5vw] md:bottom-[60px]">
      Millions have found their perfect Partner <br />
      through us! Next can be you...
    </h4>
    </motion.div>
  </div>

  
 
</div>


      {/* form */}
      
        <div className="relative h-32 flex items-center justify-end top-[590px] md:top-[300px] px-4 py-8">
          <div className="w-full max-w-md bg-transparent backdrop-blur-md border-2 rounded-lg shadow-lg px-6 py-2 z-10 opacity-85">
            <h2 className="text-3xl font-bold text-white text-center">Enquiry Now</h2>
            <form action="#" method="POST" className="mt-4 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="text-xl font-medium text-white">First Name</label>
            <input
              className={`mt-2 w-full bg-transparent rounded-md border px-3 py-1 text-sm placeholder:text-white focus:outline-none focus:ring-1 ${
                formErrors.First_Name ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-gray-400"
              }`}
              type="text"
              name="First_Name"
              placeholder="First Name"
              id="First_Name"
              value={First_Name}
              onChange={handleInputChange}
            />
            {formErrors.First_Name && <p className="text-red-500 text-sm mt-1">{formErrors.First_Name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="text-xl font-medium text-white">Email Address</label>
            <input
              className={`mt-2 w-full bg-transparent rounded-md border px-3 py-1 text-sm placeholder:text-white focus:outline-none focus:ring-1 ${
                formErrors.Email_Address ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-gray-400"
              }`}
              type="email"
              name="Email_Address"
              id="Email_Address"
              placeholder="Email"
              value={Email_Address}
              onChange={handleInputChange}
            />
            {formErrors.Email_Address && <p className="text-red-500 text-sm mt-1">{formErrors.Email_Address}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="text-xl font-medium text-white">Phone Number</label>
            <input
              className={`mt-2 w-full bg-transparent rounded-md border px-3 py-1 text-sm placeholder:text-white focus:outline-none focus:ring-1 ${
                formErrors.Phone_Number ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-gray-400"
              }`}
              type="tel"
              placeholder="Phone Number"
              name="Phone_Number"
              id="Phone_Number"
              value={Phone_Number}
              onChange={handleInputChange}
            />
            {formErrors.Phone_Number && <p className="text-red-500 text-sm mt-1">{formErrors.Phone_Number}</p>}
          </div>

          <div>
            <label htmlFor="message" className="text-xl font-medium text-white">Message</label>
            <textarea
              className={`mt-2 w-full bg-transparent rounded-md border px-3 py-1 text-sm placeholder:text-white focus:outline-none focus:ring-1 ${
                formErrors.Message ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-gray-400"
              }`}
              name="Message"
              id="Message"
              rows="4"
              value={Message}
              onChange={handleInputChange}
            />
            {formErrors.Message && <p className="text-red-500 text-sm mt-1">{formErrors.Message}</p>}
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-900 to-pink-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:from-pink-800 hover:to-pink-600 hover:font-bold hover:border hover:border-white"
            >
              Submit
            </button>
          </div>
        </form>
          </div>
        </div>
      </div>
      </div>
      


    {/* addstatus */}




     {/* addstatus */}
      {/* profile card */}
      <div className="flex flex-wrap justify-center gap-16 p-6">
      <Link
  to="/createprofile"
  className="transform transition-transform duration-300 hover:scale-105 block"
>
  <ProfileCard
    title="Bride"
    imageUrl="https://getethnic.com/wp-content/uploads/2021/06/Pink-Bridal-Lehenga-6.jpg"
    description="Meet our lovely bride. She brings joy and elegance to the occasion."
    className="relative h-64 w-full max-w-xs rounded-lg overflow-hidden hover:bg-gray-100 transition-all duration-300 ease-in-out"
  />
</Link>

<Link
  to="/createprofile"
  className="transform transition-transform duration-300 hover:scale-105 block"
>
  <ProfileCard
    title="Groom"
    imageUrl="https://www.varunchakkilam.in/wp-content/uploads/2022/02/SAD9623-copy.jpg"
    description="Meet our dashing groom. He embodies charm and sophistication."
    className="relative h-64 w-full max-w-xs rounded-lg overflow-hidden hover:bg-gray-100 transition-all duration-300 ease-in-out"
  />
</Link>

</div>


{/* 2card */}

<div className="h-auto w-auto bg-pink-100">
  <div className="container mx-auto px-4 py-8">
  <h2 className="text-4xl font-extrabold text-gray-900 mb-6 text-center transition-transform duration-300 transform hover:scale-110 hover:text-pink-700">
  Matrimonial Profiles
</h2>


    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.map((data, key) => (
        <div
          key={key}
          className="bg-pink-700 border border-pink-600 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 ease-in-out p-6 flex flex-col"
        >
          
          <div className="flex justify-center mb-4">
            <img
              src={`http://localhost:3000/${data.image}`} // Mapped image from data
              alt={`${data.first_name} ${data.last_name}`} 
              className="w-24 h-24 rounded-full object-cover border-4 border-pink-500 shadow-md"
            />
          </div>

          <div className="flex-1 text-center">
            
            <h3 className="text-xl font-bold text-white mb-2">{data.first_name} {data.last_name}</h3>
            <p className="text-gray-200 mb-2">Marital Status: {data.marital_status}</p>
            <p className="text-gray-200 mb-2">Working Profile: {data.working_profile}</p>
            <p className="text-gray-200 mb-2">Gender: {data.gender}</p>
            <p className="text-gray-200 mb-4">Country: {data.country}</p>

            <Link
              to={`/profile/${data.id}`}
              className="inline-block bg-pink-500 text-white text-xs font-bold px-4 py-2 rounded-md hover:bg-pink-400 transition-transform duration-300 transform hover:scale-110"
            >
              View More
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


    
      {/* stories */}

    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-10">
       
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

        
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 4, y: 0 }}
          transition={{ duration: 4, delay: 3 }}
        >
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-pink-700">
            We take pride in publishing the most inspiring couple's success stories as we can motivate other members who are looking forward to finding the most ideal match through NRI Marriage Bureau. You can browse our happily married life stories of the couples.
          </p>
        </motion.div>
      </div>
    </div>


{/* image gallery */}
<div className="container mx-auto p-4">
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
    </div>
    </div>
    </>
  );
}
