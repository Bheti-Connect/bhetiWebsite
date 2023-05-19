import React, { createContext, useState } from 'react';

const ScrollButtonContext = createContext({
  displayButton: true,
  toggleButton: () => {},
});

export const ScrollButtonProvider = ({ children }) => {
  const [displayButton, setDisplayButton] = useState(true);

  const toggleButton = () => {
    setDisplayButton((prevShowButton) => !prevShowButton);
  };

  return (
    <ScrollButtonContext.Provider value={{ displayButton, toggleButton }}>
      {children}
    </ScrollButtonContext.Provider>
  );
};

export default ScrollButtonContext;
