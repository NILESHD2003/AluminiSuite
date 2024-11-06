import React, { useState } from 'react';
import { FiFile, FiX } from 'react-icons/fi';
import { Picker } from 'emoji-mart';

function PostModal() {
  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const [postContent, setPostContent] = useState(''); // State to hold post content
  const [isPosting, setIsPosting] = useState(false); // State for post submission loading
  const [errorMessage, setErrorMessage] = useState(''); // State for error message
  const [selectedImages, setSelectedImages] = useState([]); // State for selected image previews
  const [uploadedImageUrls, setUploadedImageUrls] = useState([]); // State for uploaded image URLs
  const [showEmojiPicker, setShowEmojiPicker] = useState(false); // State for emoji picker visibility

  const handlePost = () => {
    // Check if content or images are provided
    if (postContent.trim() === '' && uploadedImageUrls.length === 0) {
      setErrorMessage('Please enter some content or add an image before posting.');
      return;
    }

    setIsPosting(true);

    // Prepare post data (no fetch, just logging for now)
    const postData = {
      content: postContent,
      images: uploadedImageUrls, // Include the final URLs in the post data
    };

    console.log('Post Data:', postData); // Log the data instead of posting

    // Reset form after successful post
    setIsPosting(false);
    setShowModal(false);
    setPostContent('');
    setErrorMessage('');
    setSelectedImages([]);
    setUploadedImageUrls([]); // Clear uploaded URLs after posting
  };

  // Handles changes to post content, ensuring word limit
  const handleInputChange = (e) => {
    const value = e.target.value;
    const wordCount = value.trim().split(/\s+/).length;

    // Limit post content to 200 words
    if (wordCount <= 200) {
      setPostContent(value);
    }
  };

  // Handles image selection and preview
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    // Ensure that the total selected images do not exceed 10
    if (selectedImages.length + files.length > 10) {
      setErrorMessage("You can only upload up to 10 images.");
      return;
    }

    // Clear the error message when images are selected correctly
    setErrorMessage('');

    // Preview images on the frontend
    const previewUrls = files.map((file) => URL.createObjectURL(file));
    setSelectedImages((prevImages) => [...prevImages, ...previewUrls]);

    // Simulate uploading and storing URLs (this is where you would call your actual upload API)
    handleImageUpload(files); 
  };

  // Simulate image upload and store URLs in uploadedImageUrls
  const handleImageUpload = (files) => {
    // Simulate the image URL generation (e.g., after uploading to a server)
    const uploadedUrls = files.map((file) => {
      return URL.createObjectURL(file); // Simulating the URL
    });

    // Update the uploaded image URLs state
    setUploadedImageUrls((prevUrls) => [...prevUrls, ...uploadedUrls]);

    // Log the uploaded image URLs
    console.log('Uploaded Image URLs:', uploadedUrls);
  };

  // Add emoji to post content
  const addEmoji = (emoji) => {
    setPostContent((prev) => prev + emoji.native);
  };

  // Remove selected image
  const removeImage = (index) => {
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setUploadedImageUrls((prevUrls) => prevUrls.filter((_, i) => i !== index)); // Remove corresponding uploaded URL
  };

  // Clear all selected images
  const clearAllImages = () => {
    setSelectedImages([]);
    setUploadedImageUrls([]); // Clear all uploaded URLs
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)} className="bg-teal-500 text-white py-2 px-4 rounded">
        New Update
      </button>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Share Your Thoughts</h3>

            <textarea
              className="w-full border-0 outline-none p-2 mb-4 resize-none h-32"
              placeholder="What’s Brewing?"
              value={postContent}
              onChange={handleInputChange}
            />

            {errorMessage && (
              <div className="text-red-500 mb-2">
                {errorMessage}
              </div>
            )}

            <div className="flex items-center space-x-4 mb-4">
              {/* File Upload Icon */}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                multiple
                className="hidden"
                id="file-upload" 
              />
              <label htmlFor="file-upload" className="cursor-pointer text-gray-500">
                <FiFile size={20} />
              </label> 

              {/* Emoji Picker Icon */}
              <button
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                className="text-gray-500 text-sm"
              >
                😀
              </button>
            </div>

            {showEmojiPicker && (
              <Picker
                onSelect={addEmoji}
                style={{ position: 'absolute', bottom: '100px', right: '50px' }}
              />
            )}

            {/* Display selected image previews */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {selectedImages.map((image, index) => (
                <div key={index} className="relative">
                  <img src={image} alt="Selected" className="w-full h-auto rounded" />
                  <button
                    className="absolute top-1 right-1 bg-white rounded-full p-1 text-red-500"
                    onClick={() => removeImage(index)}
                  >
                    <FiX size={16} />
                  </button>
                </div>
              ))}
            </div>

            {/* Clear All Images Button */}
            {selectedImages.length > 0 && (
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-xs mb-4"
                onClick={clearAllImages}
              >
                Clear All Images
              </button>
            )}

            <div className="flex justify-end">
              <button
                className={`bg-teal-500 hover:bg-teal-700 text-white font-bold py-1 px-3 rounded text-xs ${
                  isPosting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={handlePost}
                disabled={isPosting}
              >
                {isPosting ? 'Posting...' : 'Share'}
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-1 px-3 rounded text-xs ml-2"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PostModal;
