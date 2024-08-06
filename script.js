document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const correctPassword = '2';

    if (password === correctPassword) {
        document.getElementById('protectedContent').style.display = 'block';
        document.getElementById('loginForm').style.display = 'none';
    } else {
        alert('Incorrect password. Please try again.');
    }
});