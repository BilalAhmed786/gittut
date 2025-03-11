import { useState } from 'react'
import axios from 'axios';

import './App.css'

function App() { 
  
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }
 
    try{
  
      console.log(email)
      const result = await axios.post('http://localhost:4000/subscribe',{email})

    if(result.data){

      setTimeout(() => {
        setMessage("Thank you for subscribing! 🎉");
        setEmail("");
      }, 1000);

    }


    }catch(error){

      console.log(error)
    }

 
 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="max-w-lg w-full bg-white p-6 rounded-2xl shadow-lg text-center">
        <h2 className="text-2xl font-bold text-gray-800">Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 mt-2">Stay updated with our latest news and offers.</p>

        <form onSubmit={handleSubmit} className="mt-4 flex">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-3 border rounded-l-xl focus:ring focus:ring-blue-300 outline-none"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-r-xl hover:bg-blue-700 transition"
          >
            Subscribe
          </button>
        </form>

        {message && <p className="text-sm text-green-600 mt-3">{message}</p>}

        <p className="text-xs text-gray-500 mt-3">We respect your privacy. Unsubscribe anytime.</p>
      </div>
    </div>
  )
}

export default App
