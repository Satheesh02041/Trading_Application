import React from 'react';
import './user_profile.css'; // Import CSS for UserProfile component

const UserProfile = ({ user, onEdit, onDelete }) => {
  const { name, email, address, phone } = user;

  const handleEdit = () => {
    // Implement edit functionality here
    console.log('Edit user clicked');
  };

  const handleDelete = () => {
    // Implement delete functionality here
    console.log('Delete user clicked');
  };

  return (
    <div className="user-profile-container">
      <h2>User Profile</h2>
      <div className="user-details">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Address:</strong> {address}</p>
        <p><strong>Phone:</strong> {phone}</p>
      </div>
      <div className="user-actions">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={onDelete}>Delete User</button>
      </div>
    </div>
  );
};

export default UserProfile;
