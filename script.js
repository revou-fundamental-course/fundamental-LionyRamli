// script.js

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById('welcome-button');
    button.textContent += ' LIONY';
}); 

function submitForm() {
    const name = document.getElementById('name').value;
    const birthdate = document.getElementById('birthdate').value;
    const gender = document.getElementById('gender').value;
    const message = document.getElementById('message').value;

    if (name && birthdate && gender && message) {
        const output = document.getElementById('output');
        output.innerHTML = `
            <p><strong>Nama:</strong> ${name}</p>
            <p><strong>Tanggal Lahir:</strong> ${birthdate}</p>
            <p><strong>Jenis Kelamin:</strong> ${gender}</p>
            <p><strong>Pesan:</strong> ${message}</p>
        `;
    } else {
        alert('Semua field harus diisi!');
    }
}
