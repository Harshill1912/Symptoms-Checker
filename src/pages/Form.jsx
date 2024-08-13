import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function Form() {
  const [symptoms, setSymptoms] = useState('');
  const [duration, setDuration] = useState('');
  const [severity, setSeverity] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');
  const [response, setResponse] = useState('');

  const handleSymptomsChange = (e) => {
    setSymptoms(e.target.value);
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const prompt = `Symptoms: ${symptoms}, Severity: ${severity}, Duration: ${duration} days, Age: ${age}, Gender: ${gender}, Medical History: ${medicalHistory}. Based on this, what possible conditions might this person have?`;
  
    const apiKey = 'mYHWUbLbzp6TOYJpzNGy7SVu5uCeGuFg3dAmM9x5';
    try {
      const result = await axios.post(
        'https://api.cohere.ai/generate',
        {
          model: 'command-xlarge-nightly', // or another appropriate model
          prompt: prompt,
          max_tokens: 150,
          temperature: 0.7,
        },
        {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );
  
      console.log("API Response:", result.data);
  
      // Check for `text` in the response and handle it
      if (result.data && result.data.text) {
        const generatedText = result.data.text.trim();
        setResponse(generatedText);
        console.log("AI Response:", generatedText);
        navigate('/results', { state: { response: generatedText } });
      } else {
        console.error('No text found in the response');
      }
    } catch (error) {
      console.error("Error communicating with Cohere:", error.response ? error.response.data : error.message);
    }
  };
  

  return (
    <div className='p-4'>
      <h2 className='font-bold text-2xl mb-4'>Enter Your Symptoms</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label htmlFor="symptoms" className='block text-lg font-semibold mb-2'>
            Symptoms:
          </label>
          <textarea
            id="symptoms"
            className='w-full p-2 border border-gray-300 rounded-md'
            rows={2}
            onChange={handleSymptomsChange}
            value={symptoms}
            placeholder='Enter your symptoms here...'
          ></textarea>
        </div>

        <div className='mb-4'>
          <label htmlFor="severity" className='block text-lg font-semibold mb-2'>
            Severity:
          </label>
          <select
            id='severity'
            className='w-full p-2 border border-gray-300 rounded-md'
            value={severity}
            onChange={(e) => setSeverity(e.target.value)}>
            <option value="">Select Severity</option>
            <option value="mild">Mild - Symptoms are not very intense and manageable.</option>
            <option value='moderate'>Moderate - Symptoms interfere with daily activities to some extent.</option>
            <option value='severe'>Severe - Symptoms are intense and significantly interfere with daily activities.</option>
          </select>
        </div>
      
        <div className='mb-4'>
          <label htmlFor="duration" className='block text-lg font-semibold mb-2'>
            Duration (in Days)
          </label>
          <input type="number"
            className='w-full p-2 border border-gray-300 rounded-md'
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder='Enter duration of symptoms' />
        </div>
      
        <div className='mb-4'>
          <label htmlFor="age" className='mb-2 font-semibold text-lg block'>
            Age:
          </label>
          <input type="number"
            className='w-full border border-gray-300 rounded-md'
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder='Enter your age'
          />
        </div>
      
        <div className='mb-4'>
          <label htmlFor="gender" className='block font-semibold text-lg mb-2'>
            Gender
          </label>
          <select id="gender"
            className='w-full p-2 border border-gray-300 rounded-md'
            value={gender}
            onChange={(e) => setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
      
        <div className='mb-4'>
          <label htmlFor='medicalHistory' className='block text-lg font-semibold mb-2'>
            Medical History:
          </label>
          <textarea
            id='medicalHistory'
            className='w-full p-2 border border-gray-300 rounded-md'
            rows='2'
            value={medicalHistory}
            onChange={(e) => setMedicalHistory(e.target.value)}
            placeholder='Enter any relevant medical history'
          ></textarea>
        </div>
        <button type='submit' className='bg-stone-800 px-6 text-white py-2 rounded-md font-extrabold hover:bg-stone-700 transition transform hover:scale-105'>
          Submit Symptoms
        </button>
      </form>
    </div>
  );
}

export default Form;
