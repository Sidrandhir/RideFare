function calculateFare() {
    const rideType = document.getElementById('rideType').value;
    const distance = parseFloat(document.getElementById('distance').value);
    const time = parseInt(document.getElementById('time').value);

    // Send the input data to the backend for processing
    fetch('/calculate-fare', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ rideType, distance, time })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('suggestedFare').innerText = `Suggested Fare: ₹${data.suggestedFare}`;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
