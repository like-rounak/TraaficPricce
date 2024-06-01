import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import './PricingCard.css';
import ToggleSwitch from './ToggleSwitch';

const PricingCard = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [pageviews, setPageviews] = useState(100);

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  const handleSliderChange = (value) => {
    setPageviews(value);
  };

  const price = isYearly ? (pageviews * 0.16 * 0.75) : (pageviews * 0.16);

  return (
    <div className="pricing-card">
      <h2>Simple, traffic-based pricing</h2>
      <p>Sign-up for our 30-day trial. No credit card required.</p>
      <div className="slider-container">
        <span className="pageviews">{pageviews}K PAGEVIEWS</span>
        <span className="price">${price.toFixed(2)} / month</span>
      </div>
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        min={10}
        max={500}
        step={10}
        value={pageviews}
        onChange={handleSliderChange}
      />
      <ToggleSwitch isYearly={isYearly} onToggle={handleToggle} />
      
      <div className="features-button-container">
        <ul className="features">
          <li>Unlimited websites</li>
          <li>100% data ownership</li>
          <li>Email reports</li>
        </ul>
        <button className="trial-button">Start my trial</button>
      </div>
      
    </div>
  );
};

export default PricingCard;