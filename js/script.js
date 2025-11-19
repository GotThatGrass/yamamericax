const enterButton = document.getElementById("enter");

enterButton.addEventListener('click', function() {
    window.location.href = "home.html";
})

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 200 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
