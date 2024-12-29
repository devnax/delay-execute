import React from 'react';
import { createRoot } from 'react-dom/client';
import delayExecute from './src'

const App = () => {
  const [query, setQuery] = React.useState('');

  const handleSearch = () => {
    console.log('Searching for:', query);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    delayExecute(handleSearch, 500);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
}
const rootEle = document.getElementById('root')
if (rootEle) {
  const root = createRoot(rootEle);
  root.render(<App />);
}
