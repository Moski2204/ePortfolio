document.getElementById('darkMode').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    document.getElementById('darkMode').innerHTML = 'Light Mode';
  }
  else {
    document.getElementById('darkMode').innerHTML = 'Dark Mode';
  }
});
