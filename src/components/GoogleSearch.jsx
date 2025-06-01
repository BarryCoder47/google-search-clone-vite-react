import React, { useEffect } from 'react';

const GoogleSearch = () => {
  useEffect(() => {
    const cx = '94a5685b7d9774410'; // your CSE ID
    const gcseScript = document.createElement('script');
    gcseScript.src = `https://cse.google.com/cse.js?cx=${cx}`;
    gcseScript.async = true;
    document.body.appendChild(gcseScript);

    return () => {
      document.body.removeChild(gcseScript);
    };
  }, []);

  return <div className="gcse-search"></div>;
};

export default GoogleSearch;
