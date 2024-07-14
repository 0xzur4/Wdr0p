function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Tutup dropdown jika pengguna mengklik di luar itu, kecuali jika elemen yang diklik adalah bagian dari dropdown
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
