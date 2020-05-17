let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

export function parseDate(date) {
  date = date.split("-")
  let year = Number(date[0])
  let month = months[Number(date[1]) - 1]
  let day = Number(date[2])
  return month + " " + day + " " + year
}

export function toggleDarkMode() {
  const body = document.body
  // const toggleButton = document.getElementById("dark-mode-toggle-button")
  if (body.classList.toggle("dark-mode")) {
    localStorage.setItem("dark-mode", true)
    // toggleButton.classList.add("sun")
  } else {
    localStorage.setItem("dark-mode", false)
    // toggleButton.classList.remove("sun")
  }
}

var posY = 0
window.addEventListener("scroll", event => {
  const header = document.getElementById("site-header")
  if (window.scrollY - posY > 76) {
    header.classList.add("hide")
    posY = window.scrollY
  } else if (window.scrollY - posY < 0) {
    header.classList.remove("hide")
    posY = window.scrollY
  }
})
