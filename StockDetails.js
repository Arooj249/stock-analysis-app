// components/StockDetails.js
import React from 'react';
import StockChart from './StockChart';

const StockDetails = ({ stockData }) => {
  const timeSeries = stockData['Time Series (Daily)'];
  const dates = Object.keys(timeSeries).reverse();
  const prices = dates.map(date => parseFloat(timeSeries[date]['4. close']));

  const latestData = timeSeries[dates[dates.length - 1]];

  return (
    <div className="stock-details-container">
      <h2>{stockData['Meta Data']['2. Symbol']}</h2>
      <div className="indicators">
        <p>Open: {latestData['1. open']}</p>
        <p>High: {latestData['2. high']}</p>
        <p>Low: {latestData['3. low']}</p>
        <p>Close: {latestData['4. close']}</p>
        <p>Volume: {latestData['6. volume']}</p>
      </div>
      <div className="chart-container">
        <StockChart dates={dates} prices={prices} />
      </div>
    </div>
  );
};

export default StockDetails;