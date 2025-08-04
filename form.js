document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('myForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    fetch('https://script.google.com/macros/s/AKfycbyRUIPHhzwyaPQE8Tf-CSZ7O2L_pxZ2hhGEeNdUVxuRZG1f53YbSXDYHZ1cpPMMuu-v/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: form.name.value,
        contact: form.contact.value,
        address: form.address.value
      })
    })
    .then(response => response.text())
    .then(result => {
      alert('✅ সাবমিট সফল!');
      form.reset();
    })
    .catch(error => {
      alert('❌ সাবমিশন ব্যর্থ!');
      console.error('Error:', error);
    });
  });
});
