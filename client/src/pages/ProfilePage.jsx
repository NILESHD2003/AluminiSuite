import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { FaEdit } from "react-icons/fa";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "../components/ui/alert-dialog";



const ProfilePage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [gender, setGender] = useState('');
    const [education, setEducation] = useState([{ degree: '', institute: '', year: '' }]);
    const [workExperience, setWorkExperience] = useState([{ role: '', company: '', period: '' }]);
    const [isEditing, setIsEditing] = useState({
        personal: false,
        address: false,
        education: false,
        work: false,
        social: false,
    });

    const [socialLinks, setSocialLinks] = useState({
        twitter: '',
        linkedin: '',
        facebook: '',
        instagram: ''
    });


    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [profilePic, setProfilePic] = useState("https://res.cloudinary.com/dpktednrm/image/upload/v1730883103/nvij4f5smpxj2id7mkun.png"); // Replace with actual image path
    const [isViewingImage, setIsViewingImage] = useState(false);

    const handleProfileImageChange = (e) => {
        setProfilePic(URL.createObjectURL(e.target.files[0])); // Update the profile image preview
    };

    const toggleEdit = (section) => {
        setIsEditing((prev) => ({ ...prev, [section]: !prev[section] }));
    };

    const toggleDropdown = () => setDropdownOpen((prev) => !prev);

    const handleMobileChange = (e) => {
        const value = e.target.value;
        if (/^\d{0,10}$/.test(value)) {
            setMobile(value);
        }
    };

    const addEducation = () => {
        setEducation([...education, { degree: '', institute: '', year: '' }]);
    };

    const removeEducation = (index) => {
        setEducation(education.filter((_, i) => i !== index));
    };

    const addWorkExperience = () => {
        setWorkExperience([...workExperience, { role: '', company: '', period: '' }]);
    };

    const removeWorkExperience = (index) => {
        setWorkExperience(workExperience.filter((_, i) => i !== index));
    };

    const handleDeleteProfile = () => {
        alert("Profile deleted successfully!");
    };

    const handleOptionSelect = (action) => {
        if (action === 'change') {
            // Trigger file input click for changing profile picture
            document.getElementById("profileImageInput").click();
        } else if (action === 'view') {
            // Open the profile picture in a modal (View in Actual Size)
            setIsViewingImage(true);  // Set state to open the modal
        } else if (action === 'remove') {
            // Reset profile image to default or null
            setProfilePic("https://res.cloudinary.com/dpktednrm/image/upload/v1730883103/nvij4f5smpxj2id7mkun.png"); // Or set to null
        }
        setDropdownOpen(false); // Close dropdown after selection
    };

    return (
        <div className="w-full mx-auto p-8 bg-gray-50 border border-gray-200 shadow-md rounded-2xl">
            <div className='flex flex-row gap-6'>
            <div className="relative inline-block">
                {/* Circular Cropped Profile Picture */}
                <div
                    className="w-32 h-32 overflow-hidden rounded-full cursor-pointer border-2 border-gray-300"
                    onClick={toggleDropdown}
                >
                    <img
                        src={profilePic}
                        alt="Profile"
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Dropdown Options */}
                {isDropdownOpen && (
                    <div className="absolute top-16 left-0 bg-white border rounded-lg shadow-lg py-2 z-10 w-40">
                        <button
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                            onClick={() => handleOptionSelect('change')}
                        >
                            Change Photo
                        </button>
                        <button
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                            onClick={() => handleOptionSelect('view')}
                        >
                            View Photo
                        </button>
                        <button
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                            onClick={() => handleOptionSelect('remove')}
                        >
                            Remove Photo
                        </button>
                    </div>
                )}
            </div>

            {/* Hidden file input for changing image */}
            <input
                id="profileImageInput"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleProfileImageChange}
            />

            {/* Basic Unchangable details */}
            <div className="flex-1 space-y-2 items-center	content-center	">
                <div className="flex gap-2">
                    <Input
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-1/2 p-2 rounded-md border border-gray-300"
                    />
                    <Input
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-1/2 p-2 rounded-md border border-gray-300"
                    />
                </div>
                <Input
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full mt-2 p-2 rounded-md border border-gray-300"
                    />
                <Input
                    placeholder="Mobile Number"
                    value={mobile}
                    onChange={handleMobileChange}
                    maxLength={10}
                    className="w-full mt-2 p-2 rounded-md border border-gray-300"
                />
            </div>
            </div>

            {isViewingImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={() => setIsViewingImage(false)} // Closes modal when overlay is clicked
                >
                    <div className="relative bg-white p-4 rounded-md">
                        {/* Profile Image */}
                        <img
                            src={profilePic}  // Use the profilePic state to display the image
                            alt="Profile Full View"
                            className="max-w-lg max-h-lg object-contain "
                            onClick={(e) => e.stopPropagation()} // Prevents closing when image is clicked
                        />
                    </div>
                </div>
            )}
            {/* Sections */}
            {[
                { title: "Personal Details", section: "personal" },
                { title: "Address", section: "address" },
                { title: "Education Details", section: "education" },
                { title: "Work Experience", section: "work" },
                { title: "Social Links", section: "social" },
            ].map(({ title, section }) => (
                <div
                    key={section}
                    className="mt-4 mb-4 p-6 bg-white rounded-xl shadow-sm border border-gray-200 relative"
                >
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
                        {/* Edit Button */}
                        <button onClick={() => toggleEdit(section)} className="text-gray-500 hover:text-gray-700">
                            <FaEdit className="h-5 w-5" />
                        </button>
                    </div>
                    <div className="mt-4 text-gray-600">
                        {isEditing[section] ? (
                            <div className="space-y-4">

                                {/* Personal Details */}
                                {section === "personal" && (
                                    <>
                                        <div className="flex flex-row ">
                                            <label className="flex flex-row text-gray-700 gap-4 mr-4">Gender :</label>
                                            <div className="flex flex-row gap-4">
                                                <label>
                                                    <input
                                                        type="radio"
                                                        value="Male"
                                                        checked={gender === 'Male'}
                                                        onChange={(e) => setGender(e.target.value)}
                                                        className="mr-2"
                                                    />
                                                    Male
                                                </label>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        value="Female"
                                                        checked={gender === 'Female'}
                                                        onChange={(e) => setGender(e.target.value)}
                                                        className="mr-2"
                                                    />
                                                    Female
                                                </label>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        value="Other"
                                                        checked={gender === 'Other'}
                                                        onChange={(e) => setGender(e.target.value)}
                                                        className="mr-2"
                                                    />
                                                    Other
                                                </label>
                                            </div>
                                        </div>
                                        <Input
                                            placeholder="Date of Birth"
                                            type="date"
                                            className="p-2 rounded-md border border-gray-300"
                                        />
                                        <Textarea
                                            placeholder="Write a short bio..."
                                            className="p-2 rounded-md border border-gray-300"
                                        />
                                    </>
                                )}

                                {/* Address Details */}
                                {section === "address" && (
                                    <>
                                        {/* <Input placeholder="House No. / Apartment No." className="w-full p-2 rounded-md border border-gray-300" /> */}
                                        {/* <Input placeholder="Street / Landmark" className="w-full p-2 rounded-md border border-gray-300" /> */}
                                        <Input placeholder="City" className="p-2 rounded-md border border-gray-300" />
                                        <Input placeholder="Pin Code" className="p-2 rounded-md border border-gray-300" />
                                        <Input placeholder="Country" className="p-2 rounded-md border border-gray-300" />
                                    </>
                                )}

                                {/* Education Details */}
                                {section === "education" && education.map((edu, index) => (
                                    <div key={index} className="mb-4 mt-4 flex flex-col gap-2">
                                        <Input
                                            placeholder="Degree"
                                            value={edu.degree}
                                            onChange={(e) => {
                                                const newEducation = [...education];
                                                newEducation[index].degree = e.target.value;
                                                setEducation(newEducation);
                                            }}
                                            className="w-full p-2 rounded-md border border-gray-300"
                                        />
                                        <Input
                                            placeholder="Institute Name"
                                            value={edu.institute}
                                            onChange={(e) => {
                                                const newEducation = [...education];
                                                newEducation[index].institute = e.target.value;
                                                setEducation(newEducation);
                                            }}
                                            className="w-full p-2 rounded-md border border-gray-300"
                                        />
                                        <Input
                                            placeholder="Year"
                                            value={edu.year}
                                            onChange={(e) => {
                                                const newEducation = [...education];
                                                newEducation[index].year = e.target.value;
                                                setEducation(newEducation);
                                            }}
                                            className="w-full p-2 rounded-md border border-gray-300"
                                        />
                                        <div className="flex gap-4">
                                            <Button onClick={() => removeEducation(index)} className="bg-gray-200 text-red-500 hover:bg-gray-100">Remove</Button>
                                            <Button onClick={addEducation} className="bg-blue-500 text-white hover:bg-blue-300">Add More Education</Button>
                                        </div>
                                    </div>
                                ))}

                                {/* Work Experience */}
                                {section === "work" && workExperience.map((work, index) => (
                                    <div key={index} className="mb-4 flex flex-col gap-2">
                                        <Input
                                            placeholder="Role"
                                            value={work.role}
                                            onChange={(e) => {
                                                const newWork = [...workExperience];
                                                newWork[index].role = e.target.value;
                                                setWorkExperience(newWork);
                                            }}
                                            className="w-full p-2 rounded-md border border-gray-300"
                                        />
                                        <Input
                                            placeholder="Company Name"
                                            value={work.company}
                                            onChange={(e) => {
                                                const newWork = [...workExperience];
                                                newWork[index].company = e.target.value;
                                                setWorkExperience(newWork);
                                            }}
                                            className="w-full p-2 rounded-md border border-gray-300"
                                        />
                                        <Input
                                            placeholder="Period"
                                            value={work.period}
                                            onChange={(e) => {
                                                const newWork = [...workExperience];
                                                newWork[index].period = e.target.value;
                                                setWorkExperience(newWork);
                                            }}
                                            className="w-full p-2 rounded-md border border-gray-300"
                                        />
                                        <div className="flex gap-4">
                                            <Button onClick={() => removeWorkExperience(index)} className="bg-gray-200 text-red-500 hover:bg-gray-100">Remove</Button>
                                            <Button onClick={addWorkExperience} className="bg-blue-500 text-white hover:bg-blue-300">Add More Experience</Button>
                                        </div>
                                    </div>
                                ))}

                                {/* Social Media sites */}
                                {section === "social" && (
                                    <>
                                        {Object.keys(socialLinks).map((platform) => (
                                            <Input
                                                key={platform}
                                                placeholder={`${platform.charAt(0).toUpperCase() + platform.slice(1)} URL`}
                                                value={socialLinks[platform]}
                                                onChange={(e) => setSocialLinks({
                                                    ...socialLinks,
                                                    [platform]: e.target.value,
                                                })}
                                                className="w-full p-2 rounded-md border border-gray-300"
                                            />
                                        ))}
                                    </>
                                )}
                            </div>
                        ) : (
                            <p>Click the edit icon to modify {title.toLowerCase()}.</p>
                        )}
                    </div>
                </div>

            ))}

            {/* Action Buttons */}
            <div className="flex justify-between mt-8">
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant="destructive" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                            Delete Account
                        </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete your account.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel variant='ghost'>Cancel</AlertDialogCancel>
                            <AlertDialogAction className="bg-red-500 hover:bg-red-600" onClick={handleDeleteProfile}> Confirm Delete</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
                {/* Update button */}
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant="default" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                            Update Profile Details
                        </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Confirm Updates</AlertDialogTitle>
                            <AlertDialogDescription>
                                Your changes will be saved. Please ensure all the information is correct before proceeding.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction className="bg-blue-500 hover:bg-blue-600" >Save Changes</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </div>

    );
};

export default ProfilePage;
