// Initialize Leaflet map
const map = L.map('map').setView([60.205491, 24.655899], 13); // Center near Karaportti 2

// Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Mark the destination (Karaportti 2)
const destination = [60.205491, 24.655899];
L.marker(destination).addTo(map).bindPopup('Karaportti 2').openPopup();

// Function to get coordinates from an address using DigiTransit Geocoding API
async function getCoordinates(address) {
    const url = `https://api.digitransit.fi/geocoding/v1/search?text=${encodeURIComponent(address)}`;
    try {
        const response = await axios.get(url);
        if (response.data && response.data.features && response.data.features.length > 0) {
            return response.data.features[0].geometry.coordinates.reverse(); // Returns [lat, lon]
        } else {
            throw new Error('Address not found.');
        }
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}

// Function to get the route from DigiTransit Routing API
async function getRoute(from, to) {
    const url = `https://api.digitransit.fi/routing/v1/routers/hsl/plan?from=${from[0]},${from[1]}&to=${to[0]},${to[1]}`;
    try {
        const response = await axios.get(url);
        if (response.data && response.data.plan && response.data.plan.itineraries) {
            const itinerary = response.data.plan.itineraries[0]; // First itinerary
            return {
                polyline: itinerary.legs.map(leg => leg.legGeometry.points).join(''),
                startTime: new Date(itinerary.startTime),
                endTime: new Date(itinerary.endTime)
            };
        } else {
            throw new Error('Route not found.');
        }
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}

// Handle form submission
document.getElementById('routeForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const address = document.getElementById('address').value;

    try {
        // Step 1: Get coordinates of the user-provided address
        const fromCoords = await getCoordinates(address);

        // Step 2: Get the route from user location to Karaportti 2
        const route = await getRoute(fromCoords, destination);

        // Step 3: Display route details
        document.getElementById('routeDetails').innerHTML = `
            <p>Start Time: ${route.startTime.toLocaleTimeString()}</p>
            <p>End Time: ${route.endTime.toLocaleTimeString()}</p>
        `;

        // Step 4: Draw the route on the map
        const decodedPolyline = L.Polyline.fromEncoded(route.polyline, { color: 'blue' });
        decodedPolyline.addTo(map);
        map.fitBounds(decodedPolyline.getBounds());
    } catch (error) {
        alert(error.message);
    }
});

