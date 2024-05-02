
import './App.css';

import { useState } from 'react';

function App() {
const [formData , setFormData] = useState({name:"" ,email :"" , query:""})
 
 const handleTextSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch("http://localhost:4000/submit", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      setFormData({
        name: "",
        email: "",
        query: "",
      });
     // alert("Thanks for the Feedback 🥰 ");
      //window.location.reload();
    } else {
      console.error("Failed to submit data.");
    }
  } catch (error) {
    console.error("Error submitting data:", error);
  }
};


  return (
    <div className="App">
   <form
      onSubmit={handleTextSubmit}
      className="flex flex-col justify-center items-center gap-4 w-[80%]"
    >
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Full Name"
              className="p-2 my-2 w-full rounded bg-gray-800"
              required
              minLength="3"
              maxLength="12"
            />

        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Email Address"
          className="p-2 my-2 w-full rounded bg-gray-800"
          required
        />
        <textarea
        className="px-4 py-4 w-full border-2 border-green-500 rounded-lg text-black text-[18px] focus:border-green-600"
        placeholder="Write Your Query Here.."
        value={formData.query}
        onChange={(e) => setFormData({ ...formData, query: e.target.value })}
      ></textarea>
    <button
        type="submit"
        className="bg-green-600 text-white p-4 w-full border-2 border-gray-500 rounded-lg text-[18px]"
      >
        SUBMIT
      </button>

        </form>
    </div>
  );
}

export default App;
