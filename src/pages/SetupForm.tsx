import React, { useState } from 'react';

const SetupForm: React.FC = () => {
  const [formData, setFormData] = useState({
    storeName: '',
    multiAdminName: '',
    multiAdminEmail: '',
    multiAdminPassword: '',
    contact: '',
    address: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send the data to your server.

    // Reset the form after submission
    setFormData({
      storeName: '',
      multiAdminName: '',
      multiAdminEmail: '',
      multiAdminPassword: '',
      contact: '',
      address: '',
    });
  };

  return (
    <div className="container mx-auto p-4 max-w-md bg-white rounded shadow-lg flex flex-col items-center mt-4 mb-4 ">
    <h1 className="text-xl font-semibold mb-4 ">DotBrand Application Setup</h1>
    <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4">
          <label htmlFor="storeName" className="block text-sm font-medium text-gray-600">
            Store Name
          </label>
          <input
            type="text"
            id="storeName"
            name="storeName"
            value={formData.storeName}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="multiAdminName" className="block text-sm font-medium text-gray-600">
            Multi-Admin Name
          </label>
          <input
            type="text"
            id="multiAdminName"
            name="multiAdminName"
            value={formData.multiAdminName}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="multiAdminEmail" className="block text-sm font-medium text-gray-600">
            Multi-Admin Email
          </label>
          <input
            type="email"
            id="multiAdminEmail"
            name="multiAdminEmail"
            value={formData.multiAdminEmail}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="multiAdminPassword" className="block text-sm font-medium text-gray-600">
            Multi-Admin Password
          </label>
          <input
            type="password"
            id="multiAdminPassword"
            name="multiAdminPassword"
            value={formData.multiAdminPassword}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="contact" className="block text-sm font-medium text-gray-600">
            Contact
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-600">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            rows={3}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <button type="submit" className="text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center flex items-center">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SetupForm;
