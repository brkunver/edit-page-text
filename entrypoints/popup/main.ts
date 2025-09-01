import "./style.css"

const activateButton = document.getElementById("activate-button") as HTMLButtonElement
activateButton.addEventListener("click", () => {
  browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
    if (tabs[0].id) {
      browser.tabs.sendMessage(tabs[0].id, { action: "edit-text", editStatus: true })
    } else {
      console.log("No active tab found")
    }
  })
})

const deactivateButton = document.getElementById("deactivate-button") as HTMLButtonElement
deactivateButton.addEventListener("click", () => {
  browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
    if (tabs[0].id) {
      browser.tabs.sendMessage(tabs[0].id, { action: "edit-text", editStatus: false })
    } else {
      console.log("No active tab found")
    }
  })
})
