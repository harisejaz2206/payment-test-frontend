import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-white-50 text-gray-800 font-sans">
      <section className="bg-white text-gray-800 py-8 md:py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-2xl font-bold mb-4 md:mb-4">Contact Us</h2>
          <p className="text-sm md:text-base mb-4 md:mb-8">We're here to assist you. Please get in touch with us using the contact form below.</p>
        </div>
      </section>

      <div className="container mx-auto flex justify-center -mt-28 py-8 md:py-16">
        <form className="w-full max-w-lg bg-white text-gray-800 p-6 rounded-lg shadow-2xl">
          <h3 className="text-xl md:text-xl font-semibold mb-6 text-center">Send us a Message</h3>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm md:text-base font-semibold mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm md:text-base font-semibold mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm md:text-base font-semibold mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Your Message"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold py-2 md:py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <section className="py-8 md:py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-xl md:text-xl font-semibold mb-4">Contact Information</h3>
          <div className="text-sm md:text-base text-gray-600">
            <p>
              If you have any questions or need assistance, please feel free to contact us using the information below.
            </p>
            <ul className="mt-4">
              <li>
                <strong>Address:</strong> 123 Main Street, City, Country
              </li>
              <li>
                <strong>Phone:</strong> +1 (123) 456-7890
              </li>
              <li>
                <strong>Email:</strong> info@example.com
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
