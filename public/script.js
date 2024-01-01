document.addEventListener('DOMContentLoaded', function() {
    var calculateButton = document.getElementById('calculateButton');
    calculateButton.addEventListener('click', function() {
        var altitude = document.getElementById('altitudeSlider').value;
        calculateFallingTime(altitude);
    });
});

function updateSliderValue(value) {
    document.getElementById('altitudeValue').textContent = value;
}

function calculateFallingTime(altitude) {
    fetch('/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ altitude: altitude }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').textContent = `Time to fall: ${data.time.toFixed(2)} seconds`;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}