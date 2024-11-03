import React, { useState } from 'react';

const Invite = () => {
  const [isAlumni, setIsAlumni] = useState(false);
  const [customMessage, setCustomMessage] = useState('Your default message goes here...');
  const [selectedBatch, setSelectedBatch] = useState('2024');
  const [email, setEmail] = useState('');

  const toggleRole = () => {
    setIsAlumni(!isAlumni);
  };

  const handleFocus = () => {
    if (customMessage === 'Your default message goes here...') {
      setCustomMessage('');
    }
  };

  const handleBlur = () => {
    if (customMessage === '') {
      setCustomMessage('Your default message goes here...');
    }
  };

  const handleBatchChange = (e) => {
    setSelectedBatch(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    const value = e.target.value;
    const wordCount = value.trim().split(/\s+/).length;

    // Allow input only if word count is 100 or less
    if (wordCount <= 100) {
      setCustomMessage(value);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg min-w-[300px]">
        <h2 className="text-xl font-bold mb-4">Invite Student/Alumni</h2>

        <form action="" method="post">
          <label htmlFor="batch" className="block mb-2 font-medium text-sm">
            Batch
          </label>
          <select
            name="batch-selected"
            id="batch"
            value={selectedBatch}
            onChange={handleBatchChange}
            className="w-full border border-gray-300 rounded-md p-2 mb-4 text-sm"
          >
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>

          <label htmlFor="email" className="block mb-2 font-medium text-sm">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
            className="w-full border border-gray-300 rounded-md p-2 mb-4 text-sm"
          />

          <div className="flex items-center mb-4">
            <span className="mr-2 font-medium text-sm">Role:</span>
            <label htmlFor="roleToggle" className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                id="roleToggle"
                name="role"
                value="alumni"
                onClick={toggleRole}
                className="sr-only"
              />
              <div className="w-10 h-5 bg-gray-300 rounded-full toggle-bg">
                <div className={`h-4 w-4 bg-white rounded-full shadow-md transform transition-transform ${isAlumni ? 'translate-x-5 bg-green-500' : 'translate-x-1'}`}></div>
              </div>
              <span className="ml-2 text-sm">{isAlumni ? 'Alumni' : 'Student'}</span>
            </label>
          </div>

          <div className="mb-4">
            <textarea
              value={customMessage}
              onChange={handleMessageChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="Enter your message here..."
              className="w-full h-24 border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:border-blue-400"
            />
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white rounded-md py-2 text-sm hover:bg-blue-600 transition">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Invite;
