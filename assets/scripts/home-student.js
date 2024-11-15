fetch('../modules/home-student.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('content').innerHTML = html;
    });