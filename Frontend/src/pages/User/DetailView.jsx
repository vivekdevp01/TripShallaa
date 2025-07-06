import React, { useState } from 'react';
import { campData, pricingData } from "../../utils/data";
import { Link } from "react-scroll";
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CampActivity, CampAmenities, CampContactInfo, CampDetail, CampDetailHeroSection, CampImage, CampPricing } from "../../components/index.components.js"

export default function MountainViewCamp() {

     const [formCompleted, setFormCompleted] = useState(
    localStorage.getItem('contactFormCompleted') === 'true'
  );
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         message: ''
//     });
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: value
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsSubmitting(true);

//         try {
//             const response = await axios.post('https://api/v1/', formData);

//             if (response.status === 200) {
//                 toast.success('Thank you! Your message has been sent successfully.', {
//                     position: "top-center",
//                     autoClose: 5000,
//                     hideProgressBar: false,
//                     closeOnClick: true,
//                     pauseOnHover: true,
//                     draggable: true,
//                     progress: undefined,
//                     theme: "colored",
//                 });
//                 setFormData({
//                     name: '',
//                     email: '',
//                     phone: '',
//                     message: ''
//                 });
//             }
//         } catch (error) {
//             console.error('Error submitting form:', error);
//             toast.error('Something went wrong. Please try again later.', {
//                 position: "top-center",
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "colored",
//             });
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     const [formFilled, setFormFilled] = useState(false);

//     const handleBookingClick = (e) => {
//         const isFormComplete = checkFormCompletion();

//         if (!isFormComplete) {
//             e.preventDefault();
//             toast.warning('Please fill out the contact form before booking', {
//                 position: "top-center",
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//             });

//             document.getElementById('contact-form')?.scrollIntoView({
//                 behavior: 'smooth'
//             });
//         }
//     };

//     const checkFormCompletion = () => {
//     // Example - check if required fields are filled
//     const formData = JSON.parse(localStorage.getItem('contactFormData') || {});
//     return formData.name && formData.email && formData.message;
//   };

    return (
        <div className="font-sans text-gray-800 overflow-x-hidden">
            {/* hero */}
           
            <CampDetailHeroSection campData={campData} />
            {/* camp detail */}
            <CampDetail campData={campData} />

            {/* imgs */}
            <CampImage campData={campData} />

            {/* amenity */}
            <CampAmenities campData={campData} />

            {/* activities */}
            <CampActivity campData={campData} />

            {/* pricing */}
            <CampPricing pricingData={pricingData} />

            {/* form */}
            <CampContactInfo onFormComplete={formCompleted} campData={campData} />
        </div>
    );
}