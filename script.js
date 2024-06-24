document.getElementById('listingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const price = document.getElementById('price').value;
    const size = document.getElementById('size').value;
    const pets = document.getElementById('pets').value;
    const coupleRooms = document.getElementById('coupleRooms').value;
    const image = document.getElementById('image').value;

    const newListing = `
        <div class="listing">
            <img src="${image}" alt="${title}">
            <h3>${title}</h3>
            <p>Price: $${price}/month</p>
            <p>Size: ${size} sqft</p>
            <p>Pets Allowed: ${pets}</p>
            <p>Couple Rooms: ${coupleRooms}</p>
            <button onclick="openFeedbackForm()">Rate Landlord</button>
        </div>
    `;

    document.getElementById('listings').insertAdjacentHTML('beforeend', newListing);
    alert('Listing added successfully!');
    document.getElementById('listingForm').reset();
});

function openFeedbackForm() {
    window.location.href = 'feedback.html';
}
