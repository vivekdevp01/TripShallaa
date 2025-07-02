import { Link } from 'react-router-dom';

export default function Footer() {
  return (
   <footer className="bg-gray-100 text-gray-700 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* company */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-900">Company Info</h3>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-orange-500 transition-colors">Contact Us</Link></li>
            <li><Link to="/terms" className="hover:text-orange-500 transition-colors">Terms & Conditions</Link></li>
            <li><Link to="/faqs" className="hover:text-orange-500 transition-colors">FAQs</Link></li>
            <li><Link to="/blog" className="hover:text-orange-500 transition-colors">Blog</Link></li>
          </ul>
        </div>

        {/* see more */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-900">See More</h3>
          <ul className="space-y-2">
            <li className="font-semibold">Rating</li>
            <li><Link to="/camping" className="hover:text-orange-500 transition-colors">Camping</Link></li>
            <li><Link to="/adventure-activities" className="hover:text-orange-500 transition-colors">Adventure Activities</Link></li>
          </ul>
        </div>

        {/* supp. */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-900">Support Info</h3>
          <ul className="space-y-2">
            <li>Book Online for Best experience</li>
            <li>
              <a href="mailto:info@Adventurehub.com" className="hover:text-orange-500 transition-colors">
                info@tripShaala.com
              </a>
            </li>
            <li>Office</li>
            <li>
              <a href="tel:+911234567890" className="hover:text-orange-500 transition-colors">
                +91 1234567890
              </a>
            </li>
            <li>
              <a href="tel:+919876543210" className="hover:text-orange-500 transition-colors">
                +91 9876543210
              </a>
            </li>
            <li>
              <a href="mailto:Adventurehub@gmail.com" className="hover:text-orange-500 transition-colors">
                Email - tripShaala@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* copyright */}
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-200 text-center text-sm">
        <p>© {new Date().getFullYear()} tripShaala. All rights reserved.</p>
      </div>
    </footer>
  );
};
