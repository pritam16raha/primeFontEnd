import React from 'react';

const MyAccount = ({ user }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Account</h2>
            <div className="space-y-4">
                <div className='flex justify-between'>
                    <label className="block text-gray-600 font-medium">Username</label>
                    <p className="text-gray-900">{user?.username}</p>
                </div>
                <div className='flex justify-between'>
                    <label className="block text-gray-600 font-medium">Name</label>
                    <p className="text-gray-900">{user?.name}</p>
                </div>
                <div className='flex justify-between'>
                    <label className="block text-gray-600 font-medium">Email</label>
                    <p className="text-gray-900">{user?.email}</p>
                </div>
                <div className='flex justify-between'>
                    <label className="block text-gray-600 font-medium">Phone</label>
                    <p className="text-gray-900">{user?.phone}</p>
                </div>
                <div className='flex justify-between'>
                    <label className="block text-gray-600 font-medium">Created Date</label>
                    <p className="text-gray-900">{new Date(user?.createdAt).toLocaleDateString()}</p>
                </div>
                <div className='flex justify-between'>
                    <label className="block text-gray-600 font-medium">Address</label>
                    <p className="text-gray-900">{user?.address}</p>
                </div>
            </div>
        </div>
    );
};

export default MyAccount;