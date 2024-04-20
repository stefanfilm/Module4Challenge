// Function to display blog posts from localStorage
function displayBlogPosts() {
    const postsContainer = document.getElementById('posts-container');
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    // Clear existing posts
    postsContainer.innerHTML = '';

    // Display each blog post
    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p><strong>Author:</strong> ${post.author}</p>
            <p>${post.content}</p>
        `;
        postsContainer.appendChild(postElement);
    });
}

// Check user's theme preference from localStorage
const userTheme = localStorage.getItem('theme');
if (userTheme) {
    document.body.classList.add(userTheme);
}

// Display blog posts when the page loads
displayBlogPosts();

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Update user's theme preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.setItem('theme', '');
    }
});

backButton.addEventListener('click', () => {
    window.location.href = 'index.html'; // Redirect to the landing page
});