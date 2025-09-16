import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  disabled = false,
  onClick,
  type = 'button',
  ...props 
}) => {
  const baseClass = 'custom-btn';
  const variantClass = `btn-${variant}`;
  const sizeClass = `btn-${size}`;

  const buttonClass = `${baseClass} ${variantClass} ${sizeClass} ${className}`.trim();

  return (
    <button
      type={type}
      className={buttonClass}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      <span className="btn-content">
        {children}
      </span>
      <div className="btn-ripple"></div>
    </button>
  );
};

export default Button;