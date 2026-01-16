import React from 'react';

const AccordionItem = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className={`accordion ${isOpen ? 'expanded' : ''}`}>
      <div className="accordion-header" onClick={onToggle}>
        <h2>{title}</h2>
        <span className="arrow">{isOpen ? '↑' : '↓'}</span>
      </div>
      {isOpen && (
        <div className="accordion-content">
          {children}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;