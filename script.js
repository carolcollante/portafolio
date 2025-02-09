// Menú móvil mejorado
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    // Opcional: Cambiar el icono del botón
    const icon = mobileMenuButton.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Cerrar menú al hacer clic en un enlace
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        const icon = mobileMenuButton.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
}); 
 
 // Toggle del tema
 const htmlElement = document.documentElement;
 const themeToggle = document.getElementById('theme-toggle');
 const themeIcon = themeToggle.querySelector('i');

 function toggleTheme() {
     htmlElement.classList.toggle('dark');
     themeIcon.classList.toggle('fa-moon');
     themeIcon.classList.toggle('fa-sun');
     localStorage.setItem('theme', htmlElement.classList.contains('dark') ? 'dark' : 'light');
 }

 // Cargar tema guardado
 if (localStorage.getItem('theme') === 'dark' || 
     (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
     htmlElement.classList.add('dark');
     themeIcon.classList.replace('fa-moon', 'fa-sun');
 }

 themeToggle.addEventListener('click', toggleTheme);