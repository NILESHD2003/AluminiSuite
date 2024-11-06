import React, { useState } from 'react';

const CommunityModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [communityName, setCommunityName] = useState('');
  const [communityDescription, setCommunityDescription] = useState('');

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleNameChange = (e) => {
    setCommunityName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setCommunityDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., saving the community data)
    console.log('Community Name:', communityName);
    console.log('Community Description:', communityDescription);
    handleClose(); // Close the modal after submission
  };

  return (
    <div>
      <button onClick={handleOpen} className="bg-blue-500 text-white rounded-md py-2 px-4">
         Community
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Community</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4 flex items-center">
                <label htmlFor="communityName" className="block text-sm font-medium mb-1 w-1/3 text-right pr-2">
                  Community Name:
                </label>
                <input
                  type="text"
                  id="communityName"
                  value={communityName}
                  onChange={handleNameChange}
                  required
                  className="w-2/3 border border-gray-300 rounded-md p-2 text-sm"
                />
              </div>

              <div className="mb-4 flex items-start">
                <label htmlFor="communityDescription" className="block text-sm font-medium mb-1 w-1/3 text-right pr-2">
                  Description:
                </label>
                <textarea
                  id="communityDescription"
                  value={communityDescription}
                  onChange={handleDescriptionChange}
                  required
                  className="w-2/3 border border-gray-300 rounded-md p-2 text-sm h-24"
                />
              </div>

              <div className="flex justify-end">
                <button type="button" onClick={handleClose} className="mr-2 bg-gray-300 rounded-md py-1 px-4">
                  Cancel
                </button>
                <button type="submit" className="bg-blue-500 text-white rounded-md py-1 px-4">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunityModal;
