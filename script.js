document.getElementById('darkModeBtn').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    document.getElementById('darkModeBtn').innerHTML = 'Light Mode';
  }
  else {
    document.getElementById('darkModeBtn').innerHTML = 'Dark Mode';
  }
});
