import React from 'react'

function Footer() {
  return (
    <footer id='footer' className="bg-gray-800 text-white p-6 mt-2">
      
      <div className="container mx-auto text-center"><ul className="list-none">
        <li><a href="https://www.mayoclinic.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">Mayo Clinic</a></li>
        <li><a href="https://www.webmd.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">WebMD</a></li>
        <li><a href="https://www.healthline.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Healthline</a></li>
      </ul>
        <p>© 2024 HealthCheck. All Rights Reserved.</p>
        <p className="mt-4">For more medical information, visit <a href="https://www.webmd.com/" className="text-blue-400 hover:underline">WebMD</a> or <a href="https://www.mayoclinic.org/" className="text-blue-400 hover:underline">Mayo Clinic</a>.</p>
        <p className="mt-4">Contact us: +123 456 7890 | <a href="hharshil1912@gmail.com" className="text-blue-400 hover:underline">hharshil1912@gmail.com</a></p>
      </div>
    </footer>

        
  )
 
}

export default Footer