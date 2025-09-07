// Run after DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  // Part 1: Simple alert
  document.getElementById("welcomeBtn").addEventListener("click", () => {
    alert("Welcome to interactive Web Pages!")
  })

  // Part 2: Text change on hover
  const demo = document.getElementById("demo")
  demo.addEventListener("mouseover", () => {
    demo.style.color = "red"
    demo.innerText = "Hey, Welcome again!"
  })
  demo.addEventListener("mouseout", () => {
    demo.style.color = "black"
    demo.innerText = "Changeable text"
  })

  // Part 2: Counter
  let counter = 0
  const number = document.getElementById("number")
  const update = () => (number.innerText = counter)

  document.getElementById("decrease").addEventListener("click", () => {
    counter--
    update()
  })
  document.getElementById("increase").addEventListener("click", () => {
    counter++
    update()
  })

  // Part 3: Form validation
  const form = document.getElementById("myform")
  const errorMessage = document.getElementById("errorMessage")

  form.addEventListener("submit", (e) => {
    e.preventDefault()
    errorMessage.innerText = "" // clear old errors

    const name = document.getElementById("name").value.trim()
    const email = document.getElementById("email").value.trim()
    const password = document.getElementById("password").value.trim()

    const errors = []
    if (!name) errors.push("Name is required")
    if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)) errors.push("Enter a valid email")
    if (password.length < 6) errors.push("Password must be at least 6 characters")

    if (errors.length) {
      errorMessage.innerText = errors.join(", ")
    } else {
      alert("Form submitted successfully!")
      form.reset()
    }
  })
})
