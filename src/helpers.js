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
