/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import {React, useEffect, useState} from 'react'
import { EssentialPackContainer } from './Services.css'
import essentialData from './serviceData.json'
import { Link } from 'react-router-dom';

const EssentialPack = () => {
    // const [data, setData] = useState([]);
    //   useEffect(() => {
    //     fetch(essentialData)
    //     .then((response) => response.json())
    //     .then((data) => setData(data.services))
    //     .catch((error) => console.error('Error:', error));
    //   }, []);

      return (
        <EssentialPackContainer >
            <h3 className='essential-pack-title'><span>Essential</span> Resilience package</h3>
            <p className='essentials-tagline'>"Comprehensive software solutions tailored for educational institutions to enhance administrative efficiency and learning outcomes."</p>
            <div className='three-pack'>
                <div className={`card highlighted-card`}>
                    <div className="image">
                        <img src="@assets/react.svg" alt="visual rep of the vision." className="visual" />
                    </div>
                    <div className="message">
                        <p className="vision-text">
                            Something visionary to express the importance of having such features to automate part of the school's system.
                        </p>
                        <Link to='/services'>Learn More</Link>
                    </div>
                </div>
            </div>
        </EssentialPackContainer>
  )
}

export default EssentialPack
