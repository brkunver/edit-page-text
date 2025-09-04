import { defineConfig } from "wxt"

// See https://wxt.dev/api/config.html
export default defineConfig({
  manifest: {
    name: "Edit Page Text",
    description: "Edit texts in web pages easily",
    permissions: ["activeTab", "scripting"],
  },
  webExt: {
    disabled: true,
  },
})
