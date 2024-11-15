fetch('../modules/home-teacher.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('content').innerHTML = html;
    });