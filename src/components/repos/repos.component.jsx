import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Repos = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://api.github.com/users/octocat');
      setData(result.data);
    };

    fetchData();
  }, []);

  console.log('data from axios call: ', data);

  return <div>Repos Component</div>;
};

export default Repos;
