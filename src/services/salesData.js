import React, { useState, useEffect } from 'react';
import http from './http_common';

export default () => {
  const [sales, setSales] = useState([]);
  const [errormessage, setErrormessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    salesData();
  }, []);

  const salesData = async () => {
    setLoading(true);

    await http
      .post(`/DEV/stub`, { angular_test: 'angular-developer' })
      .then((response) => {
        if (response.status) {
          setSales(response.data);
          setLoading(false);
          //  console.log(response.data)

          return;
        } else {
          setLoading(false);
          setErrormessage('Fetching Data error');
          console.log('erro occured');
        }
      })
      .catch((e) => {
        setErrormessage('Something went wrong');
        setLoading(false);
        console.log('erro occured');
      });
  };

  return {
    sales,
    errormessage,
    salesData,
    loading,
  };
};
