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
        event.preventDefault(); // Prevent the default form submission

        // Retrieve values from form inputs
        const username = document.getElementById('username').value;
        const blogTitle = document.getElementById('blogTitle').value;
        const blogContent = document.getElementById('blogContent').value;

        // Create an object with blog post data
        const blogPost = {
            username: username,
            title: blogTitle,
            content: blogContent
        };

        // Convert the object to a JSON string
        const blogPostString = JSON.stringify(blogPost);

        // Store the JSON string in localStorage
        localStorage.setItem('blogPost', blogPostString);

        // Redirect to the posts page after storing the data
        window.location.href = 'posts.html'; // Update 'posts.html' with the actual file name of your posts page
    });
});