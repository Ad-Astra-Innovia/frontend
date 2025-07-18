/* eslint-disable no-unused-vars */
import React from 'react'
import { useState, useEffect } from 'react';
import { CardContainer } from './Services.css';


const ServicesCards = () => {
  
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('/serviceData.json')
    .then((response) => response.json())
    .then((data) => setData(data.services))
    .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <CardContainer>
      {data && data.length > 0 ? (
        data.map((item) => (
          <div key={item.id} className='card'>
            <img src={item.img} />
            <div className='text-container'>
              <div className='text-content'>
                <h2>{item.name}</h2>
                {/* <p>{item.description}</p> */}
                <ul>
                  <li>{item.points[0]}</li>
                  <li>{item.points[1]}</li>
                  <li>{item.points[2]}</li>
                </ul>
              </div>
            </div>
            <a className='cta-button' href={`#pricing/${item.name}`}>Request Service</a>
          </div>
        ))
      ) : <p>Crafting Paradigm Shifting Technology For African Schools.</p>}
    </CardContainer>
  );
}

export default ServicesCards
