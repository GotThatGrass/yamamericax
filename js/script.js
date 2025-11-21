const enterButton = document.getElementById("enter");
const leaveButton = document.getElementById("leave");

enterButton.addEventListener('click', function() {
    window.location.href = "home.html";
})

leaveButton.addEventListener('click', function() {
    window.location.href = "indexother.html";
})

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 200 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
