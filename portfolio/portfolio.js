
function openNav() {
  document.getElementById("mySidebar").style.width = "15rem";
  document.getElementById("icon-bar").style.display = "none";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("icon-bar").style.display = "block";
}


const navItems = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

window.addEventListener(
    'scroll',
    function () {
        sections.forEach((section) => {
            const top = section.offsetTop - 50;
            const html = document.documentElement;
            const height = section.offsetHeight;

            navItems.forEach((navItem) => {
                const hrefNav = navItem.href.match(/#[a-zA-Z]+/)[0];
                const idSection = '#' + section.id;

                if (html.scrollTop >= top && top + height >= html.scrollTop) {
                    hrefNav === idSection
                        ? navItem.parentElement.classList.add('active')
                        : navItem.parentElement.classList.remove('active');
                } else {
                    hrefNav === idSection &&
                        navItem.parentElement.classList.remove('active');
                }
            });
        });
    },
    { passive: true }
);


const run = document.getElementById("run");
console.log(run);
const mess = [
  "Phạm Thị Thanh Hằng"
];
let messlength = mess.length;
let messIndex = 0;
let charIndex = 0;
function type(messIndex){
  let currentMess = mess[messIndex];
  if (charIndex < currentMess.length){
    let currentChar = currentMess.substring(0, charIndex + 1);
    run.textContent = currentChar;
    charIndex ++;
  }else{
    if(messIndex < messlength - 1){
      messIndex++;
    }else{
      messIndex = 0;
    }
    charIndex = 0;
  }
  setTimeout(type, 130, messIndex);
}
type(0);


const backgroundElement = document.getElementById('background');
const backgrounds = [
  'url(../image/anh1.jpg)',
  'url(../image/anh3.jpg)'
];
let currentBackground = 0;

function changeBackground() {
  backgroundElement.style.backgroundImage = backgrounds[currentBackground];
  currentBackground = (currentBackground + 1) % backgrounds.length;
}

setInterval(changeBackground, 1000);


const initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const slideIcons = document.querySelectorAll(".slider-wrapper .slide-icon");
  const sliderScrollbar = document.querySelector(".slider-scrollbar");
  const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
  
  scrollbarThumb.addEventListener("mousedown", (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumb.offsetLeft;
      const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
      
      const handleMouseMove = (e) => {
          const deltaX = e.clientX - startX;
          const newThumbPosition = thumbPosition + deltaX;
          const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
          const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
          
          scrollbarThumb.style.left = `${boundedPosition}px`;
          imageList.scrollLeft = scrollPosition;
      }
      const handleMouseUp = () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
      }
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
  });
  slideIcons.forEach(icon => {
      icon.addEventListener("click", () => {
          const direction = icon.id === "prev-slide" ? -1 : 1;
          const scrollAmount = imageList.clientWidth * direction;
          imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
  });
  const handleSlideicons = () => {
      slideIcons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
      slideIcons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
  }
  const updateScrollThumbPosition = () => {
      const scrollPosition = imageList.scrollLeft;
      const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
      scrollbarThumb.style.left = `${thumbPosition}px`;
  }
  imageList.addEventListener("scroll", () => {
      updateScrollThumbPosition();
      handleSlideicons();
  });
}
window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);


function validateform() {
  var name = document.getElementById("hovaten").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name.trim() === "") {
    showError("Vui lòng nhập họ và tên.");
    return false;
  }

  if (email.trim() === "") {
    showError("Vui lòng nhập địa chỉ email.");
    return false;
  } else {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showError("Vui lòng nhập địa chỉ email hợp lệ.");
      return false;
    }
  }

  if (message.trim() === "") {
    showError("Vui lòng nhập tin nhắn.");
    return false;
  }

  showSuccess("Biểu mẫu đã được gửi thành công!");

  return true;
}

function showError(errorMessage) {
  var errorElement = document.getElementById("error-message");
  errorElement.textContent = errorMessage;
}

function showSuccess(successMessage) {
  var successElement = document.getElementById("success-message");
  successElement.textContent = successMessage;

  document.getElementById("hovaten").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));