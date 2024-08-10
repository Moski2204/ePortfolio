document.addEventListener('DOMContentLoaded', function() {
  const blogList = document.getElementById('blog-list');
  const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  const fetchUrl = isLocal ? '/posts.json' : '/ePortfolio/posts.json';

  fetch(fetchUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(posts => {
      posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'blogContent';
        postElement.innerHTML = `
          <h3>${post.title}</h3>
          <p>${post.description}</p>
        `;
        blogList.appendChild(postElement);
      });
    })
    .catch(error => console.error('Error loading blog posts:', error));
});
