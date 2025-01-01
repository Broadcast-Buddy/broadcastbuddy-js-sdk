// Node.js Example
const express = require('express');
const { BroadcastBuddySMS } = require('./broadcastbuddy');

const app = express();

// Your API key
const apiKey = 'your_api_key_here';

// Initialize SMS class
const sms = new BroadcastBuddySMS(apiKey);

// Check SMS balance endpoint
app.get('/check-sms-balance', async (req, res) => {
    try {
        const balanceResponse = await sms.checkBalance();
        res.json({ success: true, balance: balanceResponse });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});