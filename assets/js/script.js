document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    
    if (username.trim() === '' || title.trim() === '' || content.trim() === '') {
        alert('Please fill in all fields.');
    } else {
        // Store blog post data to localStorage or perform any other desired action
        console.log('Username:', username);
        console.log('Title:', title);
        console.log('Content:', content);
        
        // Redirect to the posts page
        window.location.href = 'posts.html';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const blogForm = document.getElementById('blogForm');

    blogForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Retrieve values from form inputs
        const username = document.getElementById('username').value;
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        // Validate input fields
        if (!username.trim() || !title.trim() || !content.trim()) {
            alert('Please fill in all fields.');
            return;
        }

        // Create an object for the new blog post
        const newBlogPost = {
            author: username,
            title: title,
            content: content
        };

        // Retrieve the current array of blog posts from localStorage, or initialize a new array if none exists
        let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

        // Add the new blog post to the array
        blogPosts.push(newBlogPost);

        // Save the updated array back to localStorage
        localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

        // Redirect to the posts page
        window.location.href = 'posts.html';
    });
});