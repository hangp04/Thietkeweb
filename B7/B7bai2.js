document.addEventListener("click", function(event) {
  var dropdown = document.getElementById("myDropdown");
var dropdown = document.getElementById("myDropdown");
  // Kiểm tra xem sự kiện click có phát sinh từ phần tử dropdown hay không
  if (event.target.closest(".dropdown")) {
    dropdown.classList.toggle("no-show");
  } else {
    dropdown.classList.add("no-show");
  }
});
function toggleDropdown(event) {
  var dropdown = document.getElementById("search-form");
  dropdown.classList.toggle("show");
}

document.addEventListener("click", function(event) {
  var dropdown = document.getElementById("search-form");
  var searchIcon = document.getElementById("search");

  // Kiểm tra xem sự kiện click có xảy ra ngoài phần tử "search-form" và biểu tượng tìm kiếm hay không
  if (!event.target.closest("#search-form") && !event.target.closest("#search")) {
    dropdown.classList.remove("show");
  }
});
function openNav() {
  document.getElementById("mySidebar").style.width = "40%";
  document.getElementById("icon-bar").style.display = "none";
  document.getElementById("banner").style.marginRight = "40%";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("icon-bar").style.display = "block";
  document.getElementById("banner").style.marginRight = "0";
}

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("menu").style.padding = "0px 10px";
    document.getElementById("logo").style.fontSize = "30px";
  } else {
    document.getElementById("menu").style.padding = "0px 10px";
    document.getElementById("logo").style.fontSize = "40px";
  }
}