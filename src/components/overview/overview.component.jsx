import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Overview = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://api.github.com/users/octocat');
      setData(result.data);
    };

    fetchData();
  }, []);

  console.log('data from call', data);

  return <div>Overview Component</div>;
};

export default Overview;
