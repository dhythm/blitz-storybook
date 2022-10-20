import { setupWorker } from "msw"
import { setupServer } from "msw/node"

if (typeof global.process === "undefined") {
  const server = setupServer()
  server.listen()
  window.msw = { server }
  // const { server } = require("../app/mocks/server")
  // server.listen()
} else {
  const worker = setupWorker()
  worker.start()
  window.msw = { worker }
  // const { worker } = require("../app/mocks/browser")
  // worker.start()
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
