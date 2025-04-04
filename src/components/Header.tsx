import React from 'react';
import { Menu, X, Sprout } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Farmers', href: '/farmers' },
    { name: 'Customers', href: '/customers' },
    { name: 'Agro-Allied Partners', href: '/partners' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-green-500 lg:border-none">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Sprout className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-green-600">HarvestHUB</span>
            </Link>
          </div>
          
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            {navigation.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-base font-medium ${
                  location.pathname === link.href
                    ? 'text-green-600'
                    : 'text-gray-700 hover:text-green-600'
                } transition-colors`}
              >
                {link.name}
              </Link>
            ))}
            <button className="ml-8 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors">
              Sign In
            </button>
          </div>

          <div className="lg:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-green-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4">
            {navigation.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`block py-2 text-base font-medium ${
                  location.pathname === link.href
                    ? 'text-green-600'
                    : 'text-gray-700 hover:text-green-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button className="mt-4 w-full bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
              Sign In
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;