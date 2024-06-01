import React from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = ({ isYearly, onToggle }) => (
  <div className="toggle-switch">
    <span>Monthly Billing</span>
    <label className="switch">
      <input type="checkbox" checked={isYearly} onChange={onToggle} />
      <span className="slider"></span>
    </label>
    <span>Yearly Billing</span>
    <span className="discount">25% discount</span>
  </div>
);

export default ToggleSwitch;