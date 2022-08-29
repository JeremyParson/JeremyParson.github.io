// set active class on all visible reveals and inactive on the others.
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.remove("inactive");
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
      reveals[i].classList.add("inactive");
    };
  };
};

// add inactive to all reveals
var reveals = document.querySelectorAll(".reveal");
for (let i = 0; i < reveals.length; i++) {
  let reveal = reveals[i];
  if (!reveal.classList.contains('inactive')) {
    reveal.classList.add("inactive")
  }
}

window.addEventListener("scroll", reveal);

reveal();
