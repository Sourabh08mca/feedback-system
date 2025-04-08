import axios from 'axios'
import React, { useState } from 'react'

function Feedback() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [feedback, setFeedback] = useState('')
  const [error, setError] = useState('')

  const validateEmail = (email) => {
    // Simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const Submit = (e) => {
    e.preventDefault()

    // Custom Validation
    if (!name.trim()) {
      setError('Name is required')
      return
    }
    if (!email.trim() || !validateEmail(email)) {
      setError('Please enter a valid email')
      return
    }
    if (!feedback.trim() || feedback.length < 10) {
      setError('Feedback must be at least 10 characters')
      return
    }

    setError('') // Clear any previous errors

    axios.post('http://localhost:3001/', { name, email, feedback })
      .then(result => {
        console.log(result)
        setName('')
        setEmail('')
        setFeedback('')
        alert('Feedback submitted successfully!')
      })
      .catch(err => {
        console.log(err)
        setError('Something went wrong. Please try again later.')
      })
  }

  return (
    <div>
      <h2 className="text-4xl font-bold mb-6 text-center">Feedback Form</h2>
      <form className="max-w-md mx-auto mt-10 p-6 bg-white border rounded-lg shadow-lg" onSubmit={Submit}>

        {error && (
          <div className="mb-4 text-red-500 font-semibold">
            {error}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name:</label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email:</label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="feedback">Feedback:</label>
          <textarea
            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            id="feedback"
            rows="5"
            placeholder="Enter your feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Feedback
