import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors'; // Import CORS middleware

// Load environment variables from the .env file
dotenv.config();

const app = express();
const PORT = 5000;

// Enable CORS for all incoming requests
app.use(cors({
  origin: 'http://localhost:5173'  // Only allow requests from your frontend
}));

const API_KEY = process.env.VITE_API_KEY;  // Your Petfinder API key
const BASE_URL = 'https://api.petfinder.com/v2/animals';

if (!API_KEY) {
  console.error('API key is missing!');
  process.exit(1);  // Exit if API key is not found
}

// Proxy endpoint to forward requests to Petfinder API
app.get('/api/animals', async (req, res) => {
  console.log('Proxying to:', BASE_URL, req.query);
  try {
    const response = await axios.get(BASE_URL, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
      },
      params: req.query
    });
    res.json(response.data); // Send the data to the frontend
  } catch(error) {
    console.error('Error from Petfinder API:', error.response ? error.response.data : error.message); // Log more info
    res.status(500).json({ error: 'Failed to fetch data from Petfinder API', details: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
