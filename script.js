function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  const logo = document.querySelector(".logo-js")
  
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    logo.setAttribute("src", "./assets/JSlogoBlack.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    logo.setAttribute("src", "./assets/JSlogo.png")
  }
}
