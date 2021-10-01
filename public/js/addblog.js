const addBlog = async (e) => {
    e.preventDefault();

    const blogTitle = document.querySelector('blog_title').value.trim();
    const blogText = document.querySelector('blog_text').value.trim();

    fetch('/routehere', {
        method: 'POST',
        body: JSON.stringify({
            blogTitle,
            blogText,
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    alert("Success!");
    window.location.replace("/");
    
};

document.querySelector('blog_button').addEventListener('click', addBlog);