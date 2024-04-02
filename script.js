function calculateImpact(system) {
    let days = document.getElementById('days').value;
    let months = document.getElementById('months').value;
    let years = document.getElementById('years').value;
    let totalDays = (+days) + (+months) * 30 + (+years) * 365;

    let impact = {
        water: totalDays * 4164, // Liters of water
        grain: totalDays * 18, // kg of grain
        land: totalDays * 3, // Sq.m of forested land
        co2: totalDays * 9, // kg CO2
        lives: totalDays * 0.22 // Animal lives
    };

    if (system === 'imperial') {
        // Convert metric to imperial here if needed
    }

    displayResults(impact);
}

function displayResults(impact) {
    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        Water: ${impact.water} Liters<br>
        Grain: ${impact.grain} kg<br>
        Land: ${impact.land} Sq.m<br>
        CO2: ${impact.co2} kg<br>
        Animal Lives: ${impact.lives}
    `;
}
