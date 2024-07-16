import React from 'react';

const Dashboard = () => {
  
  const userData = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl mb-6 text-center">Dashboard</h2>
        {userData ? (
          <div>
            <p className="mb-2"><strong>First Name:</strong> {userData.user_firstname}</p>
            <p className="mb-2"><strong>Email:</strong> {userData.user_email}</p>
            <p className="mb-2"><strong>Phone:</strong> {userData.user_phone}</p>
            <p className="mb-2"><strong>City:</strong> {userData.user_city}</p>
            <p className="mb-2"><strong>Zipcode:</strong> {userData.user_zipcode}</p>
          </div>
        ) : (
          <p className="text-center">No user information available. Please log in.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
