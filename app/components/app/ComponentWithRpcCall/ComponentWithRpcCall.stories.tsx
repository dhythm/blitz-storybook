import { ComponentStory, Meta } from "@storybook/react"
import { rest } from "msw"
import { RouterContext } from "next/dist/shared/lib/router-context"
import { NextRouter } from "next/router"
import { useEffect } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { ComponentWithRpcCall } from "./ComponentWithRpcCall"
const defaultQueryClient = new QueryClient()

export default {
  title: "Components/App/ComponentWithRpcCall",
} as Meta

const Template: ComponentStory<typeof ComponentWithRpcCall> = (args) => {
  const { worker } = window.msw

  useEffect(() => () => worker.resetHandlers())

  worker.use(
    rest.post("*/api/getCurrentUser", (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          name: "admin",
        })
      )
    })
  )

  return <ComponentWithRpcCall {...args} />
  return (
    <QueryClientProvider client={defaultQueryClient}>
      <RouterContext.Provider
        value={
          {
            basePath: "",
            pathname: "/",
            route: "/",
            asPath: "/",
            query: {},
            isReady: true,
            isLocaleDomain: false,
            isPreview: false,
            isFallback: false,
          } as NextRouter
        }
      >
        <ComponentWithRpcCall {...args} />
      </RouterContext.Provider>
    </QueryClientProvider>
  )
}
export const $Default = Template.bind({})
