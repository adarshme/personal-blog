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
