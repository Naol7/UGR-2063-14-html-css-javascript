function toggleMenu(){
  const menuIcon = document.querySelector('nav ul');
  menuIcon.classList.toggle('active');
}
function submitForm() {
  let form = document.getElementById('myForm');
  let formData = new FormData(form);

  fetch('process_form.php', {
      method: 'POST',
      body: formData
  })
  .then(response => response.text())
  .then(data => {
      console.log(data); 
  })
  .catch(error => {
      console.error('Error:', error);
  });
}
