function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

function registerUser() {
  alert("User registered! Welcome to LenvuFire.");
  document.getElementById("register").classList.add("hidden");
  document.getElementById("withdraw").classList.remove("hidden");
  document.getElementById("ads").classList.remove("hidden");
  return false; // prevent form submission
}
