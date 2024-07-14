const DropDown = document.getElementsByClassName("dropdown-btn")
let i

for(i = 0; i < DropDown.length; i++){
    DropDown[i].addEventListener("click", function(){
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
    })
}

// agar page muncul pada bagian content
function loadContent(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-content').innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching content:', error);
        });
}

// search belum fix
function filterItems() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('cari');
    filter = input.value.toUpperCase();
    ul = document.getElementById("items-list");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

