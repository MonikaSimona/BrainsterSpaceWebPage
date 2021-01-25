import React from 'react';
const TriggerButton = ({ triggerText, buttonRef, showModal, margin }) => {
  return (
    <button
      className="black-button-navbar"
      ref={buttonRef}
      onClick={showModal}
    >
      {triggerText}
    </button>
  );
};
export default TriggerButton;