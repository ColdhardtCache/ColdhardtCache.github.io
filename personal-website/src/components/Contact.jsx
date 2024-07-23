
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <>
      <div className="container mx-auto p-4 pt-20">
        <h1 className="text-4xl font-bold text-center mb-4">Contact Me</h1>

        <div className="bg-custom-dark p-4 rounded-lg shadow-md mb-6">
          <div className="text-lg mb-4">
            <p className="flex items-center"><FaEnvelope className="mr-2" /> Email: brian.grier16@gmail.com</p>
            <p className="flex items-center"><FaPhone className="mr-2" /> Phone: +1 508 375 1373</p>
            <p className="flex items-center"><FaMapMarkerAlt className="mr-2" /> Address: Bridgewater, MA, USA</p>
          </div>

          <div className="bg-custom-dark p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Your Information</h3>
            <form action="mailto:brian.grier16@gmail.com" method="post" enctype="text/plain">
              <div className="mb-4">
                <label htmlFor="name" className="block font-semibold mb-2">Your Name:</label>
                <input type="text" id="name" name="name" required className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-semibold mb-2">Your Email:</label>
                <input type="email" id="email" name="email" required className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block font-semibold mb-2">Message:</label>
                <textarea id="message" name="message" required className="w-full px-3 py-2 border border-gray-300 rounded-lg resize-none min-h-[150px]"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                Send
              </button>
            </form>
          </div>
        </div>

        <footer className="text-center py-4 mt-4 bg-custom-dark">
          © 2024 by Brian Grier. All Rights Reserved.
        </footer>
      </div>
    </>
  );
}

export default Contact;
