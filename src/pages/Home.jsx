import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate=useNavigate();
    const handkeCheckSymtoms=()=>{
        navigate('/Form')
    }
  return (
  <div className='bg-gray-50 min-h-screen'>
    {/* main*/ }
    <main className='bg-blue-500 text-white shadow-lg  p-10 text-center'>
      <h1 className='text-4xl font-bold mb-4'> Welcome to Symptom Checker</h1>
    <p className='text-lg mb-6'>Your one-step solution for health evaluation and advice</p>
    <a href="/form" className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition">Get Started</a>
    </main>
    {/* content */}
    <div className="container mx-auto p-5">
        <h2 className="text-3xl font-bold mb-6 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white shadow-md rounded-lg p-6">
            <i className="fas fa-user-md text-blue-600 text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Enter Symptoms</h3>
            <p className="text-gray-600">Provide your symptoms and details to get started.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <i className="fas fa-stethoscope text-blue-600 text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Get Evaluations</h3>
            <p className="text-gray-600">Receive a list of possible conditions based on your input.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <i className="fas fa-book-medical text-blue-600 text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Read More</h3>
            <p className="text-gray-600">Visit trusted medical websites for more information.</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">About Us</h2>
          <p className="text-gray-700 text-lg text-center">We are dedicated to providing accurate health assessments and helping you stay informed about your well-being.</p>
        </div>
      </div>
       {/* Doctor */}
       <div className="bg-blue-50 p-8 text-center mt-5">
        <h2 className="text-2xl font-semibold text-blue-800">
        While these insights can be helpful, it's important to seek advice from a qualified doctor for a thorough evaluation.
        </h2>
        <p className="mt-4 text-lg">
          Our AI provides helpful insights, but it is not a substitute for professional medical advice, diagnosis, or treatment.
        </p>
        <p className="mt-2 text-lg">
          Please visit a healthcare provider for a thorough evaluation and proper diagnosis.
        </p>
      </div>
  </div>
  )
}

export default Home