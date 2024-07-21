import React, { useEffect, useState } from 'react';
import { fetchProfile } from './userProfileService';

const ProfilePage = () => {
    const [profileData, setProfileData] = useState([]); // Initialize profileData as an empty array
    const emailId = 'Jayaseelan@triveniturbines.com'; // Replace with actual emailId
    const userId = '5'; // Replace with actual userId

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const data = await fetchProfile(emailId, userId);
                setProfileData(Array.isArray(data) ? data : [data]); // Ensure profileData is always an array
            } catch (error) {
                console.error('Error fetching profile:', error.message);
            }
        };

        fetchUserProfile();
    }, [emailId, userId]);

    return (
        <div>
            <h2>User Profiles</h2>
            {profileData.length > 0 ? (
                profileData.map((profile, index) => (
                    <div key={index}>
                        <h3>Profile {index + 1}</h3>
                        <p>User ID: {profile.userId}</p>
                        <p>Email: {profile.emailId}</p>
                        {/* Render other profile data as needed */}
                    </div>
                ))
            ) : (
                <p>Loading profiles...</p>
            )}
        </div>
    );
};

export default ProfilePage;
