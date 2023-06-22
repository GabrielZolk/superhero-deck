import React from 'react';
import { BiLoaderCircle } from 'react-icons/bi';

import './Loading.css';

export default function Loading() {
  return (
    <div className='container'>
      <h2>Loading</h2>
      <div className='loading'>
        <BiLoaderCircle />
      </div>
    </div>
  );
}
