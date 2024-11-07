import React, { useState } from 'react';
import { BorderBeam } from '@/components/ui/border-beam';
import axios from 'axios';

const Invite = () => {
  const [role, setRole] = useState('Student'); // Default role is 'Student'
  const [customMessage, setCustomMessage] = useState('Your default message goes here...');
  const [selectedBatch, setSelectedBatch] = useState('2024');
  const [email, setEmail] = useState('');
  const [selectedCommunities, setSelectedCommunities] = useState([]);

  const toggleRole = () => {
    setRole((prevRole) => (prevRole === 'Student' ? 'Alumni' : 'Student'));
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
    if (wordCount <= 100) {
      setCustomMessage(value);
    }
  };

  const handleCommunityChange = (e) => {
    const value = e.target.value;
    if (selectedCommunities.includes(value)) {
      setSelectedCommunities(selectedCommunities.filter((community) => community !== value));
    } else {
      setSelectedCommunities([...selectedCommunities, value]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      role,
      customMessage,
      // selectedBatch,
      email,
      hostId: "672baff2a5267c696434a875",
      communities: selectedCommunities,
    };
    console.log(formData);

    try {
      const response = await axios.post('https://aluminisuite.onrender.com/api/v1/host/invite', formData);

      console.log('Form submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="relative flex h-fit w-fit flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Invite Student/Alumni</h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Batch Selection */}
            <div className="flex flex-col sm:flex-row items-center mb-4">
              <label htmlFor="batch" className="font-medium text-gray-700 w-full sm:w-1/4 mb-2 sm:mb-0 sm:text-right pr-4">
                Batch:
              </label>
              <select
                name="batch-selected"
                id="batch"
                value={selectedBatch}
                onChange={handleBatchChange}
                className="w-full sm:w-3/4 border border-gray-300 rounded-md p-2 text-gray-700"
              >
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </select>
            </div>

            {/* Email Input */}
            <div className="flex flex-col sm:flex-row items-center mb-4">
              <label htmlFor="email" className="font-medium text-gray-700 w-full sm:w-1/4 mb-2 sm:mb-0 sm:text-right pr-4">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                required
                className="w-full sm:w-3/4 border border-gray-300 rounded-md p-2 text-gray-700"
                placeholder="Enter email"
              />
            </div>

            {/* Role Toggle */}
            <div className="flex flex-col sm:flex-row items-center mb-4">
              <span className="font-medium text-gray-700 w-full sm:w-1/4 sm:text-right pr-4">Role:</span>
              <label htmlFor="roleToggle" className="flex items-center cursor-pointer w-full sm:w-3/4 space-x-3">
                <input
                  type="checkbox"
                  id="roleToggle"
                  name="role"
                  onClick={toggleRole}
                  className="sr-only"
                />
                <div className="w-12 h-6 bg-gray-300 rounded-full relative">
                  <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transform transition-transform ${role === 'Alumni' ? 'translate-x-6 bg-green-500' : ''}`}></div>
                </div>
                <span className="text-sm text-gray-700">{role}</span>
              </label>
            </div>

            {/* Message Textarea */}
            <div className="flex flex-col sm:flex-row items-start mb-4">
              <label htmlFor="message" className="font-medium text-gray-700 w-full sm:w-1/4 sm:text-right pr-4 mb-2 sm:mb-0">
                Message:
              </label>
              <textarea
                id="message"
                value={customMessage}
                onChange={handleMessageChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="Enter your message here..."
                className="w-full sm:w-3/4 h-24 border border-gray-300 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Communities Selection */}
            <div className="flex flex-col sm:flex-row items-start mb-6">
              <label className="font-medium text-gray-700 w-full sm:w-1/4 sm:text-right pr-4 mb-2 sm:mb-0">Communities:</label>
              <div className="w-full sm:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {["Mentor Matrix", "ProNet", "Pathway Pioneers", "Peer Power", "Insight Incubator", "SkillSpace"].map((community) => (
                  <label key={community} className="flex items-center space-x-2 text-gray-700">
                    <input
                      type="checkbox"
                      value={community}
                      checked={selectedCommunities.includes(community)}
                      onChange={handleCommunityChange}
                      className="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <span>{community}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white rounded-md py-3 font-medium hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
          </form>
          <BorderBeam size={250} duration={12} delay={9} />
        </div>
      </div>
    </div>
  );
};

export default Invite;
