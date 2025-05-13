
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <div className="w-full max-w-[98%] mx-auto p-2 text-white">
      <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Contact Me</h1>

      <div className="max-w-6xl mx-auto bg-custom-dark rounded-xl shadow-xl border border-custom-dark w-full overflow-hidden">
        <div className="h-3 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
        <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4 text-white">Get In Touch</h3>
            <p className="text-gray-300 mb-6">Feel free to reach out to me about opportunities, questions, or just to say hello!</p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-gray-200">
                <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-400">
                  <FaEnvelope size={18} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p>brian.grier16@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-gray-200">
                <div className="w-10 h-10 rounded-full bg-secondary-500/10 flex items-center justify-center text-secondary-400">
                  <FaPhone size={18} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p>+1 508 375 1373</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-gray-200">
                <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-400">
                  <FaMapMarkerAlt size={18} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p>Bridgewater, MA, USA</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Send a Message</h3>
            <form action="mailto:brian.grier16@gmail.com" method="post" encType="text/plain" className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="w-full px-4 py-2 bg-custom-dark-lighter border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-white" 
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="w-full px-4 py-2 bg-custom-dark-lighter border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-white" 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  rows="5"
                  className="w-full px-4 py-2 bg-custom-dark-lighter border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-white resize-none" 
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium hover:from-primary-500 hover:to-secondary-500 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        </div>
      </div>

      <footer className="text-center py-6 mt-12 text-gray-400">
        © 2024 by Brian Grier. All Rights Reserved.
      </footer>
    </div>
  );
}

export default Contact;
