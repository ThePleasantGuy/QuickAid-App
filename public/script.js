// Function to call emergency services
function callEmergencyService(service) {
    let message;
    switch (service) {
        case 'bepsi':
            message = 'Dialing Parents:Calling Parents';
            break;
        case 'police':
            message = 'Dialing Police: 9999';
            break;
        case 'ambulance':
            message = 'Dialing Ambulance: 9999';
            break;
        case 'fire':
            message = 'Dialing Fire Department: 9999';
            break;
        default:
            message = 'Unknown service requested.';
    }
    alert(message);
}

// Function to toggle burn types
function toggleBurnTypes() {
    const burnTypes = document.getElementById('burn-type-buttons');
    burnTypes.style.display = burnTypes.style.display === 'none' ? 'block' : 'none';
}

// Function to show the burn degree instructions
function showBurnType(degree) {
    const burnInstructions = document.getElementById('burn-instructions');
    let instructions = '';

    switch (degree) {
        case 'first-degree':
            instructions = `
                <h4>First-Degree Burn Instructions:</h4>
                <ul>
                    <li><strong>Cool the Burn:</strong> Place the affected area under cool (not cold) running water for 5-10 minutes.</li>
                    <li><strong>Apply a Soothing Lotion:</strong> Use a soothing lotion or aloe vera gel to alleviate pain.</li>
                    <li><strong>Cover the Burn:</strong> Cover it with a sterile, non-stick bandage.</li>
                    <li><strong>Avoid Breaking Blisters:</strong> Do not break any blisters that form.</li>
                    <li><strong>Pain Relief:</strong> Take over-the-counter pain relief medication if necessary.</li>
                    <li><strong>Monitor for Infection:</strong> Watch for signs of infection.</li>
                    <li><strong>Stay Hydrated:</strong> Drink plenty of fluids.</li>
                    <li><strong>Avoid Sun Exposure:</strong> Protect the burn from the sun while healing.</li>
                    <li><strong>When to Seek Medical Attention:</strong> If the burn is larger than 3 inches or on sensitive areas.</li>
                </ul>`;
            break;
        case 'second-degree':
            instructions = `
                <h4>Second-Degree Burn Instructions:</h4>
                <ul>
                    <li><strong>Cool the Burn:</strong> Place the affected area under cool running water for 10-15 minutes.</li>
                    <li><strong>Cover the Burn:</strong> Use a sterile, non-stick bandage.</li>
                    <li><strong>Pain Relief:</strong> Take over-the-counter pain relief if needed.</li>
                    <li><strong>Do Not Break Blisters:</strong> Cover them with a clean bandage.</li>
                    <li><strong>When to Seek Medical Attention:</strong> If the burn is larger than 3 inches or involves sensitive areas.</li>
                </ul>`;
            break;
        case 'third-degree':
            instructions = `
                <h4>Third-Degree Burn Instructions:</h4>
                <ul>
                    <li><strong>Call Emergency Services:</strong> Seek immediate medical help.</li>
                                        <li><strong>Do Not Immerse in Water:</strong> Do not place the burn under water, as this can cause shock.</li>
                    <li><strong>Cover the Burn:</strong> Use a clean, dry cloth to cover the burn. Avoid using ice or cold water.</li>
                    <li><strong>Monitor for Shock:</strong> Be aware of signs of shock (pale skin, rapid heartbeat, weakness).</li>
                    <li><strong>Do Not Remove Burned Clothing:</strong> If clothing is stuck to the burn, do not remove it.</li>
                    <li><strong>When to Seek Medical Attention:</strong> Always seek medical help for third-degree burns.</li>
                </ul>`;
            break;
        default:
            instructions = '<h4>No instructions available for the selected burn degree.</h4>';
    }

    burnInstructions.innerHTML = instructions;
}

// Event listeners for buttons
document.getElementById('call-parents').addEventListener('click', () => callEmergencyService('bepsi'));
document.getElementById('call-police').addEventListener('click', () => callEmergencyService('police'));
document.getElementById('call-ambulance').addEventListener('click', () => callEmergencyService('ambulance'));
document.getElementById('call-fire').addEventListener('click', () => callEmergencyService('fire'));

document.getElementById('toggle-burn-types').addEventListener('click', toggleBurnTypes);

// Example of calling the burn type function (you may need to set these buttons up in your HTML)
document.getElementById('first-degree').addEventListener('click', () => showBurnType('first-degree'));
document.getElementById('second-degree').addEventListener('click', () => showBurnType('second-degree'));
document.getElementById('third-degree').addEventListener('click', () => showBurnType('third-degree'));

