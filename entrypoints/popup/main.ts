import "./style.css"

let editStatus: boolean = false
const button = document.getElementById("edit-text") as HTMLButtonElement
button.addEventListener("click", () => {
  editStatus = !editStatus
  button.textContent = editStatus ? "Deactivate edit mode" : "Activate edit mode"
  browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
    if (tabs[0].id) {
      browser.tabs.sendMessage(tabs[0].id, { action: "edit-text", editStatus })
    } else {
      console.log("No active tab found")
    }
  })
})
