import React from 'react';
import Contacts from '../contacts/Contacts';

const Home = () => {
  return (
    // basic grid from App.css
    <div className='grid-2'>
      <div>{/*Contact Form */}</div>
      <div>
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
