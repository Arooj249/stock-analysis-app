// App.js

import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import StockDetails from './components/StockDetails';
import { getDailyStockData } from './services/alphaVantage';
import './App.css'; // Add some basic styling

function App() {
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (symbol) => {
    setLoading(true);
    setError('');
    const data = await getDailyStockData(symbol);
    setLoading(false);

    if (data && data['Time Series (Daily)']) {
      setStockData(data);
    } else {
      setError('Could not find data for that stock. Please try another symbol.');
      setStockData(null);
    }
  };

  return (
    <div className="app-container">
      <h1>Stock Analysis App</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {stockData && <StockDetails stockData={stockData} />}
    </div>
  );
}

export default App;