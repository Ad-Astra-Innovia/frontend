/* eslint-disable no-unused-vars */
import React from 'react'
import { EssentialPackContainer } from './Services.css';
import { useServiceData } from '@/Hooks/useServiceData';


const ServicesCards = () => {
  const { data, loading, error } = useServiceData();
  const services = data["services"] || [];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong 🤔</p>;

  return (
    <EssentialPackContainer>
      
    </EssentialPackContainer>
  );
}

export default ServicesCards
