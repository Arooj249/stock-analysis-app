// services/alphaVantage.js

import axios from 'axios';

const API_KEY = 'T223YL6MMSLHSSL6'; // Corrected API key
const BASE_URL = 'https://www.alphavantage.co/query';

// Function to fetch daily stock data
export const getDailyStockData = async (symbol) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        function: 'TIME_SERIES_DAILY_ADJUSTED',
        symbol: symbol,
        apikey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching stock data:", error);
    return null; 
  }  
};