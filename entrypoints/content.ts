export default defineContentScript({
  matches: ["<all_urls>"],
  main() {
    browser.runtime.onMessage.addListener(message => {
      if (message.action === "edit-text") {
        console.log("Edit text", message.editStatus)
        if (message.editStatus) {
          enableEditMode()
        } else {
          disableEditMode()
        }
      }
    })
  },
})

function enableEditMode() {
  let elements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6,li,textarea,input,button,span")
  elements.forEach(el => {
    const htmlEl = el as HTMLElement
    htmlEl.setAttribute("contenteditable", "true")
    htmlEl.style.outline = "1px dashed orange"
  })
}

function disableEditMode() {
  let elements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6,li,textarea,input,button,span")
  elements.forEach(el => {
    const htmlEl = el as HTMLElement
    htmlEl.removeAttribute("contenteditable")
    htmlEl.style.outline = ""
  })
}
