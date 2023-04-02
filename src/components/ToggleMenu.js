import React, { useState } from 'react';

function ToggleMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {isOpen ? 'Close menu' : 'Open menu'}
      </button>
      {isOpen && (
        <ul>
          <li>Menu item 1</li>
          <li>Menu item 2</li>
          <li>Menu item 3</li>
        </ul>
      )}
    </div>
  );
}

export default ToggleMenu;