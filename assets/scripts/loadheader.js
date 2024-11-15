function loadHeader(userType) {
    const headerContainer = document.getElementById('header-container');
    const headerFile = userType === 'teacher' ? '../partials/header-teacher.html' : '../partials/header-student.html';
    
    fetch(headerFile)
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo cargar el archivo HTML');
            }
            return response.text();
        })
        .then(html => {
            headerContainer.innerHTML = html; // Inserta el HTML en el contenedor
        })
        .catch(error => {
            console.error('Error al cargar el header:', error);
        });
}