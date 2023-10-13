const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Simulated pricing data (replace with actual scraping logic)
const pricingData = {
    micro: { baseFare: 40, perKmCharge: 7, perMinCharge: 1 },
    mini: { baseFare: 50, perKmCharge: 8, perMinCharge: 1.5 },
    sedan: { baseFare: 70, perKmCharge: 10, perMinCharge: 2 }
};

app.post('/calculate-fare', (req, res) => {
    const { rideType, distance, time } = req.body;

    const { baseFare, perKmCharge, perMinCharge } = pricingData[rideType];
    const fare = baseFare + (perKmCharge * distance) + (perMinCharge * time);

    res.json({ suggestedFare: fare });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
