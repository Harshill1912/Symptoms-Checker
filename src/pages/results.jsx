import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaClipboard, FaArrowDown, FaArrowUp } from 'react-icons/fa';

function Results() {
  const location = useLocation();
  const { response } = location.state || { response: 'No data received' };

  //  to remove duplicate line
  const processResponse = (text) => {
    const lines = text.split('\n').filter(line => line.trim() !== '');
    return Array.from(new Set(lines)).join('\n');
  };

  const processedResponse = processResponse(response);

  //  for expand
  const [isExpanded, setIsExpanded] = React.useState(false);

  // copy function
  const handleCopy = () => {
    navigator.clipboard.writeText(processedResponse).then(() => {
      alert('Response copied to clipboard!');
    });
  };

  return (
    <div className='p-4 bg-gray-50 min-h-screen'>
      <h2 className='font-bold text-2xl mb-4 text-center text-gray-800'>
      Symptom Checker Results
      </h2>

      {/* Response Box */}
      <div className=' bg-blue-50 p-6 rounded-md shadow-lg'>
        <h2 className='text-xl  mb-2 text-gray-700'>
          <strong>Response Summary :</strong>
        </h2>

        {/* Display response line by line */}
        <div className='mb-4'>
          {isExpanded ? (
            <p className='text-gray-800 whitespace-pre-line text-lg'>{processedResponse}</p>
          ) : (
            <p className='text-gray-800 whitespace-pre-line'>
              {processedResponse.split('\n').slice(0, 3).join('\n')}...
            </p>
          )}
        </div>

        {/* Toggle Expand */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className='mt-4 text-blue-500 flex items-center hover:text-blue-700 transition'
        >
          {isExpanded ? 'Show Less' : 'Show More'}
          {isExpanded ? <FaArrowUp className='ml-2' /> : <FaArrowDown className='ml-2' />}
        </button>

        {/* Copy*/}
        <button
          onClick={handleCopy}
          className='mt-4 bg-gray-800 text-white px-4 py-2 rounded-md flex items-center hover:bg-gray-700 transition'
        >
          Copy to Clipboard <FaClipboard className='ml-2' />
        </button>
      </div>
    </div>
  );
}

export default Results;
