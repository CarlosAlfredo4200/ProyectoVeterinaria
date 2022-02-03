import React from 'react';

const Header = (props) => {

   
        const { h1, span} = props
      
  return  (

    <h1 className="font-black w-full text-4xl text-center pt-10 ">
    {h1} {''}
    <span className='text-indigo-600 '>{span}</span>
  </h1>
  )  

};

export default Header;
