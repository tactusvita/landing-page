document.getElementById('emailForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = e.target.querySelector('input[type="email"]').value;
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdWrLJw5Qho541WWm9Y5VPvPIZAApcX8cgATzzgRMBe-PKyRw/formResponse';
    // Submit to Google Form
    fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors', // Important for cross-origin requests
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `entry.1082578028=${encodeURIComponent(email)}`
    })
    .then(() => {
        console.log('Email submitted:', email);
        e.target.reset();
    })
    .catch(error => console.error('Error:', error));
});