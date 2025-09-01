import "./style.css"

const button = document.getElementById("edit-text") as HTMLButtonElement
button.addEventListener("click", () => {
  browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
    if (tabs[0].id) {
      browser.tabs.sendMessage(tabs[0].id, { action: "edit-text" })
    } else {
      console.log("No active tab found")
    }
  })
})
