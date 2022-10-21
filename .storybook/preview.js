import { setupWorker } from "msw"
// import { QueryCache, ReactQueryCacheProvider } from "react-query"
// import { ReactQueryDevtools } from "react-query-devtools"

// const queryCache = new QueryCache()

if (typeof global.process === "undefined") {
  const worker = setupWorker()
  worker.start()
  window.msw = { worker }
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
// export const decorators = [
//   (Story) => (
//     <ReactQueryCacheProvider queryCache={queryCache}>
//       <Story />
//       {/* <ReactQueryDevtools /> */}
//     </ReactQueryCacheProvider>
//   ),
// ]
