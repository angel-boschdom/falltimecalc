document.getElementById('calculate').addEventListener('click', function() {
    var altitude = document.getElementById('altitude').value;
    fetch('/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ altitude: altitude }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').textContent = 'Falling time: ' + data.time + ' seconds';
    });
});