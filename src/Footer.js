import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerList">
        <h4 className="footerHeader">CareDash</h4>
        <ul className="footerList">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link
              to={{
                pathname: '/about',
                state: {
                  title: 'About',
                },
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: '/contact',
                state: {
                  title: 'Contact',
                },
              }}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: '/review',
                state: {
                  title: 'Write a Review',
                },
              }}
            >
              Write a Review
            </Link>
          </li>
        </ul>
      </div>
      <div className="footerList">
        <h4 className="footerHeader">Specialists</h4>
        <ul className="footerList">
          <li>
            <Link
              to={{
                pathname: '/pcp',
                state: {
                  title: 'Primary Care Physicians',
                },
              }}
            >
              Primary Care Physicians
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: '/pediatricians',
                state: {
                  title: 'Pediatricians',
                },
              }}
            >
              Pediatricians
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: '/optometrists',
                state: {
                  title: 'Optometrists',
                },
              }}
            >
              Optometrists
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: '/dentists',
                state: {
                  title: 'Dentists',
                },
              }}
            >
              Dentists
            </Link>
          </li>
        </ul>
      </div>
      <div className="social">
        <h4 className="footerHeader">Follow Us</h4>
        <ul className="socialList">
          <li className="socialLink">FB</li>
          <li className="socialLink">Twitter</li>
          <li className="socialLink">Insta</li>
          <li className="socialLink">Pinterest</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
