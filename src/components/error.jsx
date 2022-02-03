import React from 'react';

const error = ({children}) => {
  return  (
    <div className="bg-red-800 text-white rounded-md p-2 text-center uppercase font-bold mb-3 ">
    {children}
  </div>
  )
};

export default error;
