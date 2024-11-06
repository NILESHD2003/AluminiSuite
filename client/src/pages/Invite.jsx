import React, { useState } from 'react';

const Invite = () => {
  const [isAlumni, setIsAlumni] = useState(false);
  const [customMessage, setCustomMessage] = useState('Your default message goes here...');
  const [selectedBatch, setSelectedBatch] = useState('2024');
  const [email, setEmail] = useState('');
  const [selectedCommunities, setSelectedCommunities] = useState([]);

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

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg min-w-[300px]">
        <h2 className="text-xl font-bold mb-4">Invite Student/Alumni</h2>

        <form action="" method="post">
          <div className="flex items-center mb-2">
            <label htmlFor="batch" className="font-medium text-sm w-1/4 text-right pr-2">
              Batch:
            </label>
            <select
              name="batch-selected"
              id="batch"
              value={selectedBatch}
              onChange={handleBatchChange}
              className="w-3/4 border border-gray-300 rounded-md p-1 text-sm"
            >
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </select>
          </div>

          <div className="flex items-center mb-2">
            <label htmlFor="email" className="font-medium text-sm w-1/4 text-right pr-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
              className="w-3/4 border border-gray-300 rounded-md p-1 text-sm"
            />
          </div>

          <div className="flex items-center mb-2">
            <span className="font-medium text-sm w-1/4 text-right pr-2">Role:</span>
            <label htmlFor="roleToggle" className="relative inline-flex items-center cursor-pointer w-3/4">
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

          <div className="flex items-start mb-2">
            <label htmlFor="message" className="font-medium text-sm w-1/4 text-right pr-2 mt-1">
              Message:
            </label>
            <textarea
              id="message"
              value={customMessage}
              onChange={handleMessageChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="Enter your message here..."
              className="w-3/4 h-24 border border-gray-300 rounded-md p-1 text-sm focus:outline-none focus:border-blue-400"
            />
          </div>

          <div className="flex items-start mb-2">
            <label className="font-medium text-sm w-1/4 text-right pr-2 mt-1">Communities:</label>
            <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-y-2">
              {["Mentor Matrix", "ProNet", "Pathway Pioneers", "Peer Power", "Insight Incubator", "SkillSpace"].map((community) => (
                <label key={community} className="flex items-center space-x-1">
                  <input
                    type="checkbox"
                    value={community}
                    checked={selectedCommunities.includes(community)}
                    onChange={handleCommunityChange}
                  />
                  <span>{community}</span>
                </label>
              ))}
            </div>
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
