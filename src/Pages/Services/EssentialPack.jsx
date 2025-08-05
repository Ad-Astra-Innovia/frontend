/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import {React} from 'react'
import { EssentialPackContainer } from './Services.css'
import { Link } from 'react-router-dom';
import { useServiceData } from '@/Hooks/useServiceData';

const EssentialPack = () => {
    // Extracting essential features from the fetched data

    const {data, loading, error} = useServiceData()

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Something broke 💥</p>;

    const essentials = data["essential-features"] || [];

      return (
        <EssentialPackContainer >
            <h3 className='essential-pack-title'><span>Essential</span> Resilience package</h3>
            <p className='essentials-tagline'>"Comprehensive software solutions tailored for educational institutions to enhance administrative efficiency and learning outcomes."</p>
            <div className="three-pack">
            {essentials.map((item, index) => (
            <div className={`card ${item.class}`} key={index}>
                <div className="image">
                    <img src={item.image} alt={item.title} className="visual" />
                </div>
                <div className="message">
                    <h2>{item.title}</h2>
                    <p className="vision-text">{item.message}</p>
                    <Link to="/services">Learn More</Link>
                </div>
            </div>
            ))}
        </div>
        </EssentialPackContainer>
  )
}

export default EssentialPack

