import { useState, createContext } from 'react';

export const langContext = createContext('en');

const LangContext = ({ children }) => {
  const [lang, setLang] = useState('en');

  const toggleLang = () =>
    setLang(prevLang => (prevLang === 'en' ? 'es' : 'en'));

  return (
    <langContext.Provider value={{ lang, toggleLang }}>
      {children}
    </langContext.Provider>
  );
};

export default LangContext;
