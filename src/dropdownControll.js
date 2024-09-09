// handles dropdown menu behavior
export function dropdownControll() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdownMenu.addEventListener('click', () => {
        dropdownContent.classList.toggle('active');
    });
}
