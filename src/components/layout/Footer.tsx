import React, { useEffect, useState } from 'react';

const COUNTER_URL = 'https://api.countapi.xyz/hit/brionysayani-my-portfolio/portfolio-views';

const Footer = () => {
  const [visitCount, setVisitCount] = useState('...');

  useEffect(() => {
    const fetchVisitCount = async () => {
      try {
        const response = await fetch(COUNTER_URL);
        const data = await response.json();
        setVisitCount(Number(data.value).toLocaleString());
      } catch {
        setVisitCount('0');
      }
    };

    fetchVisitCount();
  }, []);

  return (
    <footer className="bg-black text-white py-8 border-t-4 border-white mt-20 text-center">
        <h2 className="text-2xl font-shrikhand text-custom-pink mb-2">Made with ☕, 💻, and Taylor Swift Playlist</h2>

        <div className="text-sm font-bold text-custom-green mb-3">
            Unique visitors: <span>{visitCount}</span>
        </div>
        
        <div className="text-xs text-gray-500">
            © {new Date().getFullYear()} All Rights Reserved.
        </div>
    </footer>
  );
};

export default Footer;
