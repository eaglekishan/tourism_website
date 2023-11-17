
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
    const root = document.querySelector(":root"); //grabbing the root element



    root.style.setProperty("--x", '1');
  } else {
    const root = document.querySelector(":root"); //grabbing the root element


      root.style.setProperty("--x", '0');
  }
}









